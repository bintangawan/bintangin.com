import { memo } from "react";
import type { Project } from "../data/projects";

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title}`}
      className="group relative block h-full overflow-hidden rounded-2xl border border-[--border-subtle] bg-[--surface-card] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent-secondary]"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={960}
          height={540}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          fetchPriority="low"
          decoding="async"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.35),transparent_55%)] opacity-80"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-[--text-primary]">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={`${project.id}-${tech}`}
              className="rounded-full border border-[--border-subtle] bg-[--surface-soft] px-3 py-1 text-xs font-medium text-[--text-secondary]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[--accent-primary] transition duration-200 group-hover:text-[--accent-secondary]">
          Lihat Project
          <svg viewBox="0 0 20 20" className="h-4 w-4 transition duration-200 group-hover:translate-x-1" fill="none">
            <path
              d="M4 10h11M11 4l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
};

export default memo(ProjectCard);
