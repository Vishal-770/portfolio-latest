"use client";

import { useState, useRef, useEffect } from "react";
import {
  Calendar,
  Users,
  Award,
  ExternalLink,
  FileText,
  ChevronDown,
  ChevronUp,
  Package,
} from "lucide-react";
import hackathonsData, {
  Hackathon as HackathonConst,
} from "../constants/hackathons";

interface HackathonView {
  id: number;
  name: string;
  organizer: string;
  date: string;
  position: string;
  project: string;
  description: string;
  teamSize: number;
  prize?: string;
  link?: string;
  github?: string;
  showcase?: string;
  tags: string[];
  certificateLinks?: string[];
  npm?: string;
}

function HackathonItem({
  hackathon,
  getPositionColor,
}: {
  hackathon: HackathonView;
  getPositionColor: (position: string) => string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current && !isExpanded) {
        setCanExpand(textRef.current.scrollHeight > textRef.current.clientHeight);
      }
    };

    // Measure after paint
    const timer = setTimeout(checkOverflow, 50);

    window.addEventListener("resize", checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [hackathon.description, isExpanded]);

  return (
    <div className="group py-4 border-b border-border/40 last:border-0 transition-colors duration-150">
      {/* Top row: name + links + position badge */}
      <div className="flex items-start justify-between gap-3 mb-0.5">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <span className="text-[15px] font-normal text-foreground leading-snug">
            {hackathon.name}
          </span>
          {hackathon.link && (
            <a
              href={hackathon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors shrink-0"
              aria-label="Project Link"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {hackathon.npm && (
            <a
              href={hackathon.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors shrink-0"
              aria-label="NPM Package"
              title="NPM Package"
            >
              <Package className="w-3.5 h-3.5" />
            </a>
          )}
          {hackathon.certificateLinks &&
            hackathon.certificateLinks.filter((l) => l && l.trim()).length > 0 &&
            hackathon.certificateLinks
              .filter((l) => l && l.trim())
              .map((certLink, idx) => (
                <a
                  key={idx}
                  href={certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                  aria-label={`Certificate ${idx + 1}`}
                >
                  <FileText className="w-3.5 h-3.5" />
                </a>
              ))}
        </div>

        {/* Position + Prize */}
        <div className="flex flex-col items-end gap-1 shrink-0">
          {hackathon.position && hackathon.position.trim() && (
            <span className={`text-xs font-medium flex items-center gap-1 ${getPositionColor(hackathon.position)}`}>
              <Award className="w-3 h-3" />
              {hackathon.position}
            </span>
          )}
          {hackathon.prize && (
            <span className="text-[11px] font-medium text-green-600 dark:text-green-400">
              {hackathon.prize}
            </span>
          )}
        </div>
      </div>

      {/* Organizer + meta */}
      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
        {hackathon.organizer && (
          <span>{hackathon.organizer}</span>
        )}
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {hackathon.date}
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          Team of {hackathon.teamSize}
        </span>
      </div>

      {/* Project name + description */}
      <p className="text-sm font-medium text-foreground/80 mb-1">
        {hackathon.project}
      </p>
      <p 
        ref={textRef}
        className={`text-sm text-foreground/60 leading-relaxed mb-2 ${isExpanded ? "" : "line-clamp-2"}`}
      >
        {hackathon.description}
      </p>

      {canExpand && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-primary hover:underline mb-2 block focus:outline-none"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}

      {/* Tags */}
      {hackathon.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {hackathon.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function HackathonsCard({ activeTab }: { activeTab?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hackathons: HackathonView[] = hackathonsData.map(
    (h: HackathonConst, i) => ({
      id: i + 1,
      name: h.name,
      organizer: h.team || "",
      date: `${h.year}`,
      position: h.place,
      project: h.project,
      description: h.description,
      teamSize: (h.contributors || []).filter(Boolean).length || 1,
      prize: h.prize,
      link: h.link,
      npm: h.npm,
      certificateLinks: h.certificateLinks,
      tags: (h.track || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    }),
  );

  const getPositionColor = (position: string) => {
    if (position.includes("1st")) return "text-yellow-600 dark:text-yellow-400";
    if (position.includes("2nd")) return "text-slate-500 dark:text-slate-400";
    if (position.includes("3rd")) return "text-orange-600 dark:text-orange-400";
    return "text-primary";
  };

  const displayedHackathons =
    isExpanded || activeTab === "hackathons"
      ? hackathons
      : hackathons.slice(0, 5);

  const hasMore = hackathons.length > 5 && activeTab === "all";

  return (
    <div className="py-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-foreground">Hackathons</h2>
        <span className="text-xs text-muted-foreground">{hackathons.length} results</span>
      </div>
      <div className="h-px bg-border/40 mb-1" />

      {/* List */}
      <div>
        {displayedHackathons.map((hackathon) => (
          <HackathonItem
            key={hackathon.id}
            hackathon={hackathon}
            getPositionColor={getPositionColor}
          />
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
              See {hackathons.length - 5} more results <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
