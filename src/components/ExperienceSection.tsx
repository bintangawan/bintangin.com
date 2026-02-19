import { memo } from "react";
import AwardIcon from "lucide-react/dist/esm/icons/award";
import FlameIcon from "lucide-react/dist/esm/icons/flame";
import type { Experience } from "../data/experiences";

export interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="section-enter scroll-mt-24" aria-labelledby="experience-heading">
      <div className="mb-7 flex items-end justify-between gap-6">
        <h2 id="experience-heading" className="text-2xl font-semibold sm:text-3xl">
          Experience
        </h2>
      </div>

      <div className="rounded-3xl border border-[#cfdbf3] bg-[linear-gradient(165deg,#eef3ff,#e7edf9)] p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {experiences.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-[#d3ddf2] bg-white p-5 shadow-[0_12px_24px_rgba(30,41,59,0.08)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#dbe3f4] bg-[#f3f6ff] px-3 py-1 text-xs font-semibold text-[--text-secondary]">
                  {item.track}
                </span>
                <span className="flame-badge inline-flex items-center gap-1.5 rounded-full border border-[#f7bf7a] bg-[linear-gradient(120deg,#fff4de,#ffe8cc)] px-3 py-1 text-xs font-semibold text-[#8a3c00]">
                  <FlameIcon className="flame-icon h-3.5 w-3.5 text-[#ef6c00]" />
                  {item.years}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-[--text-primary]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">{item.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((skill) => (
                  <li
                    key={`${item.id}-${skill}`}
                    className="rounded-full border border-[#dbe3f4] bg-[#f7f9ff] px-3 py-1 text-xs font-medium text-[--text-secondary]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-[--text-primary]">
                  <AwardIcon className="h-4 w-4 text-[--accent-primary]" />
                  Sertifikasi
                </p>
                <ul className="mt-2 space-y-2">
                  {item.certifications.map((certificate) => (
                    <li key={`${item.id}-${certificate}`} className="flex items-start gap-2 text-sm text-[--text-secondary]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--accent-primary]" aria-hidden />
                      {certificate}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ExperienceSection);
