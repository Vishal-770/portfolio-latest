export async function fetchGitHubProfileByUrl(githubUrl: string) {
  // Extract username from URL like https://github.com/username
  const parts = githubUrl.replace(/\/?$/, "").split("/");
  const username = parts[parts.length - 1];

  // Call our server-side API route which will use the GITHUB_TOKEN if present
  const res = await fetch(
    `/api/github?username=${encodeURIComponent(username)}`
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch GitHub data: ${res.status} ${text}`);
  }

  const json = await res.json();
  if (json.error)
    throw new Error(json.error || "Unknown error from GitHub API route");

  return json as { profile: any; repos: any[] };
}
