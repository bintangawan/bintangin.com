import { memo } from "react";

interface CtaLink {
  label: string;
  href: string;
}

interface FloatingIcon {
  label: string;
  iconSrc: string;
}

export interface HeroProps {
  fullName: string;
  role: string;
  tagline: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  floatingIcons: FloatingIcon[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

const orbitSlots = [
  { top: "6%", left: "50%" },
  { top: "18%", left: "80%" },
  { top: "50%", left: "92%" },
  { top: "82%", left: "80%" },
  { top: "94%", left: "50%" },
  { top: "82%", left: "20%" },
  { top: "50%", left: "8%" },
  { top: "18%", left: "20%" },
];

const Hero = ({
  fullName,
  role,
  tagline,
  summary,
  imageSrc,
  imageAlt,
  floatingIcons,
  primaryCta,
  secondaryCta,
}: HeroProps) => {
  const isPrimaryExternal = primaryCta.href.startsWith("http");
  const isSecondaryExternal = secondaryCta.href.startsWith("http");

  return (
    <section
      id="home"
      className="section-enter flex min-h-[calc(100vh-4.25rem)] scroll-mt-24 items-center py-1 sm:py-3 lg:py-4"
      aria-label="Hero section"
    >
      <div className="grid w-full items-center gap-10 sm:gap-11 lg:gap-7 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="pb-2 text-center sm:pb-3 lg:pb-0 lg:text-left">
          <p className="inline-flex items-center rounded-full border border-[--border-subtle] bg-[--surface-card] px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.18em] text-[--text-muted] uppercase shadow-[0_8px_20px_rgba(51,65,85,0.07)] sm:px-5 sm:text-xs">
            {role}
          </p>

          <h1 className="mt-3 text-balance text-4xl leading-tight font-semibold text-[--text-primary] sm:text-5xl lg:text-[3.45rem] lg:leading-[1.03]">
            {fullName}
          </h1>
          <p className="mt-2 text-balance text-[2rem] leading-tight font-semibold text-[--text-primary] sm:text-4xl lg:text-[2.35rem] lg:leading-[1.1]">
            Wujudkan ide digital jadi <span className="brand-gradient">produk nyata</span>
          </p>
          <p className="mt-3 text-pretty text-[0.98rem] leading-relaxed text-[--text-secondary] sm:text-base">{tagline}</p>
          <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-[--text-secondary] lg:max-w-[92%]">
            {summary}
          </p>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={primaryCta.href}
              target={isPrimaryExternal ? "_blank" : undefined}
              rel={isPrimaryExternal ? "noreferrer" : undefined}
              className="inline-flex min-w-36 items-center justify-center rounded-full border border-[--accent-primary] bg-[--accent-primary] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(79,70,229,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[--text-primary] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent-secondary]"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              target={isSecondaryExternal ? "_blank" : undefined}
              rel={isSecondaryExternal ? "noreferrer" : undefined}
              className="inline-flex min-w-36 items-center justify-center rounded-full border border-[--border-subtle] bg-white px-6 py-2.5 text-sm font-semibold text-[--text-primary] shadow-[0_10px_20px_rgba(148,163,184,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-[--accent-primary] hover:text-[--accent-primary] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent-secondary]"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-2 w-full max-w-[330px] sm:max-w-[390px] lg:mt-0 lg:max-w-[425px]">
          <div className="relative mx-auto aspect-square w-full max-w-[312px] sm:max-w-[360px]">
            <div className="absolute inset-[14%] overflow-hidden rounded-full border-[8px] border-[#e8ecf7] shadow-[0_20px_36px_rgba(30,41,59,0.16)]">
              <img
                src={imageSrc}
                alt={imageAlt}
                width={480}
                height={682}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hero-orbit-track absolute inset-0">
              {floatingIcons.map((icon, index) => (
                <div
                  key={`${icon.label}-${index}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={orbitSlots[index % orbitSlots.length]}
                  aria-label={icon.label}
                  title={icon.label}
                >
                  <span className="hero-orbit-counter">
                    <span
                      className="hero-floating-item"
                      style={{
                        animationDelay: `${index * 0.22}s`,
                        animationDuration: `${4.2 + (index % 3) * 0.55}s`,
                      }}
                    >
                      <img
                        src={icon.iconSrc}
                        alt={`${icon.label} logo`}
                        width={40}
                        height={40}
                        className="h-9 w-9 object-contain drop-shadow-[0_8px_16px_rgba(30,41,59,0.2)] sm:h-10 sm:w-10"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
