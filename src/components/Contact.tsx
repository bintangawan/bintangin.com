import { memo } from "react";
import type { LucideIcon } from "lucide-react";

export interface ContactLink {
  label: string;
  href: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
}

export interface ContactProps {
  links: ContactLink[];
}

const Contact = ({ links }: ContactProps) => {
  return (
    <section id="contact" className="section-enter scroll-mt-24" aria-labelledby="contact-heading">
      <div className="mb-7 flex items-end justify-between gap-6">
        <h2 id="contact-heading" className="text-2xl font-semibold sm:text-3xl">
          Contact Me
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((item) => {
          const Icon = item.icon;
          const isExternal = item.href.startsWith("http");

          return (
            <a
              key={item.label}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-[--border-subtle] bg-[--surface-card] p-4 transition duration-300 hover:-translate-y-1 hover:border-[--accent-primary] hover:shadow-[0_12px_30px_rgba(59,130,246,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent-secondary]"
              aria-label={`Open ${item.label}`}
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[--border-subtle] transition duration-300 group-hover:scale-105"
                style={{ backgroundColor: item.iconBackground, color: item.iconColor }}
              >
                <Icon className="h-5 w-5" strokeWidth={2.1} />
              </span>

              <span>
                <span className="block text-sm font-semibold">{item.label}</span>
                <span className="block text-xs text-[--text-muted]">{item.value}</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default memo(Contact);
