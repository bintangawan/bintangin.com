import { CheckCircle2, MapPin } from "lucide-react";

const strengths = [
  "Komunikasi langsung dengan developer",
  "Kode dan dokumentasi siap dilanjutkan",
  "Desain responsif untuk semua perangkat",
  "Dukungan setelah website diluncurkan",
];

function About() {
  return (
    <section id="tentang" className="section about">
      <div className="container about__layout">
        <div className="about__portrait-wrap">
          <div className="about__portrait">
            <img
              src="/images/profile.jpeg"
              alt="Bintang Kurniawan Herman, founder dan developer"
              width="901"
              height="1280"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about__profile-card">
            <strong>Bintang Kurniawan Herman</strong>
            <span>Founder · Full-stack Developer</span>
          </div>
          <div className="about__location"><MapPin size={16} /> Medan, Indonesia</div>
        </div>

        <div className="about__content">
          <span className="section-kicker">Partner teknis Anda</span>
          <h2>Teknologi yang rumit, dibuat terasa sederhana.</h2>
          <p className="about__lead">
            Bintang Teknologi Solusindo adalah studio pengembangan software di
            Medan yang dipimpin langsung oleh Bintang Kurniawan Herman. Kami
            percaya produk digital yang baik harus mudah dipakai, mudah dirawat,
            dan punya tujuan bisnis yang jelas.
          </p>
          <p>
            Dengan pengalaman membangun platform pendidikan, dashboard operasional,
            sistem event, dan website organisasi, kami menangani proses dari
            perencanaan sampai produk online.
          </p>
          <ul className="about__strengths">
            {strengths.map((strength) => (
              <li key={strength}><CheckCircle2 size={18} /> {strength}</li>
            ))}
          </ul>
          <div className="about__credentials">
            <div><strong>Full-stack</strong><span>React · Laravel · Node.js</span></div>
            <div><strong>End-to-end</strong><span>Strategy · Build · Support</span></div>
            <div><strong>Flexible</strong><span>On-site Medan · Remote</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
