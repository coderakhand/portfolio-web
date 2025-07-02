import { useEffect, useState } from "react";
import {
  AlignJustify,
  Aperture,
  ArrowLeft,
  ArrowRight,
  BatteryMedium,
  ChevronLeft,
  CircleUserRound,
  EllipsisVertical,
  Plus,
  RotateCw,
  Signal,
  Squircle,
  Star,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { projects } from "@/config";

const ProjectsCard = () => {
  return (
    <div className="w-full px-4 sm:px-8">
      <p className="p-1 mt-2 mb-6 xmd:mt-4 xmd:mb-10 text-center bg-gradient-to-br from-slate-300 via-white/40 to-slate-300 text-transparent bg-clip-text font-semibold text-4xl xmd:text-5xl sm:text-6xl">
        Projects
      </p>
      <div className="flex flex-col gap-10 xmd:gap-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <MobilePhoneSkeleton project={projects[0]} />
          <ProjectShowcase project={projects[0]} />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5">
          <ProjectShowcase project={projects[1]} />
          <MonitorSkeleton project={projects[1]} />
        </div>
      </div>
    </div>
  );
};

interface Project {
  name: string;
  thumbnail: string;
  liveLink: string;
  details: { title: string; content: string }[];
  githubLink: string;
  tech: string[];
}

function ProjectShowcase({ project }: { project: Project }) {
  return (
    <div className="flex-grow flex justify-center">
      <div className="text-white max-w-[440px]">
        <div className="flex gap-3 items-center justify-start">
          <a href={project.liveLink} className="text-2xl font-bold">
            {project.name}
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition"
          >
            Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 bg-gray-800 text-white text-xs rounded hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-col my-4 gap-2">
          {project.details.map((detail, idx) => (
            <div key={idx} className="text-sm text-slate-300">
              {" "}
              <span className="font-bold text-white">• {detail.title}: </span>
              {detail.content}
            </div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap max-w-[280px]">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-slate-200 text-slate-800 px-2 py-0.5 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobilePhoneSkeleton({ project }: { project: Project }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <div className="px-0.5 pt-1 pb-[2px] relative w-[160px] h-[300px] bg-[#5E5F6E] rounded-md flex flex-col items-center">
      <div className="mb-1 bg-black rounded-xl w-6 h-1"></div>
      <div className="relative w-full h-full bg-[#08080A] overflow-hidden rounded-sm flex items-center">
        <div className="absolute top-0 w-full h-2 bg-[#2C2C31] flex justify-end items-center gap-1 px-1">
          <div className="flex-grow flex justify-start text-[6px] text-white">
            {time}
          </div>
          <Wifi className="h-2 w-2 text-white" />
          <Signal className="h-2 w-2 text-white" />
          <BatteryMedium className="h-2 w-3 text-white" />
        </div>
        <Image src={project.thumbnail} alt="" width={160} height={80}></Image>
        <div className="absolute bottom-0 flex justify-center items-center w-full h-3 bg-[#2C2C31] text-xs gap-10">
          <AlignJustify className="w-2 h-2 text-white" />
          <Squircle className="w-2 h-2 text-white" />
          <ChevronLeft className="w-2 h-2 text-white" />
        </div>
      </div>
      <div className="absolute top-10 -right-0.5 bg-[#5E5F6E] w-0.5 h-6 rounded-sm"></div>
      <div className="absolute top-18 -right-0.5 bg-[#5E5F6E] w-0.5 h-4 rounded-sm"></div>
    </div>
  );
}

function MonitorSkeleton({ project }: { project: Project }) {
  return (
    <div className="w-[260px] max-md:pb-8">
      <div className="w-[260px] h-[160px] bg-[#08080A] rounded-sm overflow-hidden border-1 border-[#DCDDDF]">
        <div className="w-full h-2 flex justify-center items-center">
          <Aperture className="rounded-xl absolute h-0.5 w-0.5 text-black bg-white" />
        </div>
        <div className="w-full h-full px-1 pb-3">
          <div className="w-full h-full">
            <div className="w-full h-1.5 flex gap-1 bg-[#1F2020]">
              <div className="h-full flex gap-0.5 items-center px-1">
                <div className="h-1 w-1 bg-[#FF605C] rounded-full" />
                <div className="h-1 w-1 bg-[#FFBD44] rounded-full" />
                <div className="h-1 w-1 bg-[#00CA4E] rounded-full" />
              </div>
              <div className="w-[30px] h-[5px] rounded-t-xs bg-[#3C3C3C] mt-[1px] text-[3px] text-[#C7C7C7] flex justify-center items-center">
                vmeet
              </div>
              <Plus className="w-1 h-full text-[#C7C7C7]" />
            </div>
            <div className="w-full h-2  bg-[#3C3C3C] flex gap-1 items-center px-1">
              <div className="flex gap-1">
                <ArrowLeft className="h-1 w-1 text-[#C7C7C7]" />
                <ArrowRight className="h-1 w-1 text-[#C7C7C7]" />
                <RotateCw className="h-1 w-1 text-[#C7C7C7]" />
              </div>
              <div className="w-full bg-[#282828] flex items-center rounded-xl px-1">
                <p className="text-[4px] text-white font-medium">
                  vmeet.coderakhand.xyz
                </p>
                <div className="w-full flex justify-end">
                  <Star className="h-1 w-1 text-[#C7C7C7]" />
                </div>
              </div>
              <CircleUserRound className="h-1.5 w-1.5 text-[#C7C7C7]" />
              <EllipsisVertical className="h-1.5 w-1.5 text-[#C7C7C7]" />
            </div>
            <Image
              src={project.thumbnail}
              alt=""
              width={300}
              height={80}
            ></Image>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center">
        <div className="z-100 relative w-[50px] h-[60px] bg-[#DCDDDF]">
          <div className="z-0 absolute -bottom-1 w-full h-2 blur-sm bg-black/30" />
        </div>
        <div
          style={{
            transform: "rotateX(65deg)",
            transformOrigin: "top",
            perspective: "500px",
          }}
          className="absolute -bottom-20 w-[98px] h-[90px] bg-[#DCDDDF] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
        />
      </div>
    </div>
  );
}

export default ProjectsCard;
