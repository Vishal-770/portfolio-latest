import { ProjectsCard } from "./projects-card";
import WrappedLeetCodeCard from "./Leetcode/WrappedLeetCodeCard";
import { SkillsCard } from "./skills-card";
import { ExperienceCard } from "./experience-card";
import { HackathonsCard } from "./hackathons-card";
import { EducationCard } from "./education-card";
import { SocialsCard } from "./socials-card";
import GitHubCard from "./github-card";
import { AboutCard } from "./about-card";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <h2 className="text-sm font-medium text-muted-foreground whitespace-nowrap">
        {children}
      </h2>
      <div className="h-px bg-border/40 flex-1" />
    </div>
  );
}

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
        <section>
          <SectionTitle>About</SectionTitle>
          <AboutCard />
        </section>
      )}

      {/* 2️⃣ Skills */}
      {show("skills") && <SkillsCard />}

      {/* 3️⃣ Projects */}
      {show("projects") && <ProjectsCard activeTab={activeTab} />}

      {/* 4️⃣ GitHub */}
      {show("github") && (
        <section>
          <SectionTitle>GitHub Activity</SectionTitle>
          <GitHubCard />
        </section>
      )}

      {/* 5️⃣ Hackathons */}
      {show("hackathons") && <HackathonsCard activeTab={activeTab} />}

      {/* 6️⃣ Education */}
      {show("education") && <EducationCard />}

      {/* 7️⃣ LeetCode */}
      {show("leetcode") && (
        <section>
          <SectionTitle>LeetCode</SectionTitle>
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
