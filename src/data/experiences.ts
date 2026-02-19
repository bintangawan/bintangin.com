export interface Experience {
  id: string;
  title: string;
  track: string;
  years: string;
  description: string;
  stack: string[];
  certifications: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Front-End Web Development",
    track: "Modern Web Interface Engineering",
    years: "3+ Years",
    description:
      "Berpengalaman membangun antarmuka web modern yang responsif, reusable, dan scalable menggunakan pendekatan component-based. Fokus pada performa, clean UI/UX, accessibility, serta integrasi API untuk aplikasi web produksi.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    certifications: [
      "Belajar Dasar Pemrograman Web - Dicoding",
      "Belajar Dasar Pemrograman JavaScript - Dicoding",
      "Belajar Membuat Front-End Web untuk Pemula - Dicoding",
      "Belajar Fundamental Front-End Web Development - Dicoding",
      "Belajar Pengembangan Web Intermediate - Dicoding",
      "BNSP - Web Developer",
    ],
  },
  {
    id: "exp-2",
    title: "Fullstack & Cloud-Based Application Development",
    track: "End-to-End Product Development",
    years: "2+ Years",
    description:
      "Mengembangkan aplikasi web end-to-end mulai dari backend service, REST API, autentikasi, database design, hingga deployment berbasis cloud. Terbiasa mengelola arsitektur aplikasi yang maintainable dan siap produksi.",
    stack: [
      "Node.js",
      "Express.js",
      "Laravel",
      "PHP",
      "REST API",
      "MySQL",
      "Google Cloud Platform",
      "Cloud Firestore",
    ],
    certifications: [
      "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud - Dicoding",
      "Belajar Penerapan Machine Learning dengan Google Cloud - Dicoding",
      "Menjadi Google Cloud Engineer - Dicoding",
      "Bangkit Academy 2024 - Cloud Computing",
      "Coding Camp 2025 powered by DBS Foundation - Fullstack Web Developer",
      "Coding Camp 2026 powered by DBS Foundation - Fullstack Web Developer",
    ],
  },
];
