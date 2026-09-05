import { ArrowUpRight, FolderOpen } from "lucide-react";
import { projects } from "../data/projects.js";
import { createWhatsAppUrl } from "../data/contact.js";

const projectWhatsAppUrl = createWhatsAppUrl(
  "Halo Bintang Teknologi Solusindo, saya ingin membahas proyek software baru."
);

function Projects() {
  return (
    <section id="portofolio" className="section projects">
      <div className="container">
        <div className="section-heading section-heading--split section-heading--light">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2>Produk digital yang sudah kami wujudkan.</h2>
          </div>
          <p>
            Beberapa sistem yang dirancang dan dikembangkan untuk kebutuhan
            pendidikan, operasional, event, serta layanan publik.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`project-card ${index === 0 ? "project-card--featured" : ""}`}
            >
              <a
                className="project-card__image"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Kunjungi ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`Tampilan ${project.title}`}
                  width="1200"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
                <span><ArrowUpRight size={20} /></span>
              </a>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__result">
                  <FolderOpen size={17} />
                  <span>{project.result}</span>
                </div>
                <div className="project-card__tech">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <p>Punya kebutuhan yang mirip atau justru sama sekali berbeda?</p>
          <a
            className="button button--light"
            href={projectWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
          >
            Mari bahas proyek Anda <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
