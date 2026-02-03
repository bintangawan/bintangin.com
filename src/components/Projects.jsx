const projects = [
  {
    title: "Layanan SIMS",
    description:
      "Aplikasi layanan akademik terpadu berbasis web yang memudahkan mahasiswa, dosen, dan admin dalam mengelola data akademik, absensi, nilai, serta komunikasi akademik secara efisien dan real-time.",
    tech: ["React", "Laravel", "MySQL"],
    image: "images/layanansims.png",
    url: "https://layanansims.id",
  },
  {
    title: "Laporan Praktikum Ilkomp",
    description:
      "Platform digital untuk pengelolaan, penulisan, dan pengumpulan laporan praktikum mahasiswa Ilmu Komputer secara terstruktur, interaktif, dan terintegrasi dengan sistem penilaian laboratorium.",
    tech: ["PHP", "MySQL", "TailwindCSS"],
    image: "images/laprakilkomp.png",
    url: "https://laprakapps.site",
  },
  {
    title: "Event System Attendance",
    description:
    "Aplikasi sistem absensi event berbasis web yang memungkinkan peserta melakukan check-in secara digital menggunakan QR Code. Dilengkapi dengan validasi event real-time, manajemen peserta, dashboard admin, serta antarmuka modern yang responsif untuk mendukung pelaksanaan acara secara efisien dan terstruktur.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Authentication",
      "QR Code Scanner"
    ],
    image: "images/evs.png",
    url: "https://event.bintangin.com"
  },
  {
    title: "MTs PPTA Abdullah Al Busyroni – School Information System",
    description:
      "Sistem informasi sekolah berbasis web untuk MTs PPTA Abdullah Al Busyroni yang mendukung proses pendaftaran siswa baru, manajemen data siswa, pengelolaan informasi sekolah, serta notifikasi email otomatis. Dirancang untuk mempermudah administrasi sekolah dengan antarmuka yang sederhana, aman, dan responsif.",
    tech: [
      "Laravel",
      "React.js",
      "MySQL",
      "ShadCN",
      "Email SMTP",
      "Chatbot"
    ],
    image: "images/mtsppta.png",
    url: "https://mtspptaabdullahalbusyroni.layanansims.id"
  },
  {
    title: "Pinjemin - Making All Your Needs Easier",
    description:
      "Platform e-commerce dan penyewaan terpadu yang memudahkan pengguna untuk membeli atau meminjam berbagai kebutuhan dengan sistem rekomendasi cerdas, transaksi aman, dan antarmuka modern berbasis web.",
    tech: ["Webpack", "JavaScript", "Express.js", "FastAPI", "MySQL"],
    image: "images/pinjemin.png",
    url: "https://pinjemin.site",
  },
  {
    title: "Story App - Bintang",
    description:
      "Aplikasi berbagi cerita berbasis web yang memungkinkan pengguna untuk membagikan kisah dengan foto dan lokasi, dilengkapi peta interaktif, autentikasi aman, serta antarmuka modern dan responsif.",
    tech: ["JavaScript", "Webpack"],
    image: "images/story.png",
    url: "https://bintang-webintermediate.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding mx-auto max-w-7xl py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-tertiary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-tertiary">
          My Projects
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-dark sm:text-4xl">
          Karya terbaik yang memadukan desain memukau dan engineering solid
        </h2>
        <p className="mt-4 text-base text-dark/70">
          Setiap project dibangun dengan pendekatan user-centric, dokumentasi
          lengkap, serta pipeline deployment yang terukur.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-[36px] border border-dark/5 bg-white/80 shadow-xl shadow-dark/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute bottom-4 right-4 rounded-full bg-cream/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-dark">
                Visit →
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-dark">
                  {project.title}
                </h3>
                <p className="text-sm text-dark/70">{project.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-dark/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
