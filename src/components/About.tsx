import { memo } from "react";

interface EducationItem {
  title: string;
  institution: string;
  year: string;
  focus: string;
  logoSrc: string;
  logoAlt: string;
  logoBackground: string;
}

export interface AboutProps {
  fullName: string;
  role: string;
  introduction: string;
  background: string;
  techHighlights: string[];
  strengths: string[];
  education: EducationItem[];
}

const About = ({ fullName, role, introduction, background, techHighlights, strengths, education }: AboutProps) => {
  return (
    <section id="about" className="section-enter scroll-mt-24" aria-labelledby="about-heading">
      <div className="mb-7 flex items-end justify-between gap-6">
        <h2 id="about-heading" className="text-2xl font-semibold sm:text-3xl">
          About Me
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
        <article className="rounded-3xl border border-[#cfdbf3] bg-[linear-gradient(160deg,#f9fbff,#eef3ff)] p-5 shadow-[0_14px_28px_rgba(30,41,59,0.08)] sm:p-7">
          <p className="inline-flex rounded-full border border-[#d8e1f4] bg-white px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[--text-muted] uppercase">
            Profile Snapshot
          </p>

          <h3 className="mt-4 text-xl font-semibold text-[--text-primary] sm:text-2xl">{fullName}</h3>
          <p className="mt-1 text-sm font-medium text-[--accent-primary] sm:text-base">{role}</p>

          <p className="mt-4 text-pretty text-[--text-secondary]">{introduction}</p>
          <p className="mt-4 text-pretty text-[--text-secondary]">{background}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-[--text-primary]">Tech Mastery</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {techHighlights.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[#d5def1] bg-white px-3 py-1 text-xs font-semibold text-[--text-secondary]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-[--text-primary]">How I Work</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {strengths.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-[#d8e1f4] bg-white px-3 py-2 text-sm text-[--text-secondary]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="rounded-3xl border border-[--border-subtle] bg-[--surface-card] p-5 shadow-[0_14px_28px_rgba(30,41,59,0.08)] sm:p-7">
          <p className="text-sm font-medium tracking-[0.14em] text-[--text-muted] uppercase">Education & Learning Path</p>

          <ul className="mt-5 space-y-3.5">
            {education.map((item) => (
              <li
                key={`${item.title}-${item.year}`}
                className="rounded-2xl border border-[--border-subtle] bg-[--surface-soft] p-3 shadow-[0_10px_22px_rgba(148,163,184,0.16)]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[--border-subtle] p-2"
                    style={{ backgroundColor: item.logoBackground }}
                  >
                    <img
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.12em] text-[--text-muted] uppercase">{item.year}</p>
                    <h3 className="mt-0.5 text-base leading-tight font-semibold text-[--text-primary]">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-[--text-secondary]">{item.institution}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-[--text-muted]">{item.focus}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default memo(About);
