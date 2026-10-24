"use client";

import { useState } from "react";
import { openSourceRepos } from "../constants/opensource";
import { ProjectCard } from "./project-card";

export function OpenSourceCard({ activeTab }: { activeTab?: string }) {
  return (
    <div className="py-2">
      {/* Section header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-foreground">Open Source Contributions</h2>
        <span className="text-xs text-muted-foreground">
          {openSourceRepos.length} contributed repositories
        </span>
      </div>
      <div className="h-px bg-border/40 mb-1" />

      {/* Repo list */}
      <div>
        {openSourceRepos.map((repo) => (
          <ProjectCard
            key={repo.id}
            title={repo.name}
            url={repo.url}
            description={repo.description}
            tags={repo.tags}
          />
        ))}
      </div>
    </div>
  );
}
