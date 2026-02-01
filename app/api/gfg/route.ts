// app/api/gfg/route.ts
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

  const res = await fetch(
    `https://practiceapi.geeksforgeeks.org/api/v1/user/profile/${username}/`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    }
  );

  const json = await res.json();

  return NextResponse.json(
    {
      score: json.data.score,
      problemsSolved: json.data.total_problems_solved,
      streak: json.data.pod_solved_current_streak,
      longestStreak: json.data.pod_solved_global_longest_streak,
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
