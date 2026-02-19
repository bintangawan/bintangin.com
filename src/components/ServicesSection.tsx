import { memo } from "react";
import type { Service } from "../data/services";
import ServiceCard from "./ServiceCard";

export interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section id="services" className="section-enter scroll-mt-24" aria-labelledby="services-heading">
      <div className="rounded-3xl border border-[#cfdbf3] bg-[linear-gradient(165deg,#edf2fe,#e7edf9)] p-4 sm:p-5">
        <div className="mb-7 flex flex-col gap-3">
          <h2 id="services-heading" className="text-2xl font-semibold sm:text-3xl">
            Services
          </h2>
          <p className="max-w-3xl text-sm text-[--text-secondary] sm:text-base">
            Layanan fleksibel untuk kebutuhan akademik dan pengembangan produk digital. Range harga menyesuaikan
            tingkat kesulitan, deadline, dan scope pekerjaan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
