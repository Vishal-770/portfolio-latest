// app/api/leetcode/heatmap/route.ts
import { NextResponse } from "next/server";

// ✅ Explicit type for calendar
type SubmissionCalendar = Record<string, number>;

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
          matchedUser(username: $username) {
            userCalendar {
              submissionCalendar
            }
          }
        }
      `,
      variables: { username },
    }),
    cache: "no-store",
  });

  const json = await res.json();

  const calendarStr = json.data.matchedUser.userCalendar.submissionCalendar;

  // ✅ Parse + strongly type
  const calendar: SubmissionCalendar = JSON.parse(calendarStr);

  const values = Object.values(calendar); // now number[]

  return NextResponse.json(
    {
      calendar,
      totalSubmissions: values.reduce((sum, v) => sum + v, 0),
      activeDays: values.filter((v) => v > 0).length,
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
