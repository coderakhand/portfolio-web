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

export const projects = [
  {
    name: "Chess WebApp",
    thumbnail: "/images/projects/chess.png",
    liveLink: "/",
    details: [
      {
        title: "Real-time Multiplayer Chess",
        content:
          "Built using WebSockets for instant, bi-directional communication between players.",
      },
      {
        title: "Features",
        content: "Implemented Move Timer, Spectator Mode, Challenge Friends",
      },
      {
        title: "Modular & Scalable",
        content:
          "Designed with scalability in mind, featuring structured user management and a custom game state management system.",
      },
    ],
    githubLink: "https://github.com/coderakhand/chess-app",
    tech: [
      "Reactjs",
      "WebSocket",
      "TailwindCss",
      "Framer",
      "ShadCN",
      "Blender",
      "Three.js",
    ],
  },
  {
    name: "V Meet",
    thumbnail: "/images/projects/wechat.png",
    liveLink: "/",
    details: [
      {
        title: "Real-time video and audio communication",
        content:
          "It is powered by WebRTC using Mediasoup SFU for scalable, low-latency media streaming.",
      },

      {
        title: "Optimized for Performance",
        content:
          "Uses simulcast, bandwidth estimation, and selective forwarding to support varying network conditions.",
      },
    ],
    githubLink: "https://github.com/coderakhand/we-meet",
    tech: ["Reactjs", "TailwindCSS", "Mediasoup", "WebSocket"],
  },
  {
    name: "PortFolio Website",
    thumbnail: "/images/projects/portfolio.png",
    liveLink: "/",
    details: [{ title: "", content: "" }],
    githubLink: "https://github.com/coderakhand/portfolio-web",
    tech: ["Nextjs", "Framer", "TailwindCSS"],
  },
];
