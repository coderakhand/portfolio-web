import { Project } from "@/config";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

export default function ProjectShowcase({
  className,
  project,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "w-full h-86 rounded-lg border-white/40 border overflow-hidden",
        className
      )}
    >
      <div className="w-full h-full bg-black/20 flex flex-col">
        <div className="relative   border-white/40 border-b cursor-pointer group">
          <a href={project.liveLink}>
            <video
              src={project.demoVideo}
              autoPlay
              muted
              loop
              className="group-hover:brightness-60"
            ></video>
          </a>
          <div className="hidden absolute top-3 right-3 group-hover:flex items-center justify-end gap-4 text-white">
            <a href={project.githubLink} target="_blank" className={`${project.githubLink == '/' ? "hidden": ""}`}>
              <FaCodeFork />
            </a>
            <a href={project.liveLink} target="_blank" className={`${project.liveLink == '/' ? "hidden": ""}`}>
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="grow w-full py-2 px-3 flex flex-col gap-3">
          <h3 className="text-sm font-bold text-white/80">{project.name}</h3>
          <p className="text-xs text-white/30">{project.description}</p>
        </div>
        <div className="flex flex-wrap items-end gap-2  mb-4 px-3">
          {project.tech.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white/60 text-black px-2 border-[0.5px] border-black text-[10px] rounded-full"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
