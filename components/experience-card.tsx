import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: "full-time" | "part-time" | "internship" | "freelance";
  description: string[];
  skills: string[];
  current?: boolean;
}

export function ExperienceCard() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2023 - Present",
      type: "full-time",
      current: true,
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
      ],
      skills: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "Jun 2021 - Dec 2022",
      type: "full-time",
      description: [
        "Built real-time collaboration features using WebSocket",
        "Developed RESTful APIs handling 10K+ requests/minute",
        "Optimized database queries improving response time by 40%",
      ],
      skills: ["Vue.js", "Express", "MongoDB", "Redis", "TypeScript"],
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "Digital Agency",
      location: "New York, NY",
      duration: "Jan 2021 - May 2021",
      type: "internship",
      description: [
        "Developed responsive web applications using React",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Participated in agile sprints and daily standups",
      ],
      skills: ["React", "CSS", "JavaScript", "Figma"],
    },
  ];

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "part-time":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "internship":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "freelance":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <article className="bg-card border border-border/50 rounded-lg p-4 hover:border-border hover:shadow-sm transition-all duration-200">
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
        <span className="text-primary font-medium">portfolio</span>
        <span className="text-border/50">›</span>
        <span>work-experience</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-4 h-4 text-primary" />
        <h2 className="text-base font-semibold text-primary">
          Work Experience
        </h2>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative pl-6 ${
              index !== experiences.length - 1
                ? "pb-4 border-b border-border/30"
                : ""
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 ${
                exp.current
                  ? "bg-primary border-primary animate-pulse"
                  : "bg-muted border-border"
              }`}
            />

            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                  <Building2 className="w-3 h-3" />
                  <span className="font-medium text-foreground/80">
                    {exp.company}
                  </span>
                </div>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border font-medium capitalize ${getTypeColor(
                  exp.type
                )}`}
              >
                {exp.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-1 mb-3">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="text-xs text-foreground/70 flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-primary/8 text-primary/80 border border-primary/12"
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
