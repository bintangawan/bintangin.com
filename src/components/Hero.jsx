import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { generalWhatsAppUrl } from "../data/contact.js";

const capabilities = ["React", "Laravel", "Node.js", "UI/UX", "SEO"];

function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            Software House · Medan, Sumatera Utara
          </div>
          <h1>
            Bangun software yang <span>siap dipakai,</span> bukan sekadar jadi.
          </h1>
          <p className="hero__lead">
            Bintang Teknologi Solusindo membantu bisnis, sekolah, dan organisasi
            mengubah kebutuhan menjadi website serta sistem digital yang rapi,
            cepat, dan mudah dikembangkan.
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary button--large"
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ceritakan kebutuhan Anda <ArrowRight size={18} />
            </a>
            <a className="button button--text button--large" href="#portofolio">
              Lihat portofolio
            </a>
          </div>

          <div className="hero__assurance" aria-label="Keunggulan layanan">
            <span><CheckCircle2 size={17} /> Konsultasi awal gratis</span>
            <span><CheckCircle2 size={17} /> Scope & biaya transparan</span>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="hero-showcase__topbar">
            <span className="hero-showcase__status"><span /> Selected work</span>
            <span>2024—2026</span>
          </div>
          <div className="hero-showcase__main">
            <img
              src="/images/projects/layanan-sims.jpg"
              srcSet="/images/projects/layanan-sims-480.jpg 480w, /images/projects/layanan-sims-768.jpg 768w, /images/projects/layanan-sims.jpg 1200w"
              sizes="(max-width: 900px) calc(100vw - 64px), 500px"
              alt="Tampilan proyek platform Layanan SIMS"
              width="1200"
              height="608"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="hero-showcase__caption">
              <div>
                <span>Education platform</span>
                <strong>Layanan SIMS</strong>
              </div>
              <span className="hero-showcase__number">01</span>
            </div>
          </div>
          <div className="hero-showcase__floating">
            <img
              src="/images/projects/event-attendance.jpg"
              srcSet="/images/projects/event-attendance-320.jpg 320w, /images/projects/event-attendance.jpg 1200w"
              sizes="(max-width: 680px) 145px, 205px"
              alt="Tampilan proyek Event System Attendance"
              width="1200"
              height="598"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div>
              <span>Latest build</span>
              <strong>Event System</strong>
            </div>
          </div>
          <div className="hero-showcase__location">
            <MapPin size={17} /> Berbasis di Medan · Melayani Indonesia
          </div>
        </div>
      </div>

      <div className="container capability-bar">
        <p>Teknologi yang kami gunakan</p>
        <div>
          {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
      </div>
    </section>
  );
}

export default Hero;
