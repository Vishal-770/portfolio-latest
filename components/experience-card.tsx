import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { experiences, type Experience } from "@/constants/experiences";

export function ExperienceCard() {
  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "part-time":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "internship":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "freelance":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <article className="bg-card border border-border/50 rounded-xl p-4 sm:p-5 hover:border-border/80 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-medium">
        <span className="text-primary">portfolio</span>
        <span className="text-border/50">/</span>
        <span>work-experience</span>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 bg-primary/10 rounded-lg">
          <Briefcase className="w-4 h-4 text-primary" />
        </div>
        <h2 className="text-lg font-bold text-foreground tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative pl-6 ${
              index !== experiences.length - 1
                ? "pb-6 border-b border-border/20"
                : ""
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${
                exp.current
                  ? "bg-primary border-primary animate-pulse"
                  : "bg-muted border-border"
              }`}
            />

            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-base font-bold text-foreground leading-tight">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span className="font-bold text-foreground/80">
                    {exp.company}
                  </span>
                </div>
              </div>
              <span
                className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wide ${getTypeColor(
                  exp.type,
                )}`}
              >
                {exp.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px] text-muted-foreground mb-3 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2 font-medium"
                >
                  <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex px-2.5 py-1 rounded-md text-[11px] font-bold bg-primary/5 text-primary/80 border border-primary/10 hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
