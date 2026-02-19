import { memo } from "react";

export interface TechItem {
  name: string;
  iconSrc: string;
  accent: string;
}

export interface TechStackProps {
  items: TechItem[];
}

const TechStack = ({ items }: TechStackProps) => {
  return (
    <section id="tech-stack" className="section-enter scroll-mt-24" aria-labelledby="tech-stack-heading">
      <div className="mb-7 flex items-end justify-between gap-6">
        <h2 id="tech-stack-heading" className="text-2xl font-semibold sm:text-3xl">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.name}
            className="group relative overflow-hidden rounded-2xl border border-[--border-subtle] bg-[--surface-card] p-5 transition duration-300 hover:-translate-y-1 hover:border-[--accent-primary] hover:shadow-[0_14px_34px_rgba(59,130,246,0.12)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 85% 18%, ${item.accent}2B, transparent 56%)`,
              }}
            />

            <div className="relative flex flex-col items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center">
                <img
                  src={item.iconSrc}
                  alt={`${item.name} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain drop-shadow-[0_10px_16px_rgba(51,65,85,0.15)]"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <p className="text-center text-sm font-medium text-[--text-secondary]">{item.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(TechStack);
