"use client";

import { useState, useRef, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

export function ProjectCard({
  title,
  url,
  description,
  tags,
}: ProjectCardProps) {
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
  }, [description, isExpanded]);

  return (
    <div className="group py-4 border-b border-border/40 last:border-0 transition-colors duration-150">
      {/* URL breadcrumb */}
      <p className="text-xs text-muted-foreground mb-1 truncate">
        {url.replace("https://", "")}
      </p>

      {/* Title */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[15px] font-normal text-primary hover:underline underline-offset-2 decoration-primary/50 mb-1.5 leading-snug"
      >
        {title}
      </a>

      {/* Description */}
      <p 
        ref={textRef}
        className={`text-sm text-foreground/70 leading-relaxed mb-2 ${isExpanded ? "" : "line-clamp-2"}`}
      >
        {description}
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
        {tags.map((tag) => (
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
