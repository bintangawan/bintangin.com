import React from "react";

const education = [
  {
    degree: "S1 Ilmu Komputer",
    institution: "UIN Sumatera Utara Medan",
    period: "2022 - 2025",
  },
  {
    degree: "Cloud Computing",
    institution: "Bangkit Academy 2024 Batch 2",
    period: "2024",
  },
  {
    degree: "Front-End and Back-End Developer",
    institution: "Coding Camp 2025 powered by DBS Foundation",
    period: "2025",
  },
];

const techStack = [
  "PHP",
  "Laravel",
  "JavaScript",
  "React.js",
  "Express.js",
  "Node.js",
];

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="rounded-[40px] bg-white/80 px-8 py-12 shadow-xl shadow-gray-900/5 backdrop-blur-sm sm:px-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Left Column */}
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                About Me
              </span>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Hai, saya Bintang Kurniawan Herman. Seorang developer yang
                senang membangun solusi web end-to-end untuk berbagai kebutuhan
                digital.
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                Fokus saya adalah menghadirkan solusi web yang cepat, scalable,
                dan mudah dirawat. Baik itu dashboard internal, website company
                profile, hingga sistem informasi kompleks, saya menanamkan
                prinsip clean architecture, dokumentasi rapi, dan pengalaman
                pengguna yang ramah.
              </p>

              {/* Info Cards */}
              <div className="grid gap-5 pt-2 sm:grid-cols-2">
                <div className="group rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50/50 to-white px-6 py-5 shadow-md shadow-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Nama Lengkap
                  </h3>
                  <p className="mt-2 text-lg font-bold text-gray-900">
                    Bintang Kurniawan Herman
                  </p>
                </div>
                <div className="group rounded-3xl border border-gray-200 bg-gradient-to-br from-purple-50/50 to-white px-6 py-5 shadow-md shadow-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Role Utama
                  </h3>
                  <p className="mt-2 text-lg font-bold text-gray-900">
                    Fullstack Web Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Background Section */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-600/30">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Background
                  </h3>
                </div>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div
                      key={item.degree}
                      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/90 px-6 py-5 shadow-md shadow-gray-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600" />
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <p className="text-lg font-bold text-gray-900">
                            {item.degree}
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            {item.institution}
                          </p>
                        </div>
                        <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-3 py-1 text-xs font-semibold text-blue-600">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Section */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-600/30">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Tech Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-md shadow-gray-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/10"
                    >
                      <span className="size-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
