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
  const [domain] = url.split("/");

  return (
    <article className="bg-card border border-border/50 rounded-lg p-4 hover:border-border hover:shadow-sm transition-all duration-200 group">
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5 truncate">
        <span className="text-primary font-medium truncate">{domain}</span>
        <span className="text-border/50 shrink-0">›</span>
        <span className="truncate text-muted-foreground/70">{url}</span>
      </div>

      <h3 className="text-base font-semibold text-primary group-hover:underline cursor-pointer mb-2 line-clamp-1 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-foreground/70 leading-normal mb-3.5 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 items-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-muted/40 text-foreground/70 border border-border/40 hover:bg-muted/60 hover:border-border/60 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
