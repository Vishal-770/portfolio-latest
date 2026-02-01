import { NextResponse } from "next/server";

type ContributionCalendar = Record<number, number>;

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

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query ($login: String!) {
          user(login: $login) {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `,
      variables: { login: username },
    }),
    cache: "no-store",
  });

  const json = await res.json();

  if (json.errors || !json.data?.user) {
    return NextResponse.json(
      { error: "GitHub GraphQL error", details: json.errors },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  }

  const days =
    json.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: any) => week.contributionDays
    );

  const calendar: ContributionCalendar = {};
  let totalSubmissions = 0;
  let activeDays = 0;

  for (const day of days) {
    const unix = Math.floor(new Date(day.date).getTime() / 1000);

    calendar[unix] = day.contributionCount;
    totalSubmissions += day.contributionCount;

    if (day.contributionCount > 0) activeDays++;
  }

  return NextResponse.json(
    {
      activeDays,
      totalSubmissions,
      calendar,
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
