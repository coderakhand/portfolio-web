"use client";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useModeStore } from "@/store/States";
import Skills from "@/components/Skills";
import ProjectsCard from "@/components/ProjectsCard";
import { useWebStyleStore } from "@/store/States";

export default function AnimatedPage() {
  const setWebStyle = useWebStyleStore((state) => state.setWebStyle);
  const mode = useModeStore((state) => state.mode);
  const setMode = useModeStore((state) => state.setMode);

  const darkBackground =
    "bg-gradient-to-br from-black/95 via-black/90 to-black/95";
  const lightBackground =
    "bg-gradient-to-br from-[#111010] via-slate-500 to-[#111010]";

  return (
    <div
      className={`relative flex justify-center min-h-screen min-w-screen max-xsm:px-[2px]  max-sm:px-[10px] sm:px-[20px] ${
        mode === "dark" ? darkBackground : lightBackground
      }`}
    >
      <div className="py-[20px] flex flex-col w-full tmd:w-[800px]">
        <div className="md:flex gap-3 items-center md:h-[140px] w-full mb-2">
          <ProfileCard />
          <div className="hidden md:flex flex-col py-[10px] justify-start items-center gap-3 h-full w-[50px] bg-black/40 rounded-xl">
            {mode === "dark" ? (
              <MdLightMode
                className="cursor-pointer text-4xl text-white rounded-full bg-black p-1"
                onClick={() => setMode("light")}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer text-4xl rounded-full bg-white p-1"
                onClick={() => setMode("dark")}
              />
            )}
            <button
              onClick={() => setWebStyle("simple")}
              className="text-3xl flex justify-center w-[35px] h-[35px] rounded-full bg-white/70"
            >
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                #
              </div>
            </button>
          </div>
          <div
            className={`bg-[url(/forest.png)] bg-cover max-md:relative max-md:pr-[40px] w-full h-[80px] max-md:mt-[10px] md:w-[150px] md:h-full md:rounded-2xl grid grid-cols-4 md:grid-cols-2 md:grid-rows-2 px-[10px]`}
          >
            <div className="flex justify-center items-center">
              <a href="mailto:coderakhand@gmail.com" target="_blank">
                <Image
                  src="/images/gmail.svg"
                  alt="Gmail Logo"
                  width={50}
                  height={50}
                  className="w-[40px] sm:w-[50px] max-sm:bg-[#EDEDED] hover:bg-white/30 cursor-pointer rounded-lg"
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
                  className="w-[50px] sm:w-[60px] cursor-pointer rounded-lg"
                />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a href="https://github.com/coderakhand" target="_blank">
                <Image
                  src="/images/github.svg"
                  alt="Github Logo"
                  width={50}
                  height={50}
                  className="w-[40px] md:w-[50px] max-sm:bg-[#EDEDED] hover:bg-white/30 cursor-pointer rounded-lg"
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
                  className="w-[40px] sm:w-[50px] cursor-pointer rounded-lg md:rounded-xl"
                />
              </a>
            </div>
            <div
              className={`hidden absolute right-0 h-[80px] w-[40px] max-md:flex flex-col justify-center items-center gap-2  bg-black/90 ${
                mode === "light" ? "rounded-xl" : ""
              }`}
            >
              {mode === "dark" ? (
                <MdLightMode
                  className="cursor-pointer text-3xl text-white rounded-full bg-black p-1"
                  onClick={() => setMode("light")}
                />
              ) : (
                <MdDarkMode
                  className="cursor-pointer text-3xl rounded-full bg-white p-1"
                  onClick={() => setMode("dark")}
                />
              )}

              <button
                onClick={() => setWebStyle("simple")}
                className="cursor-pointer text-3xl flex justify-center items-center w-[25px] h-[25px] md:w-[35px] md:h-[35px] rounded-full bg-white/70"
              >
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                  #
                </div>
              </button>
            </div>
          </div>
        </div>

        <Skills />

        <div className="">
          <ProjectsCard />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  return <div className="w-full h-10"></div>;
}
