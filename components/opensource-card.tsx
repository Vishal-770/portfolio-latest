"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Star,
  GitPullRequest,
  ExternalLink,
  CheckCircle2,
  Clock,
  Tag,
} from "lucide-react";
import {
  openSourceContributions,
  OpenSourceContribution,
} from "../constants/opensource";

function OpenSourceItem({ item }: { item: OpenSourceContribution }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current && !isExpanded) {
        setCanExpand(
          textRef.current.scrollHeight > textRef.current.clientHeight
        );
      }
    };

    const timer = setTimeout(checkOverflow, 50);
    window.addEventListener("resize", checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [item.description, isExpanded]);

  return (
    <div className="group py-4 border-b border-border/40 last:border-0 transition-colors duration-150">
      {/* URL breadcrumb */}
      <p className="text-xs text-muted-foreground mb-1 truncate">
        {item.url.replace("https://", "")}
      </p>

      {/* Title */}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[15px] font-normal text-primary hover:underline underline-offset-2 decoration-primary/50 mb-1.5 leading-snug"
      >
        {item.title}
      </a>

      {/* Description */}
      <p
        ref={textRef}
        className={`text-sm text-foreground/70 leading-relaxed mb-2 ${
          isExpanded ? "" : "line-clamp-2"
        }`}
      >
        {item.description}
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
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OpenSourceCard({ activeTab }: { activeTab?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Default to showing 2 items as requested
  const displayedItems =
    isExpanded || activeTab === "opensource"
      ? openSourceContributions
      : openSourceContributions.slice(0, 2);

  const hasMore =
    openSourceContributions.length > 2 && activeTab === "all";

  return (
    <div className="py-2">
      {/* Section header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-foreground">Open Source</h2>
        <span className="text-xs text-muted-foreground">
          {openSourceContributions.length} results
        </span>
      </div>
      <div className="h-px bg-border/40 mb-1" />

      {/* Minimal Search Meta & Stat Pills */}
      <div className="my-2.5 space-y-2">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <a
            href="https://github.com/rabbitmq/rabbitmq-server"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline flex items-center gap-1"
          >
            rabbitmq/rabbitmq-server
            <ExternalLink className="w-3 h-3 text-muted-foreground" />
          </a>
          <span className="text-border/60">•</span>
          <span className="inline-flex items-center gap-1 text-foreground font-medium">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            13.8k stars
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-muted/20 rounded p-2 sm:p-3 text-center border border-border/30">
            <div className="flex justify-center mb-1 sm:mb-1.5">
              <GitPullRequest className="w-4 h-4 text-primary" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-foreground">5</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 font-medium">
              Total PRs
            </div>
          </div>

          <div className="bg-muted/20 rounded p-2 sm:p-3 text-center border border-border/30">
            <div className="flex justify-center mb-1 sm:mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400">
              4
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 font-medium">
              Merged
            </div>
          </div>

          <div className="bg-muted/20 rounded p-2 sm:p-3 text-center border border-border/30">
            <div className="flex justify-center mb-1 sm:mb-1.5">
              <Clock className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-400">
              1
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 font-medium">
              Under Review
            </div>
          </div>
        </div>
      </div>

      {/* Contribution list (web search result style) */}
      <div>
        {displayedItems.map((item) => (
          <OpenSourceItem key={item.id} item={item} />
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
              See {openSourceContributions.length - 2} more results{" "}
              <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
