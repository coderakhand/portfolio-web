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
  const mode = useModeStore((state) => state.mode);
  return (
    <div className="relative w-full overflow-hidden flex flex-col gap-2 justify-center">
      <span
        className={`z-10 absolute inset-y-0 left-0  blur-xl bg-gradient-to-r ${
          mode === "light" ? "from-black/70" : "from-black"
        } to-transparent w-[60px] h-full`}
      ></span>
      <div className="relative w-full overflow-hidden flex flex-col gap-2 justify-center h-full">
        <MarqueeRow items={frontendSkills} speed={36} reverse={false} />
        <MarqueeRow items={backendSkills} speed={36} reverse={false} />
        <MarqueeRow items={OtherSkills} speed={36} reverse={false} />
      </div>
      <span
        className={`z-10 absolute inset-y-0 right-0  blur-xl bg-gradient-to-l ${
          mode === "light" ? "from-black/70" : "from-black"
        } to-transparent w-[60px] h-full`}
      ></span>
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
    <div className="w-full overflow-hidden py-0.5">
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
          ? " text-white whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-cardColor hover:bg-cardColorForeground shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] hover:text-brand"
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
