"use client";

import { experiences } from "@/constants/experiences";

export function ExperienceCard() {
  return (
    <article className="py-2">
      {/* Section Header (Breadcrumb Style) */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
        <span className="text-primary font-medium">portfolio</span>
        <span className="text-border/50">›</span>
        <span>work-experience</span>
      </div>

      <h2 className="text-lg font-semibold text-primary mb-4">
        Work Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="group">
            {/* Breadcrumb */}
            <p className="text-xs text-muted-foreground mb-1 truncate">
              {`vishal.dev › experience › ${exp.company.toLowerCase().replace(/\s+/g, "-")}`}
            </p>

            {/* Company Title */}
            <h3 className="inline-block text-[15px] font-semibold text-primary mb-1.5 leading-snug">
              {exp.company}
            </h3>

            {/* Overall Meta (Location, Duration, Skills) */}
            <div className="text-[11px] text-muted-foreground mb-3.5 flex flex-wrap items-center gap-1.5 font-medium">
              <span>{exp.duration}</span>
              <span>•</span>
              <span>{exp.location}</span>
              {exp.skills && exp.skills.length > 0 && (
                <>
                  <span>•</span>
                  <span className="text-foreground/60">{exp.skills.join(", ")}</span>
                </>
              )}
            </div>

            {/* Nested Roles Timeline (Line at 5px offset) */}
            <div className="space-y-5 pl-4 border-l border-primary/20 ml-[5px]">
              {exp.roles.map((role, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline bullet dot (Centered exactly at 5px offset) */}
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

                  {/* Role Title and Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 mb-1.5">
                    <span className="text-sm font-semibold text-foreground">
                      {role.title}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-medium">
                      {role.duration}
                    </span>
                  </div>

                  {/* Role Description Points */}
                  {role.description && role.description.length > 0 && (
                    <ul className="space-y-1.5 pl-4 list-disc text-sm text-foreground/70 leading-relaxed font-normal">
                      {role.description.map((item, i) => (
                        <li key={i} className="marker:text-primary/75">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
