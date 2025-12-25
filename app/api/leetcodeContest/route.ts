// app/api/leetcodeContest/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "username required" }, { status: 400 });
  }

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
      "User-Agent": "Mozilla/5.0",
    },
    body: JSON.stringify({
      query: `
        query ($username: String!) {
          userContestRanking(username: $username) {
            rating
            globalRanking
            totalParticipants
            attendedContestsCount
          }
        }
      `,
      variables: { username },
    }),
    next: { revalidate: 86400 },
  });

  const json = await res.json();

  // ✅ GraphQL error handling
  if (json.errors) {
    return NextResponse.json(
      { error: "LeetCode GraphQL error", details: json.errors },
      { status: 502 }
    );
  }

  // ✅ User has never attended a contest
  if (!json.data || !json.data.userContestRanking) {
    return NextResponse.json({
      rating: null,
      attended: 0,
      globalRanking: null,
      totalParticipants: null,
    });
  }

  const contest = json.data.userContestRanking;

  return NextResponse.json({
    rating: contest.rating,
    attended: contest.attendedContestsCount,
    globalRanking: contest.globalRanking,
    totalParticipants: contest.totalParticipants,
  });
}
