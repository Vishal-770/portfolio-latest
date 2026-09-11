import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") || "vishalwelx18";

  try {
    const res = await fetch(
      `https://gfg-stats.tashif.codes/${username}/heatmap`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
        next: { revalidate: 21600 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch heatmap: ${res.status}`);
    }

    const json = await res.json();
    const data = json?.data;

    const calendar: Record<string, number> = {};
    if (data?.dailyContributions && Array.isArray(data.dailyContributions)) {
      data.dailyContributions.forEach(
        (item: { date: string; count: number }) => {
          if (item.date && item.count > 0) {
            const ts = Math.floor(
              new Date(`${item.date}T00:00:00Z`).getTime() / 1000
            );
            calendar[ts] = item.count;
          }
        }
      );
    }

    const totalSubmissions =
      data?.totalSubmissions ??
      Object.values(calendar).reduce((a, b) => a + b, 0);
    const activeDays =
      data?.totalActiveDays ?? Object.keys(calendar).length;
    const currentStreak = data?.currentStreak ?? 0;
    const longestStreak = data?.longestStreak ?? 0;

    return NextResponse.json(
      {
        calendar,
        totalSubmissions,
        activeDays,
        currentStreak,
        longestStreak,
      },
      {
        headers: {
          "Cache-Control":
            "public, max-age=21600, s-maxage=21600, stale-while-revalidate=60",
        },
      }
    );
  } catch (err: any) {
    console.error("Error fetching GFG heatmap:", err);

    return NextResponse.json(
      {
        calendar: {},
        totalSubmissions: 0,
        activeDays: 0,
        currentStreak: 0,
        longestStreak: 0,
      },
      {
        headers: {
          "Cache-Control":
            "public, max-age=60, s-maxage=60, stale-while-revalidate=30",
        },
      }
    );
  }
}
