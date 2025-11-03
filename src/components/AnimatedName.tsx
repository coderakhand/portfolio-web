"use client";

import { twMerge } from "tailwind-merge";
import { easeOut, motion } from "motion/react";

export default function AnimatedName({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-1  justify-center items-center w-full",
        className
      )}
    >
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: easeOut }}
          style={{
            WebkitBoxReflect:
              "below 1px linear-gradient(transparent, #ffffff33)",
            background: "linear-gradient(90deg, #fff, #00c3ff, #fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% 100%",
            animation: "shine 3s linear infinite",
          }}
          className="relative flex justify-center px-2 text-[26px] sm:text-3xl font-extrabold  rounded-lg overflow-hidden"
        >
          <p className="">Akhand Pratap Singh</p>
        </motion.div>
      </div>
    </div>
  );
}
