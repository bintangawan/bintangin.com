import { ArrowDownRight } from "lucide-react";
import { generalWhatsAppUrl } from "../data/contact.js";

const steps = [
  {
    number: "01",
    title: "Temukan masalahnya",
    description:
      "Kita bahas tujuan, pengguna, fitur utama, referensi, anggaran, dan batas waktu lewat konsultasi singkat.",
  },
  {
    number: "02",
    title: "Susun arah kerja",
    description:
      "Anda menerima scope, estimasi biaya, timeline, dan milestone. Semuanya disepakati sebelum pengerjaan dimulai.",
  },
  {
    number: "03",
    title: "Desain & development",
    description:
      "Proyek dibangun secara bertahap. Anda mendapatkan update dan kesempatan review di setiap milestone penting.",
  },
  {
    number: "04",
    title: "Uji, rilis, dampingi",
    description:
      "Kami melakukan pengujian, deployment, handover, dan menyediakan masa dukungan setelah produk dirilis.",
  },
];

function Process() {
  return (
    <section id="proses" className="section process">
      <div className="container process__layout">
        <div className="process__intro">
          <span className="section-kicker">Cara kerja</span>
          <h2>Jelas sejak percakapan pertama.</h2>
          <p>
            Anda selalu tahu apa yang sedang dikerjakan, kapan bisa direview,
            dan apa yang akan diterima di akhir proyek.
          </p>
          <a href={generalWhatsAppUrl} target="_blank" rel="noreferrer">
            Mulai dari konsultasi <ArrowDownRight size={17} />
          </a>
        </div>

        <ol className="process__steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
