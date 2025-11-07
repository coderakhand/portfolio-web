import { Project } from "@/config";
import { twMerge } from "tailwind-merge";
import { VscGithub } from "react-icons/vsc";
import { FaGlobe } from "react-icons/fa6";

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
              className="group-hover:brightness-60 group-hover:grayscale-100"
            ></video>
          </a>
          <ProjectLinks
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            className="max-md:group-hover:hidden hidden absolute top-3 right-3 group-hover:flex"
          />
        </div>
        <div className="grow w-full py-2 px-3 flex flex-col gap-3">
          <div className="grid grid-cols-2">
            <h3 className="text-sm font-bold text-white/80">{project.name}</h3>
            <ProjectLinks
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              className="md:hidden"
            />
          </div>
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

function ProjectLinks({
  liveLink,
  githubLink,
  className,
}: {
  githubLink: string;
  liveLink: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-end gap-4 text-white/80",
        className
      )}
    >
      <a
        href={githubLink}
        target="_blank"
        className={`${githubLink == "/" ? "hidden" : ""}`}
      >
        <VscGithub />
      </a>
      <a
        href={liveLink}
        target="_blank"
        className={`${liveLink == "/" ? "hidden" : ""} `}
      >
        <FaGlobe />
      </a>
    </div>
  );
}
