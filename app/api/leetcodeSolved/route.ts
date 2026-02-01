// app/api/leetcode/solved/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "username required" },
      {
        status: 400,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
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
          allQuestionsCount {
            difficulty
            count
          }
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
              totalSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username },
    }),
    cache: "no-store",
  });

  const json = await res.json();

  const solved = Object.fromEntries(
    json.data.matchedUser.submitStatsGlobal.acSubmissionNum.map((d: any) => [
      d.difficulty,
      d.count,
    ])
  );

  const attempted = Object.fromEntries(
    json.data.matchedUser.submitStatsGlobal.totalSubmissionNum.map((d: any) => [
      d.difficulty,
      d.count,
    ])
  );

  const totals = Object.fromEntries(
    json.data.allQuestionsCount.map((d: any) => [d.difficulty, d.count])
  );

  return NextResponse.json(
    {
      solved: {
        all: solved.All,
        easy: solved.Easy,
        medium: solved.Medium,
        hard: solved.Hard,
      },
      totalProblems: {
        all: totals.All,
        easy: totals.Easy,
        medium: totals.Medium,
        hard: totals.Hard,
      },
      attempting: attempted.All - solved.All,
    },
    {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );
}
