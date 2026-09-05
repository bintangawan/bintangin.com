import { ArrowUpRight, Check } from "lucide-react";
import { academicServices, softwareServices } from "../data/services.js";
import { createWhatsAppUrl } from "../data/contact.js";

function ServiceCard({ service, tone }) {
  const Icon = service.icon;
  const whatsappUrl = createWhatsAppUrl(
    `Halo Bintang Teknologi Solusindo, saya ingin berdiskusi tentang layanan ${service.title}.`
  );

  return (
    <article className={`service-card service-card--${tone}`}>
      <div className="service-card__heading">
        <span className="service-card__icon"><Icon size={22} strokeWidth={1.8} /></span>
        <span className="service-card__price">{service.price}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.features.map((feature) => (
          <li key={feature}><Check size={15} /> {feature}</li>
        ))}
      </ul>
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        Diskusikan layanan <ArrowUpRight size={16} />
      </a>
    </article>
  );
}

function Services() {
  return (
    <section id="layanan" className="section services">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-kicker">Yang kami kerjakan</span>
            <h2>Dua keahlian, satu standar kerja yang serius.</h2>
          </div>
          <p>
            Solusi dibangun sesuai masalah nyata—dengan scope yang jelas,
            komunikasi langsung, dan hasil yang bisa Anda lanjutkan.
          </p>
        </div>

        <div className="service-group">
          <header className="service-group__header">
            <div>
              <span className="service-group__index">01</span>
              <h3>Software Development</h3>
            </div>
            <p>Untuk bisnis, UMKM, sekolah, komunitas, dan instansi.</p>
          </header>
          <div className="service-grid">
            {softwareServices.map((service) => (
              <ServiceCard key={service.title} service={service} tone="blue" />
            ))}
          </div>
        </div>

        <div className="service-group service-group--academic">
          <header className="service-group__header">
            <div>
              <span className="service-group__index">02</span>
              <h3>Pendampingan Akademik & Riset</h3>
            </div>
            <p>Untuk mahasiswa dan peneliti yang membutuhkan partner belajar.</p>
          </header>
          <div className="service-grid">
            {academicServices.map((service) => (
              <ServiceCard key={service.title} service={service} tone="sand" />
            ))}
          </div>
          <p className="integrity-note">
            <strong>Catatan integritas:</strong> layanan akademik diberikan sebagai
            pendampingan, konsultasi, review, dan contoh pembelajaran. Klien tetap
            bertanggung jawab atas keaslian serta hasil akhir karyanya.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
