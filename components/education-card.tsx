import { GraduationCap, Calendar, Award, BookOpen, MapPin } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
  courses?: string[];
  current?: boolean;
}

export function EducationCard() {
  const education: Education[] = [
    {
      id: 1,
      degree: "Master of Science",
      field: "Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2022 - 2024",
      gpa: "3.9/4.0",
      achievements: [
        "Graduate Research Assistant - AI/ML Lab",
        "Published 2 papers in top-tier conferences",
        "Teaching Assistant for Data Structures",
      ],
      courses: [
        "Machine Learning",
        "Distributed Systems",
        "Advanced Algorithms",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Indian Institute of Technology",
      location: "Mumbai, India",
      duration: "2018 - 2022",
      gpa: "9.2/10.0",
      achievements: [
        "Dean's List - All semesters",
        "Best Final Year Project Award",
        "ACM Student Chapter President",
      ],
      courses: [
        "Data Structures",
        "Operating Systems",
        "Database Management",
        "Computer Networks",
      ],
    },
  ];

  return (
    <article className="bg-card border border-border/50 rounded-lg p-4 hover:border-border hover:shadow-sm transition-all duration-200">
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
        <span className="text-primary font-medium">portfolio</span>
        <span className="text-border/50">›</span>
        <span>education</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-4 h-4 text-primary" />
        <h2 className="text-base font-semibold text-primary">Education</h2>
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative pl-6 ${
              index !== education.length - 1
                ? "pb-4 border-b border-border/30"
                : ""
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 ${
                edu.current
                  ? "bg-primary border-primary animate-pulse"
                  : "bg-muted border-border"
              }`}
            />

            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {edu.degree} in {edu.field}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                  <BookOpen className="w-3 h-3" />
                  <span className="font-medium text-foreground/80">
                    {edu.institution}
                  </span>
                </div>
              </div>
              {edu.gpa && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 font-medium">
                  GPA: {edu.gpa}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{edu.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{edu.location}</span>
              </div>
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mb-3">
                <div className="flex items-center gap-1 text-xs font-medium text-foreground/70 mb-1.5">
                  <Award className="w-3 h-3" />
                  <span>Achievements</span>
                </div>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-xs text-foreground/70 flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {edu.courses && edu.courses.length > 0 && (
              <div>
                <span className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Key Courses
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-primary/8 text-primary/80 border border-primary/12"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
