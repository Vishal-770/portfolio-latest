export interface Role {
  title: string;
  duration: string;
  description?: string[];
}

export interface Experience {
  id: number;
  company: string;
  location: string;
  duration: string;
  roles: Role[];
  skills: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "DAO Community",
    location: "VIT Chennai",
    duration: "Mar 2025 – Present",
    current: true,
    roles: [
      {
        title: "Technical Lead",
        duration: "Apr 2026 – Present",
      },
      {
        title: "Web Developer",
        duration: "Mar 2025 – Apr 2026",
        description: [
          "Developed and deployed the DAO Community website using Next.js, improving accessibility for the community.",
          "Built and maintained the DeFy26 hackathon website with responsive UI and structured event information pages.",
        ],
      },
    ],
    skills: ["Next.js", "React", "Tailwind CSS", "Web Development"],
  },
  {
    id: 2,
    company: "Android Club",
    location: "VIT Chennai",
    duration: "Mar 2025 – Apr 2026",
    current: false,
    roles: [
      {
        title: "Web Developer",
        duration: "Mar 2025 – Apr 2026",
        description: [
          "Implemented responsive frontend components for the Android Club website, improving usability across different devices.",
          "Developed the website for the club’s CTF event, supporting participation from 100+ competitors during the event.",
        ],
      },
    ],
    skills: ["Next.js", "React", "HTML/CSS", "TypeScript", "Responsive Design"],
  },
];
