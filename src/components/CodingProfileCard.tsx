"use client";
import Image from "next/image";
import LetterGlitch from "./LetterGlitch/LetterGlitch";

export default function CodingProfileCard() {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <div className="h-full w-full absolute top-0 text-white text-xl flex flex-col items-center gap-3">
        <div className=" m-[30px] w-full flex justify-center font-bold text-4xl bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Coding Profiles
        </div>

        <a
          href="https://leetcode.com/u/derak"
          target="_blank"
          className="flex gap-5"
        >
          <Image
            src="/images/leetcode.svg"
            alt="LeetCode Logo"
            width={50}
            height={50}
            className="bg-white/98 rounded-xl p-[5px]"
          />

          <div className="flex justify-center items-center bg-gradient-to-br from-black/90 via-white/80 to-black/90 text-black h-full w-[250px] font-semibold rounded-2xl ">
            Highest Rating: 1680
          </div>
        </a>

        <a
          href="https://codeforces.com/profile/derak"
          target="_blank"
          className="flex gap-5"
        >
          <Image
            src="/images/codeforces.svg"
            alt="CodeForces Logo"
            width={50}
            height={50}
            className="bg-white/98 rounded-xl p-[5px]"
          />

          <div className="flex justify-center items-center bg-gradient-to-br from-black/90 via-white/80 to-black/90 text-black h-full w-[250px] font-semibold rounded-2xl ">
            Highest Rating: 1155
          </div>
        </a>

        <a
          href="https://atcoder.jp/users/derak"
          target="_blank"
          className="flex gap-5"
        >
          <Image
            src="/images/atcoder.svg"
            alt="AtCoder Logo"
            width={50}
            height={50}
            className="bg-white/98 rounded-xl p-[5px]"
          />

          <div className="flex justify-center items-center bg-gradient-to-br from-black/90 via-white/80 to-black/90 text-black h-full w-[250px] font-semibold rounded-2xl ">
            Highest Rating: 526
          </div>
        </a>

        <a
          href="https://www.codechef.com/users/derak"
          target="_blank"
          className="flex gap-5"
        >
          <Image
            src="/images/codechef.png"
            alt="CodeChef Logo"
            width={50}
            height={50}
            className="bg-white/98 rounded-xl"
          />

          <div className="flex justify-center items-center bg-gradient-to-br from-black/90 via-white/80 to-black/90 text-black h-full w-[250px] font-semibold rounded-2xl ">
            Highest Rating: 1519
          </div>
        </a>
      </div>
    </div>
  );
}
