export function SkillsCard() {
  const skills = {
    Frontend: [
      "React",
      "Next.js",
      "Shadcn UI",
      "Tailwind CSS",
      "GSAP",
      "framer-motion",
      "Bootstrap",
      "Vanilla JavaScript",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "MongoDB",
      "drizzle-orm",
    ],
    "Platforms & Tools": [
      "Git",
      "Docker",
      "Vercel",
      "AWS",
      "Axios",
      "React Router",
      "TanStack Query",
      "React Hook Form",
      "Zustand",
      "Redux",
    ],
    Languages: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C++",
      "C",
      "Java",
      "Solidity",
    ],
    Blockchain: ["Foundry", "thirdweb"],
    Other: ["SEO", "REST APIs", "GraphQL", "WebSockets", "CI/CD"],
  };

  return (
    <div className="bg-card border border-border/40 rounded-xl px-5 py-4 shadow-xs">
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
