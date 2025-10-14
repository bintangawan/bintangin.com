const services = [
  {
    title: "Jasa Pembuatan Laporan",
    description:
      "Laporan detail, rapi, dan siap presentasi dengan format akademik yang sesuai ketentuan institusi.",
    points: [
      "Analisis data dan grafik lengkap",
      "Bahasa ilmiah dan mudah dipahami",
      "Revisi unlimited hingga puas",
    ],
  },
  {
    title: "Jasa Pembuatan Website",
    description:
      "Website modern dan responsive untuk brand, UMKM, maupun kebutuhan personal dengan performa optimal.",
    points: [
      "Desain UI/UX eksklusif",
      "Integrasi CMS & dashboard",
      "Optimasi SEO & Lighthouse",
    ],
  },
  {
    title: "Jasa Pembuatan Skripsi",
    description:
      "Pendampingan lengkap dari penentuan judul, penelitian, hingga penyusunan laporan dan presentasi.",
    points: [
      "Bimbingan BAB per BAB",
      "Metode penelitian akurat",
      "Simulasi sidang & konsultasi",
    ],
  },
  {
    title: "Jasa Pembuatan Jurnal",
    description:
      "Penulisan jurnal profesional yang siap terbit dengan referensi dan sitasi sesuai standar.",
    points: [
      "Mengikuti template jurnal terakreditasi",
      "Kualitas konten ilmiah teruji",
      "Proofreading & paraphrasing",
    ],
  },
];

const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.03 2a9.93 9.93 0 0 0-8.47 15.32L2 22l4.79-1.52A9.93 9.93 0 1 0 12.03 2Zm5.63 14.3c-.24.67-1.4 1.28-1.95 1.36-.5.07-1.13.1-1.83-.11-.42-.13-.95-.31-1.63-.61-2.87-1.24-4.74-4.11-4.89-4.3s-1.17-1.56-1.17-2.98a3.18 3.18 0 0 1 1-2.36 1 1 0 0 1 .72-.31h.52c.16 0 .39 0 .6.46s.77 1.89.83 2.03a.47.47 0 0 1 0 .45 1.26 1.26 0 0 1-.19.33c-.09.11-.24.27-.35.36-.12.12-.24.25-.1.49s.73 1.2 1.57 1.94 1.53 1.05 1.77 1.17.4.1.54-.06.63-.73.8-1 .35-.22.58-.13 1.5.71 1.76.84.58.26.67.41a2.14 2.14 0 0 1-.11 1.01Z" />
  </svg>
);

function Services() {
  return (
    <section id="services" className="section-padding mx-auto max-w-7xl py-16">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
            Services
          </span>
          <h2 className="text-3xl font-semibold text-dark sm:text-4xl">
            Solusi digital strategis dengan range biaya{" "}
            <span className="gradient-text">Rp400K - Rp700K+</span>
          </h2>
          <p className="text-base text-dark/70">
            Setiap layanan berfokus pada kualitas, kecepatan pengerjaan, serta
            komunikasi transparan. Kami siap bantu mengeksekusi ide Anda hingga
            tuntas.
          </p>
        </div>
        <a
          href="https://wa.me/6287841185404"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary/40 bg-white px-6 py-3 text-sm font-semibold text-secondary shadow-lg shadow-secondary/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
        >
          <WhatsAppIcon />
          Konsultasi via WhatsApp
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-[32px] border border-dark/5 bg-white/80 p-8 shadow-xl shadow-dark/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-secondary/0 to-tertiary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
            <div className="relative space-y-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-dark">
                  {service.title}
                </h3>
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-dark/60">
                  400-700K+
                </span>
              </div>
              <p className="text-sm text-dark/70">{service.description}</p>
              <ul className="space-y-3 text-sm text-dark/80">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 size-2.5 flex-none rounded-full bg-gradient-to-r from-accent to-secondary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6287841185404"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 hover:text-secondary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
