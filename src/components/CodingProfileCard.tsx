"use client";
import Image from "next/image";
import { codingProfiles } from "@/config";
import { motion } from "motion/react";

export default function CodingProfileCard() {
  return (
    <div className="flex justify-center items-center gap-2  py-1 rounded-lg">
      <div className="flex flex-col gap-2">
        {[...Array(2)].map((_, idx) => (
          <CodingPlatformCard key={idx} card={codingProfiles[idx]} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {[...Array(2)].map((_, idx) => (
          <CodingPlatformCard key={idx} card={codingProfiles[2 + idx]} />
        ))}
      </div>
    </div>
  );
}

interface CodingPlatformType {
  card: { name: string; logo: string; link: string; maxRating: string };
}

function CodingPlatformCard({ card }: CodingPlatformType) {
  const { name, link, logo } = card;
  return (
    <motion.a
      href={link}
      target="_blank"
      className="flex justify-center items-center gap-1 h-11 w-11 aspect-square bg-neutral-200 rounded-lg border-1 border-white group"
    >
      <Image
        src={`/images/codingProfiles/${logo}`}
        alt={`${name} logo`}
        width={40}
        height={40}
        className={` ${name !== "codechef" ? "h-6 w-6 p-[1px]" : "h-10 w-10"}`}
      />
    </motion.a>
  );
}
