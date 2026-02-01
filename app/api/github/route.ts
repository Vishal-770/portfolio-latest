import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "username query param required" },
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

    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const profileUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`;

    const [profileRes, reposRes] = await Promise.all([
      fetch(profileUrl, { headers, cache: "no-store" }),
      fetch(reposUrl, { headers, cache: "no-store" }),
    ]);

    if (!profileRes.ok) {
      const err = await profileRes.text();
      return NextResponse.json(
        {
          error: `Failed to fetch profile: ${profileRes.status}`,
          details: err,
        },
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
    if (!reposRes.ok) {
      const err = await reposRes.text();
      return NextResponse.json(
        { error: `Failed to fetch repos: ${reposRes.status}`, details: err },
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

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    // Try to fetch total contributions using GitHub GraphQL if token is available
    let contributionsTotal: number | null = null;
    if (token) {
      try {
        const graphqlRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          cache: "no-store",
          body: JSON.stringify({
            query: `query($login: String!) { user(login: $login) { contributionsCollection { contributionCalendar { totalContributions } } } }`,
            variables: { login: username },
          }),
        });

        if (graphqlRes.ok) {
          const gqlJson = await graphqlRes.json();
          contributionsTotal =
            gqlJson?.data?.user?.contributionsCollection?.contributionCalendar
              ?.totalContributions ?? null;
        }
      } catch (e) {
        // ignore GraphQL errors, contributionsTotal will remain null
      }
    }

    return NextResponse.json(
      { profile, repos, contributionsTotal },
      {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err) },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  }
}
