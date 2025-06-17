import MeshBgCard from "./MeshBgCard";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Chess WebApp",
    thumbnail: "/images/projects/chess.png",
    liveLink: "/",
    githubLink: "https://github.com/coderakhand/chess-app",
    tech: [
      "Reactjs",
      "WebSocket",
      "Webrtc",
      "TailwindCss",
      "Framer",
      "ShadCN",
      "Blender",
      "Three.js",
    ],
  },
  {
    name: "PortFolio Website",
    thumbnail: "/images/projects/portfolio.png",
    liveLink: "/",
    githubLink: "https://github.com/coderakhand/portfolio-web",
    tech: ["Nextjs", "Framer", "TailwindCSS"],
  },
];

const ProjectsCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!isHovered && containerRef.current) {
          const el = containerRef.current;
          const maxScroll = el.scrollHeight - el.clientHeight;
          if (el.scrollTop >= maxScroll) {
            el.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            el.scrollBy({ top: el.clientHeight, behavior: "smooth" });
          }
        }
      }, 3000);
    };

    startAutoScroll();
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      <MeshBgCard />

      <div className="relative z-20 p-4 h-full flex flex-col items-center justify-center gap-3">
        <p
          className={`bg-gradient-to-br from-slate-300 via-white/40 to-slate-300 text-transparent bg-clip-text font-semibold text-4xl`}
        >
          Projects
        </p>
        <div
          ref={containerRef}
          className="flex flex-col gap-3 w-full h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide overflow-hidden rounded-xl"
        >
          {projects.map((project, idx) => (
            <ProjectShowcase
              key={idx}
              project={project}
              setIsHovered={setIsHovered}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface Project {
  name: string;
  thumbnail: string;
  liveLink: string;
  githubLink: string;
  tech: string[];
}

function ProjectShowcase({
  project,
  setIsHovered,
}: {
  project: Project;
  setIsHovered: (val: boolean) => void;
}) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setIsHovered(false);
  };

  return (
    <a
      href={project.liveLink}
      className={`cursor-pointer relative h-full w-full snap-start shrink-0 flex items-center justify-center  shadow-lg transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-all duration-300 overflow-hidden bg-cover rounded-xl ${
          hovered ? "blur-sm" : ""
        }`}
        style={{
          backgroundImage: `url(${project.thumbnail})`,
          backgroundPosition: "center",
        }}
      ></div>

      {hovered && (
        <>
          <div className="absolute top-3 left-3 flex gap-2 z-20">
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

          <p className="flex flex-wrap absolute left-center top-15 text-4xl font-bold bg-[#EDEDED] text-transparent bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-outline-4">
            {project.name}
          </p>

          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 z-20">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-slate-200 text-slate-800 px-2 py-0.5 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </>
      )}
    </a>
  );
}

export default ProjectsCard;
