import { ProjectCard } from "./project-card";
import WrappedLeetCodeCard from "./Leetcode/WrappedLeetCodeCard";
import { SkillsCard } from "./skills-card";
import { ExperienceCard } from "./experience-card";
import { HackathonsCard } from "./hackathons-card";
import { EducationCard } from "./education-card";
import { SocialsCard } from "./socials-card";
import GitHubCard from "./github-card";
import { AboutCard } from "./about-card";
import { projects } from "../constants/projects";

export function ResultsContainer({
  activeTab = "all",
}: {
  activeTab?: string;
}) {
  const show = (id: string) => activeTab === "all" || activeTab === id;

  return (
    <div className="space-y-6">
      {/* 1️⃣ About */}
      {show("about") && (
        <section className="space-y-3">
          <h2 className="section-title">About</h2>
          <AboutCard />
        </section>
      )}

      {/* 2️⃣ Skills */}
      {show("skills") && <SkillsCard />}

      {/* 3️⃣ Projects */}
      {show("projects") && (
        <section className="space-y-3">
          <h2 className="section-title">Projects</h2>
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              url={p.url}
              description={p.description}
              tags={p.tags}
            />
          ))}
        </section>
      )}

      {/* 4️⃣ GitHub */}
      {show("github") && (
        <section className="space-y-3">
          <h2 className="section-title">GitHub</h2>
          <GitHubCard />
        </section>
      )}

      {/* 5️⃣ Hackathons */}
      {show("hackathons") && <HackathonsCard />}

      {/* 6️⃣ Education */}
      {show("education") && <EducationCard />}

      {/* 7️⃣ LeetCode */}
      {show("leetcode") && (
        <section className="space-y-3">
          <h2 className="section-title">LeetCode</h2>
          <WrappedLeetCodeCard />
        </section>
      )}

      {/* 8️⃣ Experience */}
      {show("experience") && <ExperienceCard />}

      {/* 9️⃣ Socials */}
      {show("socials") && <SocialsCard />}
    </div>
  );
}
