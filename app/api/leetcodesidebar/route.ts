// app/api/leetcode/community/route.ts
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
          matchedUser(username: $username) {
            profile {
              reputation
              reputationDiff
              solutionCount
              solutionCountDiff
              postViewCount
              postViewCountDiff
              categoryDiscussCount
              categoryDiscussCountDiff
            }
            languageProblemCount {
              languageName
              problemsSolved
            }
            tagProblemCounts {
              advanced { tagName problemsSolved }
              intermediate { tagName problemsSolved }
              fundamental { tagName problemsSolved }
            }
          }
        }
      `,
      variables: { username },
    }),
    next: { revalidate: 86400 },
  });

  return NextResponse.json(await res.json());
}
