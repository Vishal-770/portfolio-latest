export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type?: "full-time" | "part-time" | "internship" | "freelance";

  description: string[];
  skills: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Web Developer",
    company: "DAO Community — VIT Chennai",
    location: " Chennai",
    duration: "2025 - Present ",

    description: [
      "Built the DAO Community website ",
      "Built the Defy26 website for the hackathon organized by the DAO Community",
    ],
    skills: ["Next.js", "React", "Web Development"],
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Android Club — VIT Chennai",
    location: "Chennai",
    duration: "2025 - Present ",

    description: [
      "Took part in building the Android Club website",
      "Implemented frontend components and responsive layouts",
    ],
    skills: ["Next.js", "React", "HTML", "CSS"],
  },
];
