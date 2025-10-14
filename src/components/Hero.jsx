import React from "react";

const highlights = [
  { label: "Years Experience", value: "4+" },
  { label: "Completed Projects", value: "28" },
  { label: "Happy Clients", value: "20+" },
];

const techIcons = [
  {
    name: "React",
    src: "images/react.svg",
    position: "top-[-20px] left-1/2 -translate-x-1/2",
    delay: 0,
  },
  {
    name: "Laravel",
    src: "images/laravel-logo.svg",
    position: "top-[60px] left-[-40px]",
    delay: 0.2,
  },
  {
    name: "Tailwind CSS",
    src: "images/tailwind.svg",
    position: "top-[80px] right-[-40px]",
    delay: 0.4,
  },
  {
    name: "Node.js",
    src: "images/nodejs.svg",
    position: "bottom-[80px] left-[-30px]",
    delay: 0.6,
  },
  {
    name: "Express",
    src: "images/express.svg",
    position: "bottom-[-20px] left-1/2 -translate-x-1/2",
    delay: 0.8,
  },
  {
    name: "JavaScript",
    src: "images/javascript.svg",
    position: "bottom-[60px] right-[-30px]",
    delay: 1.0,
  },
];

const profileImage = "images/profile.jpeg";

const heroFeatures = [
  {
    title: "Laporan Akademik Berkualitas",
    description:
      "Penyusunan laporan lengkap dengan analisis data, bahasa ilmiah, dan format sesuai panduan kampus.",
  },
  {
    title: "Website Modern & Responsif",
    description:
      "Website personal, bisnis, atau UMKM dengan desain profesional, performa tinggi, dan optimasi SEO.",
  },
  {
    title: "Pendampingan Skripsi & Jurnal",
    description:
      "Bimbingan penulisan, metodologi, revisi, hingga siap publikasi di jurnal bereputasi.",
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

const ChevronDown = ({ className = "h-6 w-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

function Hero() {
  const scrollToDetails = () => {
    document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-cream/30 via-white to-cream/20">
      {/* ==================== Section 1: Home (Full Page) ==================== */}
      <section
        id="home"
        className="relative flex min-h-screen items-start justify-center pt-24"
      >
        <div className="section-padding mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-800 shadow-md shadow-gray-900/5 backdrop-blur-sm">
                Layanan Akademik & Digital Profesional
              </span>

              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-[3.5rem]">
                Wujudkan ide jadi hasil nyata{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  dengan karya digital & ilmiah
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Kami menyediakan jasa pembuatan laporan, website, skripsi, dan
                jurnal dengan hasil profesional, bahasa ilmiah yang rapi, serta
                revisi hingga puas.
              </p>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <a
                  href="https://wa.me/6287841185404"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40"
                >
                  <WhatsAppIcon />
                  Konsultasi Gratis
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-blue-600/50 hover:text-blue-600"
                >
                  Lihat Layanan
                </a>
              </div>
            </div>

            {/* Right Image & Icons */}
            <div className="relative mx-auto flex w-full max-w-[450px] items-center justify-center">
              <div className="absolute -inset-12 hidden rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-pink-500/20 blur-3xl lg:block" />
              <div className="relative aspect-square w-full max-w-sm rounded-full bg-gradient-to-br from-white via-blue-50 to-purple-50 p-7 shadow-2xl shadow-gray-900/10">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-white/80 bg-white shadow-inner">
                  <img
                    src={profileImage}
                    alt="Bintang Kurniawan Herman"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-5 rounded-full border-2 border-white/60" />

                {/* Animated Tech Icons */}
                {techIcons.map((icon, index) => (
                  <div
                    key={icon.name}
                    className={`absolute flex size-16 items-center justify-center rounded-full border-2 border-white/70 bg-white/95 shadow-xl shadow-gray-900/10 backdrop-blur transition-all duration-300 hover:scale-110 hover:rotate-6 ${icon.position}`}
                    style={{
                      animation: `float-${index} 3s ease-in-out infinite`,
                      animationDelay: `${icon.delay}s`,
                    }}
                  >
                    <style>{`
                      @keyframes float-${index} {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-12px); }
                      }
                    `}</style>
                    <img
                      src={icon.src}
                      alt={icon.name}
                      className="h-8 w-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToDetails}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to details"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Scroll
            </span>
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </button>
      </section>

      {/* ==================== Section 2: Details (Full Page) ==================== */}
      <section
        id="details"
        className="relative flex min-h-screen items-center justify-center"
      >
        <div className="section-padding mx-auto max-w-7xl space-y-12">
          {/* Highlights & Focus */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Highlights Cards */}
            <div className="grid gap-5 sm:grid-cols-3">
              {highlights.map(({ label, value }) => (
                <div
                  key={label}
                  className="group rounded-3xl border border-gray-200 bg-white/90 px-6 py-7 text-center shadow-lg shadow-gray-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10"
                >
                  <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Focus Card */}
            <div className="rounded-[32px] border border-gray-200 bg-white/90 p-7 shadow-xl shadow-gray-900/5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Fokus Pelayanan
              </p>
              <ul className="mt-5 space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  <span>
                    Penyusunan laporan dan skripsi berbasis data akurat & bahasa
                    ilmiah.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                  <span>
                    Pengembangan website modern, cepat, dan user-friendly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-600 to-blue-600" />
                  <span>
                    Editing, revisi, dan pendampingan publikasi jurnal.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {heroFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white/90 p-7 shadow-lg shadow-gray-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-3">
                  <div className="size-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 flex justify-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40"
            >
              Mulai Konsultasi Sekarang
              <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
