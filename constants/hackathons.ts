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
}

const hackathons: Hackathon[] = [
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
    contributors: ["Vishal Prabhu", "Naveen V", "Meghna Ravikumar"],
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
    contributors: ["Vishal Prabhu", "", ""],
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
    contributors: ["Vishal Prabhu", "", "", "", "", ""],
  },
];

export default hackathons;
