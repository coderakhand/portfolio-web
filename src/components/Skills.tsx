"use client";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <motion.div
        className="absolute flex gap-8"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <SkillComponent name={"React"} />
        <SkillComponent name={"TailwindCSS"} />
        <SkillComponent name={"Zustand"} />
        <SkillComponent name={"ShadCN"} />
        <SkillComponent name={"Next"} />
        <SkillComponent name={"Recoil"} />
        <SkillComponent name={"Next"} />
        <SkillComponent name={"Next"} />
        <SkillComponent name={"Next"} />
      </motion.div>
      ;
    </div>
  );
};

function SkillComponent({ name }: { name: string }) {
  return (
    <div className="bg-white/40 rounded-4xl flex justify-center items-center w-[100px] h-[30px]">
      {name}
    </div>
  );
}

export default Skills;
