// app/api/leetcode/recent/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const limit = Number(searchParams.get("limit") ?? 15);

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
        query ($username: String!, $limit: Int!) {
          recentSubmissionList(username: $username, limit: $limit) {
            title
            titleSlug
            timestamp
            statusDisplay
            lang
          }
        }
      `,
      variables: { username, limit },
    }),
    cache: "no-store",
  });

  const json = await res.json();

  const accepted = json.data.recentSubmissionList
    .filter((s: any) => s.statusDisplay === "Accepted")
    .map((s: any) => ({
      title: s.title,
      slug: s.titleSlug,
      language: s.lang,
      timeAgo: timeAgo(Number(s.timestamp)),
    }));

  return NextResponse.json(accepted, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}

// helper
function timeAgo(ts: number) {
  const diff = Date.now() / 1000 - ts;
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(hours / 24);
  return hours < 24 ? `${hours} hours ago` : `${days} days ago`;
}
