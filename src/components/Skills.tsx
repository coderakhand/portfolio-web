"use client";
import { useModeStore } from "@/store/States";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  frontendSkills,
  backendSkills,
  OtherSkills,
  SkillType,
} from "@/config";

const Skills = () => {
  return (
    <div className="relative w-full h-[105px] overflow-hidden flex flex-col gap-2 justify-center">
      <span className="z-10 absolute inset-y-0 left-0  blur-xl bg-gradient-to-r from-black/70 to-transparent w-[60px] h-full"></span>
      <div
        className="relative w-full overflow-hidden flex flex-col gap-2 justify-center"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0.7px 0.7px, rgba(6, 182, 212, 0.2) 0.7px, transparent 0)",
          backgroundSize: "8px 8px",
        }}
      >
        <MarqueeRow items={frontendSkills} speed={36} reverse={false} />
        <MarqueeRow items={backendSkills} speed={36} reverse={false} />
        <MarqueeRow items={OtherSkills} speed={36} reverse={false} />
      </div>
      <span className="z-10 absolute inset-y-0 right-0  blur-xl bg-gradient-to-l from-black/70 to-transparent w-[60px] h-full"></span>
    </div>
  );
};

function MarqueeRow({
  items,
  speed,
  reverse = false,
}: {
  items: SkillType[];
  speed: number;
  reverse?: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (rowRef.current) {
      setWidth(rowRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-4"
        ref={rowRef}
        initial={{
          x: reverse ? [0, width] : [0, -width],
        }}
        animate={{
          x: reverse ? [0, width] : [0, -width],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: speed,
        }}
        style={{ willChange: "transform" }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <SkillComponent key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function SkillComponent({ item }: { item: SkillType }) {
  const mode = useModeStore((state) => state.mode);
  return (
    <div
      className={`flex justify-center items-center gap-2 rounded-2xl ${
        mode === "dark"
          ? "bg-gradient-to-br from-black/40 via-black/30 to-black/40 text-white"
          : "bg-white/85"
      } px-4 py-1 min-w-[100px] text-sm overflow-hidden`}
    >
      <Image
        src={`/images/skills/${item.name.toLowerCase().replaceAll(" ", "")}.${
          item.Imageformat ?? "svg"
        }`}
        alt=""
        width={20}
        height={20}
        className={`${
          mode === "dark" ? item.customStyle.dark : item.customStyle.light
        } overflow-hidden`}
      />
      <p className="whitespace-nowrap">{item.name}</p>
    </div>
  );
}

export default Skills;
