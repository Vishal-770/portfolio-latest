"use client";

import { Github } from "lucide-react";
import { socialLinks } from "@/constants/user_details";
import { useQuery } from "@tanstack/react-query";
import { fetchGitHubProfileByUrl } from "@/services/FetchGitHubProfile";

export function GitHubCard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-profile", socialLinks.github],
    queryFn: () => fetchGitHubProfileByUrl(socialLinks.github),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <article className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-[#24292f] text-white">
          <Github className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">GitHub</h3>
          <p className="text-xs text-foreground/70">
            Open-source projects and contributions
          </p>
        </div>
      </div>

      <div className="mt-4">
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-6 bg-muted/40 rounded w-1/3" />
            <div className="h-4 bg-muted/40 rounded w-1/2" />
          </div>
        ) : isError || !data ? (
          <div className="text-xs text-destructive">
            Failed to load GitHub data.
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={data.profile.avatar_url}
                alt={data.profile.login}
                className="w-12 h-12 rounded-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <a
                    href={data.profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    {data.profile.name ?? data.profile.login}
                  </a>
                  <span className="text-xs text-foreground/60">
                    • @{data.profile.login}
                  </span>
                </div>
                {data.profile.bio && (
                  <div className="text-xs text-foreground/70">
                    {data.profile.bio}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 text-xs text-foreground/70">
              <div className="px-2 py-1 bg-muted/30 rounded">
                Repos:{" "}
                <span className="font-medium text-foreground">
                  {data.profile.public_repos}
                </span>
              </div>
              <div className="px-2 py-1 bg-muted/30 rounded">
                Followers:{" "}
                <span className="font-medium text-foreground">
                  {data.profile.followers}
                </span>
              </div>
              <div className="px-2 py-1 bg-muted/30 rounded">
                Following:{" "}
                <span className="font-medium text-foreground">
                  {data.profile.following}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mt-2">Recent repos</h4>
              <div className="mt-2 space-y-2">
                {data.repos.map((r: any) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-muted/20 hover:bg-muted/40 border border-border/20"
                  >
                    <div>
                      <div className="text-sm font-medium">{r.name}</div>
                      {r.description && (
                        <div className="text-xs text-foreground/60">
                          {r.description}
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-foreground/60 flex items-center gap-2">
                      <span>★ {r.stargazers_count}</span>
                      {r.language && (
                        <span className="px-2 py-0.5 bg-muted/10 rounded">
                          {r.language}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default GitHubCard;
