import { ProjectCard } from "./project-card";
import { LeetCodeCard } from "./Leetcode/leetcode-card";
import { SkillsCard } from "./skills-card";
import { ExperienceCard } from "./experience-card";
import { HackathonsCard } from "./hackathons-card";
import { EducationCard } from "./education-card";
import { SocialsCard } from "./socials-card";
import GitHubCard from "./github-card";
import { AboutCard } from "./about-card";
import WrappedLeetCodeCard from "./Leetcode/WrappedLeetCodeCard";

export function ResultsContainer({
  activeTab = "all",
}: {
  activeTab?: string;
}) {
  const show = (id: string) => activeTab === "all" || activeTab === id;

  return (
    <div className="space-y-4">
      {/* About */}
      {show("about") || show("all") ? (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground ml-0.5 uppercase tracking-wide">
            About
          </h2>
          <AboutCard />
        </div>
      ) : null}

      {/* Coding Platforms */}
      {show("leetcode") || show("all") ? (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground ml-0.5 uppercase tracking-wide">
            Coding Profiles
          </h2>
          <div className="space-y-3">
            <WrappedLeetCodeCard />
            {show("github") || show("all") ? (
              <div className="mt-2">
                <GitHubCard />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Projects */}
      {show("projects") || show("all") ? (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground ml-0.5 uppercase tracking-wide">
            Latest Projects
          </h2>
          <div className="space-y-3">
            <ProjectCard
              title="File Drop — Secure File Sharing"
              url="https://file-drop7.vercel.app"
              description="Secure, collaborative & shareable file management built with Next.js + React. Personal storage, teams, public & password‑protected sharing, bulk actions, and modern UI."
              tags={[
                "Next.js",
                "React",
                "Clerk",
                "SupaBase",
                "MongoDB",
                "Tailwind CSS",
                "ShadcnUI",
              ]}
            />

            <ProjectCard
              title="BlockRaise DApp — Web3 Crowdfunding"
              url="https://github.com/Vishal-770/CrowdFundingDapp"
              description="Decentralized crowdfunding platform (Ethereum Sepolia). Creators launch campaigns, backers contribute on-chain; built with Next.js, Thirdweb, Solidity and Hardhat."
              tags={[
                "Next.js",
                "Solidity",
                "Thirdweb",
                "Hardhat",
                "Framer Motion",
                "Tailwind CSS",
              ]}
            />
            <ProjectCard
              title="Meme Sentinels — AI-powered DeFi Intelligence"
              url="https://github.com/Vishal-770"
              description="AI-driven memecoin intelligence: multi-agent token discovery, on-chain scoring via Envio Hypersync, social sentiment, wallet tracking, and secured AI-assisted trading with Hedera HCS audit logs."
              tags={[
                "Next.js",
                "AI Agents",
                "Envio Hypersync",
                "Hedera",
                "Viem",
                "Wagmi",
                "DeFi",
              ]}
            />
            <ProjectCard
              title="NFT Marketplace — Full Web3 Platform"
              url="https://nft-marketplace-wheat-xi.vercel.app"
              description="Full-stack NFT marketplace and rental platform: mint, buy, sell, rent NFTs with IPFS storage, royalties (ERC-2981), and rental mechanics. Built with Next.js, Solidity, Hardhat, Pinata/IPFS and Thirdweb integrations."
              tags={[
                "Next.js",
                "Solidity",
                "Hardhat",
                "IPFS",
                "Thirdweb",
                "Three.js",
              ]}
            />
            <ProjectCard
              title="URL Shortener — Modern URL Shortening Service"
              url="https://github.com/Vishal-770/URL-SHORTENER_NEW"
              description="Full-stack URL shortening service with analytics, QR generation, user auth (Clerk), detailed visit tracking, dashboards, and exportable reports. Built with Next.js, MongoDB, Clerk and Tailwind CSS."
              tags={[
                "Next.js",
                "MongoDB",
                "Clerk",
                "Tailwind CSS",
                "QR Code",
                "Analytics",
              ]}
            />
          </div>
        </div>
      ) : null}

      {/* Work Experience */}
      {show("experience") || show("all") ? <ExperienceCard /> : null}

      {/* Hackathons */}
      {show("hackathons") || show("all") ? <HackathonsCard /> : null}

      {/* Education */}
      {show("education") || show("all") ? <EducationCard /> : null}

      {/* Skills Section */}
      {show("skills") || show("all") ? <SkillsCard /> : null}

      {/* GitHub Card (separate section so it shows when `github` tab is active) */}
      {show("github") || show("all") ? (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground ml-0.5 uppercase tracking-wide">
            GitHub
          </h2>
          <GitHubCard />
        </div>
      ) : null}

      {/* Socials */}
      {show("socials") || show("all") ? <SocialsCard /> : null}
    </div>
  );
}
