import { Trophy, Calendar, Users, Award, ExternalLink } from "lucide-react";

interface Hackathon {
  id: number;
  name: string;
  organizer: string;
  date: string;
  position: string;
  project: string;
  description: string;
  teamSize: number;
  prize?: string;
  link?: string;
  tags: string[];
}

export function HackathonsCard() {
  const hackathons: Hackathon[] = [
    {
      id: 1,
      name: "HackMIT 2024",
      organizer: "MIT",
      date: "September 2024",
      position: "1st Place",
      project: "AI-Powered Healthcare Assistant",
      description:
        "Built an AI assistant that helps patients understand medical reports and schedule appointments.",
      teamSize: 4,
      prize: "$10,000",
      link: "https://devpost.com/project",
      tags: ["OpenAI", "React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      name: "Google Cloud Hackathon",
      organizer: "Google",
      date: "July 2024",
      position: "2nd Place",
      project: "Smart City Traffic Management",
      description:
        "Real-time traffic optimization system using IoT sensors and machine learning.",
      teamSize: 3,
      prize: "$5,000",
      tags: ["GCP", "TensorFlow", "Python", "IoT"],
    },
    {
      id: 3,
      name: "ETHGlobal NYC",
      organizer: "ETHGlobal",
      date: "April 2024",
      position: "Best DeFi Project",
      project: "Decentralized Micro-Lending Platform",
      description:
        "Peer-to-peer lending platform with smart contracts for underbanked communities.",
      teamSize: 4,
      prize: "$3,000",
      tags: ["Solidity", "React", "Ethereum", "Web3.js"],
    },
    {
      id: 4,
      name: "MLH Fellowship Hackathon",
      organizer: "Major League Hacking",
      date: "January 2024",
      position: "Top 10 Finalist",
      project: "Code Review AI Bot",
      description:
        "GitHub bot that provides intelligent code review suggestions using LLMs.",
      teamSize: 2,
      tags: ["Python", "GitHub API", "OpenAI", "Docker"],
    },
  ];

  const getPositionColor = (position: string) => {
    if (position.includes("1st"))
      return "bg-yellow-500/10 text-yellow-600 border-yellow-500/30";
    if (position.includes("2nd"))
      return "bg-gray-400/10 text-gray-500 border-gray-400/30";
    if (position.includes("3rd"))
      return "bg-orange-600/10 text-orange-600 border-orange-600/30";
    return "bg-primary/10 text-primary border-primary/30";
  };

  return (
    <article className="bg-card border border-border/50 rounded-lg p-4 hover:border-border hover:shadow-sm transition-all duration-200">
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
        <span className="text-primary font-medium">portfolio</span>
        <span className="text-border/50">›</span>
        <span>hackathons</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-4 h-4 text-primary" />
        <h2 className="text-base font-semibold text-primary">Hackathons</h2>
        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
          {hackathons.length} Events
        </span>
      </div>

      <div className="space-y-4">
        {hackathons.map((hackathon, index) => (
          <div
            key={hackathon.id}
            className={`${
              index !== hackathons.length - 1
                ? "pb-4 border-b border-border/30"
                : ""
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {hackathon.name}
                  </h3>
                  {hackathon.link && (
                    <a
                      href={hackathon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {hackathon.organizer}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getPositionColor(
                    hackathon.position
                  )}`}
                >
                  <Award className="w-3 h-3 inline mr-1" />
                  {hackathon.position}
                </span>
                {hackathon.prize && (
                  <span className="text-xs font-medium text-green-600">
                    {hackathon.prize}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{hackathon.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>Team of {hackathon.teamSize}</span>
              </div>
            </div>

            <div className="mb-2">
              <h4 className="text-xs font-semibold text-foreground/90 mb-1">
                {hackathon.project}
              </h4>
              <p className="text-xs text-foreground/60 leading-relaxed">
                {hackathon.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {hackathon.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-muted/40 text-foreground/70 border border-border/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
