"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../constants/projects";
import { ProjectCard } from "./project-card";

export function ProjectsCard({ activeTab }: { activeTab?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedProjects =
    isExpanded || activeTab === "projects" ? projects : projects.slice(0, 5);

  const hasMore = projects.length > 5 && activeTab === "all";

  return (
    <div className="py-2">
      {/* Section header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-foreground">Projects</h2>
        <span className="text-xs text-muted-foreground">{projects.length} results</span>
      </div>
      <div className="h-px bg-border/40 mb-1" />

      {/* Project list */}
      <div>
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Show more */}
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-2 transition-colors"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              See {projects.length - 5} more results <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
