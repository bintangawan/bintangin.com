import { memo } from "react";
import type { LucideIcon } from "lucide-react";
import CheckCircle2Icon from "lucide-react/dist/esm/icons/check-circle-2";
import FileTextIcon from "lucide-react/dist/esm/icons/file-text";
import FlaskConicalIcon from "lucide-react/dist/esm/icons/flask-conical";
import GlobeIcon from "lucide-react/dist/esm/icons/globe";
import GraduationCapIcon from "lucide-react/dist/esm/icons/graduation-cap";
import type { Service } from "../data/services";

export interface ServiceCardProps {
  service: Service;
}

const serviceIconMap: Record<string, LucideIcon> = {
  "service-website": GlobeIcon,
  "service-thesis": GraduationCapIcon,
  "service-journal": FileTextIcon,
  "service-laprak": FlaskConicalIcon,
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const ServiceIcon = serviceIconMap[service.id] ?? GlobeIcon;

  return (
    <article className="group rounded-2xl border border-[#cfdbf3] bg-white p-5 shadow-[0_12px_24px_rgba(30,41,59,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[--accent-primary] hover:shadow-[0_18px_36px_rgba(79,70,229,0.14)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#dbe3f4] bg-[#eef3ff] text-[--accent-primary]">
          <ServiceIcon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold text-[--text-primary]">{service.title}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">{service.description}</p>

      <div className="mt-5 rounded-xl border border-[#d7dff2] bg-[linear-gradient(125deg,#f7f9ff,#eef3ff)] px-3 py-2">
        <p className="text-xs font-semibold tracking-[0.11em] text-[--text-muted] uppercase">Range Harga</p>
        <p className="mt-0.5 text-[0.95rem] font-semibold text-[--accent-primary]">{service.priceRange}</p>
      </div>

      <ul className="mt-4 space-y-2">
        {service.deliverables.map((point) => (
          <li key={`${service.id}-${point}`} className="flex items-start gap-2 text-sm text-[--text-secondary]">
            <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-[--accent-primary]" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default memo(ServiceCard);
