export function SkillsCard() {
  const skills = {
    Languages: [
      "TypeScript",
      "JavaScript",
      "Java",
      "C",
      "C++",
      "Python",
      "Rust",
      "Solidity",
    ],
    Frameworks: [
      "React.js",
      "Next.js",
      "Axum",
      "Nest.js",
      "Node.js",
      "Express.js",
      "Tauri",
      "Electron.js",
      "Foundry",
    ],
    Databases: [
      "PostgreSQL",
      "SQLx",
      "MongoDB",
      "Mongoose",
      "Drizzle ORM",
    ],
    Tools: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "CI/CD",
    ],
  };

  return (
    <div className="py-2">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-foreground">Skills</h2>
      </div>
      <div className="h-px bg-border/40 mb-4" />

      <div className="space-y-5">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-2.5">
              {category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="text-[12px] text-foreground/80 bg-muted/60 px-2.5 py-1 rounded-md hover:bg-muted transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
