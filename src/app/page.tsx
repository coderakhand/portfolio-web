"use client";
import Skills from "@/components/Skills";
import Image from "next/image";
import LetterGlitch from "@/components/LetterGlitch/LetterGlitch";

export default function Home() {
  return (
    <div className="py-[20px] flex justify-center min-h-screen min-w-screen bg-gradient-to-br from-[#111010] via-slate-500 to-[#111010]">
      <div className="py-[20px] flex flex-col gap-3 w-[800px]">
        <div className="flex  gap-3 items-center h-[140px] w-full">
          <div className="px-[30px] flex items-center w-[600px] bg-white/40 h-full rounded-2xl">
            <Image
              src="/akhand.jpeg"
              width={100}
              height={100}
              alt=""
              className="bg-black rounded-full"
            ></Image>
            <div className="px-[30px] py-[35px] h-full">
              <p className="text-2xl font-bold">Akhand Pratap Singh </p>
              <p>I am a {"developer"}</p>
            </div>
          </div>
          <div className="w-[200px] h-full rounded-2xl grid grid-cols-2 grid-rows-2 px-[25px]">
            <div className="flex justify-center items-center">
              <a href="https://github.com/coderakhand" target="_blank">
                <Image
                  src="/images/github.svg"
                  alt="Github Logo"
                  width={50}
                  height={50}
                  className="hover:bg-white/30 cursor-pointer rounded-lg"
                />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a href="mailto:coderakhand@gmail.com" target="_blank">
                <Image
                  src="/images/gmail.svg"
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                  className="hover:bg-white/30 cursor-pointer rounded-lg"
                />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a href="https://www.linkedin.com/in/coderakhand" target="_blank">
                <Image
                  src="/images/linkedin.svg"
                  alt="Linkedin Logo"
                  width={50}
                  height={50}
                  className="cursor-pointer rounded-xl"
                />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a href="https://x.com/coderakhand" target="_blank">
                <Image
                  src="/images/x.svg"
                  alt="X Logo"
                  width={60}
                  height={60}
                  className="cursor-pointer rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[120px] overflow-hidden">
          <Skills />
        </div>
        <div className="flex gap-6">
          <div className="w-full h-[400px] bg-white/40 rounded-xl"></div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <LetterGlitch
              glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
            <div className="h-full w-full absolute top-0 text-white text-xl flex flex-col items-center gap-3">
              <div className=" m-[30px] w-full flex justify-center text-white font-bold text-4xl">
                Coding Profiles
              </div>
              <div className="flex gap-5">
                <Image
                  src="/images/leetcode.svg"
                  alt="LeetCode Logo"
                  width={50}
                  height={50}
                  className="bg-white/98 rounded-xl p-[5px]"
                />
                <div className="flex justify-center items-center bg-white text-black h-full w-[250px] font-semibold rounded-2xl ">
                  Highest Rating: 1680
                </div>
              </div>
              <div className="flex gap-5">
                <Image
                  src="/images/codeforces.svg"
                  alt="CodeForces Logo"
                  width={50}
                  height={50}
                  className="bg-white/98 rounded-xl p-[5px]"
                />
                <div className="flex justify-center items-center bg-white text-black h-full w-[250px] font-semibold rounded-2xl ">
                  Highest Rating: 1155
                </div>
              </div>
              <div className="flex gap-5">
                <Image
                  src="/images/atcoder.svg"
                  alt="AtCoder Logo"
                  width={50}
                  height={50}
                  className="bg-white/98 rounded-xl p-[5px]"
                />
                <div className="flex justify-center items-center bg-white text-black h-full w-[250px] font-semibold rounded-2xl ">
                  Highest Rating: 526
                </div>
              </div>
              <div className="flex gap-5">
                <Image
                  src="/images/codechef.png"
                  alt="CodeChef Logo"
                  width={50}
                  height={50}
                  className="bg-white/98 rounded-xl"
                />
                <div className="flex justify-center items-center bg-white text-black h-full w-[250px] font-semibold rounded-2xl ">
                  Highest Rating: 1519
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
