export async function fetchGitHubProfileByUrl(githubUrl: string) {
  // Extract username from URL like https://github.com/username
  try {
    const parts = githubUrl.replace(/\/?$/, "").split("/");
    const username = parts[parts.length - 1];

    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`
      ),
    ]);

    if (!profileRes.ok) {
      throw new Error(`GitHub profile fetch failed: ${profileRes.status}`);
    }
    if (!reposRes.ok) {
      throw new Error(`GitHub repos fetch failed: ${reposRes.status}`);
    }

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    return { profile, repos };
  } catch (err) {
    throw err;
  }
}
