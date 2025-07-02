"use client";
import Image from "next/image";
import { codingProfiles } from "@/config";

export default function CodingProfileCard() {
  return (
    <div className="absolute bottom-0 w-full overflow-hidden pb-2">
      <div className="px-2 h-full w-full  text-white text-xl flex max-xmd:flex-wrap justify-center items-center gap-2 md:gap-6">
        {codingProfiles.map((item, idx) => (
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
    <a
      href={link}
      target="_blank"
      className="flex justify-center gap-1 h-[15px] w-[100px] xsm:w-[140px] xmd:w-[180px] max-xsm:mx-2"
    >
      <Image
        src={`/images/codingProfiles/${logo}`}
        alt={`${name} logo`}
        width={15}
        height={15}
        className={`bg-white/98 rounded-sm ${
          name !== "codechef" ? "p-0.5" : ""
        }`}
      />

      <div className="px-2 inline-flex items-center justify-center  text-[#EDEDED] h-full font-semibold rounded-sm text-xs gap-2 whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-cardColor hover:bg-cardColorForeground py-2 shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] hover:text-brand">
        Rating: {maxRating}
      </div>
    </a>
  );
}
