export interface SkillType {
  name: string;
  Imageformat?: string;
  customStyle: { dark: string; light: string };
}

export const frontendSkills: SkillType[] = [
  { name: "React", customStyle: { dark: "", light: "" } },
  { name: "TailwindCSS", customStyle: { dark: "", light: "" } },
  {
    name: "Nextjs",
    customStyle: {
      dark: "bg-gradient-to-br from-black via-gray-100 to-white rounded-full",
      light: "",
    },
  },
  { name: "Zustand", customStyle: { dark: "", light: "" } },
  {
    name: "ShadCN",
    customStyle: { dark: "bg-white rounded-full p-[0.8px]", light: "" },
  },
  { name: "Recoil", customStyle: { dark: "w-[15px]", light: "w-[15px]" } },
  { name: "Framer Motion", customStyle: { dark: "", light: "" } },
];

export const backendSkills: SkillType[] = [
  {
    name: "Nodejs",
    customStyle: { dark: "bg-slate-100 p-[0.7px] rounded-sm", light: "" },
  },
  { name: "Honojs", customStyle: { dark: "w-[16px]", light: "w-[16px]" } },
  {
    name: "Expressjs",
    customStyle: {
      dark: "bg-white w-[40px] rounded-sm p-1",
      light: "bg-gray-100 w-[40px] rounded-sm p-1",
    },
  },
  { name: "Prisma ORM", customStyle: { dark: "", light: "" } },
  { name: "MongoDB", customStyle: { dark: "", light: "" } },
  { name: "SQL", customStyle: { dark: "w-[15px]", light: "w-[15px]" } },
  {
    name: "Mediasoup",
    Imageformat: "png",
    customStyle: { dark: "", light: "" },
  },
];

export const OtherSkills: SkillType[] = [
  { name: "Docker", customStyle: { dark: "", light: "" } },
  { name: "Postman", customStyle: { dark: "", light: "" } },
  { name: "CloudFlare Workers", customStyle: { dark: "", light: "" } },
  { name: "Git", customStyle: { dark: "", light: "" } },
  { name: "C / C++", customStyle: { dark: "w-[15px]", light: "w-[15px]" } },
  {
    name: "JavaScript / TypeScript",
    customStyle: { dark: "w-[15px]", light: "w-[15px]" },
  },
];

export const codingProfiles = [
  {
    name: "leetcode",
    logo: "leetcode.svg",
    link: "https://leetcode.com/u/derak",
    maxRating: "1680",
  },
  {
    name: "codeforces",
    logo: "codeforces.svg",
    link: "https://codeforces.com/profile/derak",
    maxRating: "1155",
  },
  {
    name: "atcoder",
    logo: "atcoder.svg",
    link: "https://atcoder.jp/users/derak",
    maxRating: "526",
  },
  {
    name: "codechef",
    logo: "codechef.png",
    link: "https://codechef.com/users/derak",
    maxRating: "1519",
  },
];

export interface Project {
  name: string;
  demoVideo: string;
  description: string;
  liveLink: string;
  githubLink: string;
  tech: string[];
  thumbnail?: string;
  details?: {
    title: string;
    content: string;
  }[];
}

export const fullStackProjects: Project[] = [
  {
    name: "Chezz",
    demoVideo: "/videos/chezz.mp4",
    description: "Chezz is an platform for playing online chess where users can interact in live chat, spectate game, make friends.",
    liveLink: "/",
    githubLink: "https://github.com/coderakhand/chess-app",
    tech: [
      "Reactjs",
      "Tailwindcss",
      "Framer",
      "ShadCN",
      "Zustand",
      "WebSocket",
      "Nodejs",
      "Expressjs"
    ],
  },
  {
    name: "PortFolio",
    demoVideo: "",
    description: "",
    liveLink: "/",
    githubLink: "https://github.com/coderakhand/portfolio-web",
    tech: ["Nextjs", "Framer", "TailwindCSS"],
  },
];

export const frontendProjects: Project[] = [
  {
    name: "Formula1",
    demoVideo: "/videos/formula1.mp4",
    description:
      "Redesigned official formula1 website with cursor reveal and scroll trigger animations for increasing user interactivity.",
    liveLink: "https://formula1.coderakhand.xyz",
    githubLink: "https://github.com/coderakhand/formula1-web",
    tech: ["Nextjs", "Tailwindcss", "Framer", "GSAP"],
  },
  {
    name: "Stake",
    demoVideo: "/videos/stake.mp4",
    description: "A Landing Page clone of stake official website build with perfection in ui.",
    liveLink: "https://stake.coderakhand.xyz",
    githubLink: "https://github.com/coderakhand/stake-clone",
    tech: ["Nextjs", "Tailwindcss", "Framer"],
  },
];
