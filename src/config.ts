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

export const codingPlatformsList = [
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
    link: "codechef.com/users/derak",
    maxRating: "1519",
  },
];
