import { frontendProjects, fullStackProjects } from "@/config";
import ProjectShowcase from "./ProjectShowcase";

const ProjectsCard = () => {
  return (
    <div className="w-full px-1 mt-14 flex flex-col gap-14">
      <div className="flex flex-col gap-6">
        <h1 className="text-white/80 text-sm font-medium">Frontend Projects</h1>
        <div className="flex flex-wrap xmd:grid xmd:grid-cols-2 gap-10">
          <ProjectShowcase project={frontendProjects[0]} />
          <ProjectShowcase project={frontendProjects[1]} />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-white/80 text-sm font-medium">
          Full Stack Projects
        </h1>
        <div className="flex flex-wrap xmd:grid xmd:grid-cols-2 gap-10">
          <ProjectShowcase project={fullStackProjects[0]} className="h-92" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
