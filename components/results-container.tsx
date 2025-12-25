import { ProjectCard } from "./project-card";
import { LeetCodeCard } from "./Leetcode/leetcode-card";
import { SkillsCard } from "./skills-card";
import { ExperienceCard } from "./experience-card";
import { HackathonsCard } from "./hackathons-card";
import { EducationCard } from "./education-card";
import { SocialsCard } from "./socials-card";
import WrappedLeetCodeCard from "./Leetcode/WrappedLeetCodeCard";

export function ResultsContainer() {
  return (
    <div className="space-y-4">
      {/* Coding Platforms */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground ml-0.5 uppercase tracking-wide">
          Coding Profiles
        </h2>
        <div className="space-y-3">
          <WrappedLeetCodeCard />
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground ml-0.5 uppercase tracking-wide">
          Latest Projects
        </h2>
        <div className="space-y-3">
          <ProjectCard
            title="E-commerce Platform"
            url="github.com/username/ecommerce"
            description="Full-stack e-commerce platform with Next.js, Stripe integration, and real-time inventory management."
            tags={["Next.js", "TypeScript", "Stripe", "PostgreSQL"]}
          />
          <ProjectCard
            title="AI Task Manager"
            url="github.com/username/ai-tasks"
            description="Intelligent task management application with AI-powered task suggestions and priorities."
            tags={["React", "OpenAI API", "Tailwind CSS", "Firebase"]}
          />
          <ProjectCard
            title="Real-time Collaboration Tool"
            url="github.com/username/collab-tool"
            description="Browser-based collaborative editor with WebSocket synchronization and operational transformation."
            tags={["WebSocket", "Vue.js", "Node.js", "Redis"]}
          />
        </div>
      </div>

      {/* Work Experience */}
      <ExperienceCard />

      {/* Hackathons */}
      <HackathonsCard />

      {/* Education */}
      <EducationCard />

      {/* Skills Section */}
      <SkillsCard />

      {/* Socials */}
      <SocialsCard />
    </div>
  );
}
