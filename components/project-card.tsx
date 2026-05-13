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
  return (
    <div className="group py-4 border-b border-border/40 last:border-0 hover:bg-muted/20 -mx-2 px-2 rounded-lg transition-colors duration-150">
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
      <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2 mb-2.5">
        {description}
      </p>

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
