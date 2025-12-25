import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "username query param required" },
        { status: 400 }
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
      fetch(profileUrl, { headers }),
      fetch(reposUrl, { headers }),
    ]);

    if (!profileRes.ok) {
      const err = await profileRes.text();
      return NextResponse.json(
        {
          error: `Failed to fetch profile: ${profileRes.status}`,
          details: err,
        },
        { status: 502 }
      );
    }
    if (!reposRes.ok) {
      const err = await reposRes.text();
      return NextResponse.json(
        { error: `Failed to fetch repos: ${reposRes.status}`, details: err },
        { status: 502 }
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
          body: JSON.stringify({
            query: `query($login: String!) { user(login: $login) { contributionsCollection { contributionCalendar { totalContributions } } } }`,
            variables: { login: username },
          }),
        });

        if (graphqlRes.ok) {
          const gqlJson = await graphqlRes.json();
          contributionsTotal =
            gqlJson?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? null;
        }
      } catch (e) {
        // ignore GraphQL errors, contributionsTotal will remain null
      }
    }

    return NextResponse.json({ profile, repos, contributionsTotal });
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
