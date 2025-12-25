import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "username required" }, { status: 400 });
  }

  try {
    const profileUrl = `https://www.geeksforgeeks.org/user/${username}/`;

    const res = await fetch(profileUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      next: { revalidate: 86400 }, // cache 24h
    });

    const html = await res.text();
    const $ = cheerio.load(html);

    // ---- BASIC STATS ----
    const score = Number($("div.score_card_value").first().text().trim());

    const problemsSolved = Number(
      $("div.score_card_value").eq(1).text().trim()
    );

    const rating = Number($("div.score_card_value").eq(2).text().trim());

    const streak = Number($("div.score_card_value").eq(3).text().trim());

    // ---- DIFFICULTY BREAKDOWN ----
    let easy = 0,
      medium = 0,
      hard = 0;

    $("div.problemTags span").each((_, el) => {
      const text = $(el).text();
      if (text.includes("Easy")) easy = Number(text.match(/\d+/)?.[0]);
      if (text.includes("Medium")) medium = Number(text.match(/\d+/)?.[0]);
      if (text.includes("Hard")) hard = Number(text.match(/\d+/)?.[0]);
    });

    return NextResponse.json({
      score,
      problemsSolved,
      rating,
      streak,
      difficulty: {
        easy,
        medium,
        hard,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GFG data" },
      { status: 500 }
    );
  }
}
