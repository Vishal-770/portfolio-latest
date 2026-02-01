import { NextResponse } from "next/server";

const GRAPHQL_URL = "https://leetcode.com/graphql";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "username is required" },
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

  const res = await fetch(GRAPHQL_URL, {
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
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
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

  if (!json?.data?.matchedUser) {
    return NextResponse.json(
      { error: "User not found" },
      {
        status: 404,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  }

  // ---- TOTAL QUESTIONS SOLVED ----
  const solvedArray = json.data.matchedUser.submitStatsGlobal.acSubmissionNum;

  const totalSolved =
    solvedArray.find((d: any) => d.difficulty === "All")?.count || 0;

  // ---- SUBMISSIONS (PAST 1 YEAR) & ACTIVE DAYS ----
  const calendarStr = json.data.matchedUser.userCalendar.submissionCalendar;

  const calendar = JSON.parse(calendarStr);

  let submissionsLastYear = 0;
  let activeDays = 0;

  Object.values(calendar).forEach((v: any) => {
    submissionsLastYear += v;
    if (v > 0) activeDays++;
  });

  return NextResponse.json(
    {
      totalSolved,
      submissionsLastYear,
      activeDays,
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
