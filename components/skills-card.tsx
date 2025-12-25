export function SkillsCard() {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Vercel", "GitHub"],
    Other: ["REST APIs", "GraphQL", "WebSockets", "Testing", "CI/CD"],
  }

  return (
    <article className="bg-card border border-border/50 rounded-lg p-4">
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
        <span className="text-primary font-medium">portfolio</span>
        <span className="text-border/50">›</span>
        <span>skills</span>
      </div>

      <h2 className="text-base font-semibold text-primary mb-4">Technical Skills</h2>

      <div className="space-y-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">{category}</h4>
            <div className="flex flex-wrap gap-1.5">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-primary/8 text-primary/80 border border-primary/12 hover:bg-primary/12 hover:border-primary/20 transition-colors cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
