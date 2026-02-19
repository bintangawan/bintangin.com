import { memo } from "react";
import type { LucideIcon } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterContact {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
  iconColor?: string;
  iconBackground?: string;
}

export interface FooterProps {
  name: string;
  role: string;
  year: number;
  imageSrc: string;
  imageAlt: string;
  tagline?: string;
  links: FooterLink[];
  contacts: FooterContact[];
}

const Footer = ({ name, role, year, imageSrc, imageAlt, tagline, links, contacts }: FooterProps) => {
  const containerWidthClass = "mx-auto w-[92%] sm:w-[90%] lg:w-[86%] xl:w-[82%] 2xl:w-[78%] max-w-[1240px]";

  return (
    <footer className="mt-16 border-t border-[--border-subtle] bg-[--surface-card]">
      <div className={`${containerWidthClass} grid gap-10 py-12 lg:grid-cols-[1.35fr_1fr_1fr]`}>
        <div>
          <img
            src={imageSrc}
            alt={imageAlt}
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="h-16 w-16 rounded-2xl border border-[--border-subtle] bg-white p-2 object-cover shadow-sm"
          />
          <h3 className="mt-5 text-xl font-semibold text-[--text-primary]">{name}</h3>
          <p className="text-sm font-medium text-[--accent-primary]">{role}</p>
          {tagline ? <p className="mt-3 max-w-md text-sm leading-relaxed text-[--text-secondary]">{tagline}</p> : null}
        </div>

        <div>
          <h4 className="text-base font-semibold text-[--text-primary]">Menu Utama</h4>
          <ul className="mt-4 space-y-3 text-sm text-[--text-secondary]">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 transition duration-200 hover:text-[--accent-primary] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent-secondary]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[--accent-primary]" aria-hidden />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold text-[--text-primary]">Hubungi Saya</h4>
          <ul className="mt-4 space-y-3 text-sm text-[--text-secondary]">
            {contacts.map((item) => {
              const Icon = item.icon;
              const wrapperClassName =
                "group flex items-start gap-3 rounded-xl border border-[--border-subtle] bg-white px-3 py-2.5 transition duration-200 hover:border-[--accent-primary] hover:shadow-[0_8px_18px_rgba(99,102,241,0.12)]";

              return (
                <li key={`${item.label}-${item.value}`}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className={wrapperClassName}
                    >
                      <span
                        className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[--border-subtle]"
                        style={{
                          color: item.iconColor ?? "var(--accent-primary)",
                          backgroundColor: item.iconBackground ?? "var(--surface-soft)",
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-medium text-[--text-primary]">{item.label}</span>
                        <span className="break-all text-[--text-secondary]">{item.value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className={wrapperClassName}>
                      <span
                        className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[--border-subtle]"
                        style={{
                          color: item.iconColor ?? "var(--accent-primary)",
                          backgroundColor: item.iconBackground ?? "var(--surface-soft)",
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-medium text-[--text-primary]">{item.label}</span>
                        <span className="break-all text-[--text-secondary]">{item.value}</span>
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-[--border-subtle]">
        <div className={`${containerWidthClass} flex flex-col items-start justify-between gap-2 py-5 text-sm text-[--text-muted] sm:flex-row sm:items-center`}>
          <p>&copy; {year} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
