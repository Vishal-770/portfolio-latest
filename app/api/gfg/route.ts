import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") || "vishalwelx18";

  let totalSolved = 0;
  let codingScore = 0;
  let currentStreak = 0;
  let longestStreak = 0;
  let activeDays = 0;
  let instituteRank: number | null = null;

  try {
    // 1. Fetch from official GFG profile page SSR
    const profileRes = await fetch(
      `https://www.geeksforgeeks.org/profile/${username}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        next: { revalidate: 21600 },
      }
    );

    if (profileRes.ok) {
      const html = await profileRes.text();
      const scoreMatch = html.match(/\\?"score\\?":\s*(\d+)/);
      const solvedMatch = html.match(/\\?"total_problems_solved\\?":\s*(\d+)/);
      const streakMatch = html.match(/\\?"pod_solved_current_streak\\?":\s*(\d+)/);
      const longestStreakMatch = html.match(/\\?"pod_solved_longest_streak\\?":\s*(\d+)/);
      const rankMatch = html.match(/\\?"institute_rank\\?":\s*(\d+)/);

      if (scoreMatch) codingScore = Number(scoreMatch[1]);
      if (solvedMatch) totalSolved = Number(solvedMatch[1]);
      if (streakMatch) currentStreak = Number(streakMatch[1]);
      if (longestStreakMatch) longestStreak = Number(longestStreakMatch[1]);
      if (rankMatch) instituteRank = Number(rankMatch[1]);
    }
  } catch (err) {
    console.error("Error fetching GFG profile SSR:", err);
  }

  try {
    // 2. Fetch stats & activeDays from gfg-stats endpoint
    const statsRes = await fetch(
      `https://gfg-stats.tashif.codes/${username}`,
      {
        headers: { "User-Agent": "Mozilla/5.0" },
        next: { revalidate: 21600 },
      }
    );

    if (statsRes.ok) {
      const statsJson = await statsRes.json();
      if (statsJson?.data) {
        if (!totalSolved && statsJson.data.totalSolved) {
          totalSolved = statsJson.data.totalSolved;
        }
        if (statsJson.data.totalActiveDays) {
          activeDays = statsJson.data.totalActiveDays;
        }
      }
    }
  } catch (err) {
    console.error("Error fetching GFG stats API:", err);
  }

  // Fallback for activeDays if not fetched yet
  if (!activeDays && currentStreak) {
    activeDays = currentStreak;
  }

  return NextResponse.json(
    {
      totalSolved,
      codingScore,
      currentStreak,
      longestStreak,
      activeDays,
      instituteRank,
    },
    {
      headers: {
        "Cache-Control":
          "public, max-age=21600, s-maxage=21600, stale-while-revalidate=60",
      },
    }
  );
}
