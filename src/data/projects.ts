export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  href: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "MTs PP TA Abdullah Al Busyroni",
    description:
      "Website resmi sekolah MTs PPTA Abdullah Al Busyroni yang menyajikan profil institusi, informasi pendidikan, kegiatan santri, dan layanan administrasi sekolah berbasis web untuk orang tua, siswa, dan civitas akademik.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    href: "https://mtspptaabdullahalbusyroni.layanansims.id/",
    image: "/projects/mtsppta.svg",
  },
  {
    id: "project-2",
    title: "BintangIn Event Attendance",
    description:
      "Platform absensi digital untuk event & kegiatan resmi yang memungkinkan peserta melakukan check-in menggunakan QR Code, dokumentasi kegiatan, serta laporan kehadiran yang terintegrasi secara real-time. Cocok untuk seminar, pelatihan, workshop, dan event organisasi lainnya.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Express"],
    href: "https://event.bintangin.com/",
    image: "/projects/eventatt.svg",
  },
  {
    id: "project-3",
    title: "Portal Nilai Praktikum",
    description:
      "Portal web untuk mahasiswa dan asisten laboratorium jurusan Ilmu Komputer guna mengecek progres nilai laporan praktikum secara cepat dengan input NIM serta status validasi laporan.",
    techStack: ["React", "Vite", "JavaScript"],
    href: "https://laprakapps.site/",
    image: "/projects/laprakapps.svg",
  },
  {
    id: "project-4",
    title: "Layanan SIMS (Sekolah)",
    description:
      "Dashboard login & manajemen layanan *Sistem Informasi Manajemen Sekolah (SIMS)* yang membantu administrasi sekolah, presensi, data siswa, dan komunikasi antar civitas akademik dalam satu platform berbasis web.",
    techStack: ["React", "Laravel", "PHP", "Tailwind CSS"],
    href: "https://layanansims.id/login",
    image: "/projects/layanansims.svg",
  },
  {
    id: "project-5",
    title: "Pinjemin App",
    description:
      "Platform web interaktif untuk memudahkan peminjaman barang sesuai dengan hobi pengguna, memadukan kebutuhan sosial & hobi dalam satu aplikasi dengan alur pinjam-kembali yang sederhana dan intuitif.",
    techStack: ["React", "Vite", "TypeScript"],
    href: "https://www.pinjemin.site/#/",
    image: "/projects/pinjemin.svg",
  },
  {
    id: "project-6",
    title: "FarmaHelps App",
    description:
      "Aplikasi manajemen farmasi *FarmaHelps* untuk membantu pengguna mengatur jadwal obat, stok, dan pengingat konsumsi obat harian melalui antarmuka bersih dan fokus pada pengalaman pengguna.",
    techStack: ["React", "Tailwind CSS", "Express"],
    href: "https://farmahelps.bintangin.com/",
    image: "/projects/farma.svg",
  },
];
