import { memo } from "react";
import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

export interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="section-enter scroll-mt-24" aria-labelledby="projects-heading">
      <div className="mb-7 flex items-end justify-between gap-6">
        <h2 id="projects-heading" className="text-2xl font-semibold sm:text-3xl">
          My Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default memo(ProjectsSection);
