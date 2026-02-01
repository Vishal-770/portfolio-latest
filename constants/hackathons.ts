export interface Hackathon {
  id: string;
  name: string;
  year: number;
  track: string;
  team: string;
  project: string;
  place: string;
  description: string;
  contributors: string[];
  link?: string;
  certificateLinks?: string[];
  prize?: string;
}

const hackathons: Hackathon[] = [
  {
    id: "defy26-2026",
    name: "DeFy26",
    year: 2026,
    track: "Open Innovation",
    team: "Trust me Bro",
    project: "Azoth DAO",
    place: "1st Place",
    description:
      "Azoth DAO is a privacy-first, agentic DAO powered by Inco and Nillion. Features confidential tokens, private voting, hidden proposal amounts, and AI-powered proposal analysis using nilAI and secure metadata storage via nilDB.",
    link: "https://azothdao.vercel.app",
    contributors: [
      "Kunal Singh Dadhwal",
      "Vishal Prabhu",
      "Prazwal Ratti",
      "Frank Xavio",
      "Naveen V",
    ],
    certificateLinks: [
      "https://drive.google.com/file/d/168MzrGiw96s2IS1fi-YZOljwDL1qcdqo/view?usp=drive_link",
      "https://drive.google.com/file/d/1V9lwxN8r-SEyjEEdaSpkUzPs1xue7m1l/view?usp=drive_link",
    ],
    prize: "$400 Inco bounty",
  },
  {
    id: "neutraldao-2025",
    name: "NeutralDAO Hackathon",
    year: 2025,
    track: "Blockchain",
    team: "Git Pusher",
    project: "FlexNFT",
    place: "Second Prize",
    description:
      "FlexNFT is an NFT rental marketplace that enables temporary leasing of NFTs through on-chain rental agreements and time-limited access, increasing accessibility and flexibility of digital ownership.",
    link: "https://github.com/Vishal-770/nft-marketplace",
    contributors: ["Vishal Prabhu", "", ""],
    certificateLinks: [
      "https://drive.google.com/file/d/1rPuz8d6OTLTVOgf3blyrWVU9P5fUrFeg/view?usp=drive_link",
    ],
  },
  {
    id: "eth-online-2025",
    name: "ETH Online",
    year: 2025,
    track: "Envio, Hedera",
    team: "Git Pusher",
    project: "Meme Sentinels",
    place: "Top 15%",
    description:
      "Multi-agent DeFi platform with fast Envio indexing, memecoin trading using Hedera Agentkit and A2A.",

    link: "https://ethglobal.com/showcase/meme-sentinel-0icnu",
    contributors: ["Vishal Prabhu", "1", "2"],
    certificateLinks: [
      "https://drive.google.com/file/d/1ekwpiaCccbVtVYEByOd8Zapfus76_y_7/view?usp=drive_link",
    ],
  },
  {
    id: "glytch-2025",
    name: "Glytch 2025",
    year: 2025,
    track: "Web3",
    team: "Git Pushers",
    project: "HACKX",
    place: "Top 8",
    description:
      "HACKX is a decentralized platform that automates hackathon organization: transparent judging, GitHub verification for submissions, on-chain proof of participation and achievement NFTs, and smart contracts for automated reward distribution.",
    link: "https://github.com/GIT-Pushers/Devs",
    contributors: ["Vishal Prabhu", "1", "2", "3", "4", "5"],
    certificateLinks: [
      "https://drive.google.com/file/d/18xgSfmJ4Q8p4oYmfrJD1FsFfkijktAAK/view?usp=drive_link",
    ],
  },
];

export default hackathons;
