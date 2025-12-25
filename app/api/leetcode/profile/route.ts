import { NextResponse } from "next/server";

const GRAPHQL_URL = "https://leetcode.com/graphql";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "username is required" },
      { status: 400 }
    );
  }

  const query = `
    query userProfileStats($username: String!) {
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
          ranking
        }
        languageProblemCount {
          languageName
          problemsSolved
        }
        tagProblemCounts {
          advanced {
            tagName
            problemsSolved
          }
          intermediate {
            tagName
            problemsSolved
          }
          fundamental {
            tagName
            problemsSolved
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    const data = await res.json();

    if (data.errors) {
      return NextResponse.json(
        { error: "Failed to fetch profile data", details: data.errors },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
