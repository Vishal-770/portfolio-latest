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

    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`,
        { headers }
      ),
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

    return NextResponse.json({ profile, repos });
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
