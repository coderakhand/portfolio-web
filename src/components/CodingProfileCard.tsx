"use client";
import Image from "next/image";
import MeshBgCard from "./MeshBgCard";
import { codingPlatformsList } from "@/config";

export default function CodingProfileCard() {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      <MeshBgCard />
      <div className="h-full w-full absolute top-0 text-white text-xl flex flex-col items-center gap-3 md:gap-6">
        <div className="mt-[15px] mb-[10px] w-full flex justify-center font-semibold text-4xl bg-gradient-to-br from-slate-300 via-white/40 to-slate-300 text-transparent bg-clip-text ">
          Coding Profiles
        </div>

        {codingPlatformsList.map((item, idx) => (
          <CodingPlatformCard key={idx} card={item} />
        ))}
      </div>
    </div>
  );
}

interface CodingPlatformType {
  card: { name: string; logo: string; link: string; maxRating: string };
}

function CodingPlatformCard({ card }: CodingPlatformType) {
  const { name, link, maxRating, logo } = card;
  return (
    <a href={link} target="_blank" className="flex gap-5">
      <Image
        src={`/images/codingProfiles/${logo}`}
        alt={`${name} logo`}
        width={50}
        height={50}
        className={`bg-white/98 rounded-xl ${
          name !== "codechef" ? "p-[5px]" : ""
        }`}
      />

      <div className="flex justify-center items-center bg-gradient-to-r from-black/60 via-black/90 to-black/60 text-[#EDEDED] h-full w-[250px] font-semibold rounded-2xl ">
        Highest Rating: {maxRating}
      </div>
    </a>
  );
}
