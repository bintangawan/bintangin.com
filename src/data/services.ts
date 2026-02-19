export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "service-website",
    title: "Jasa Pembuatan Website",
    description:
      "Pembuatan website company profile, landing page, hingga web app custom yang responsive, cepat, dan modern.",
    priceRange: "Rp1.500.000 - Rp8.000.000",
    deliverables: ["UI Responsive", "Optimasi performa", "Deploy & revisi minor"],
  },
  {
    id: "service-thesis",
    title: "Jasa Pendampingan Skripsi",
    description:
      "Pendampingan teknis skripsi untuk perancangan sistem, implementasi coding, debugging, hingga persiapan demo.",
    priceRange: "Rp1.500.000 - Rp3.500.000",
    deliverables: ["Mentoring teknis", "Code review", "Checklist progress mingguan"],
  },
  {
    id: "service-journal",
    title: "Jasa Pembuatan Jurnal",
    description:
      "Bantuan penyusunan jurnal ilmiah dengan struktur yang rapi, penulisan teknis, dan format yang sesuai kebutuhan kampus.",
    priceRange: "Rp350.000 - Rp1.200.000",
    deliverables: ["Struktur jurnal", "Proofread teknis", "Format siap submit"],
  },
  {
    id: "service-laprak",
    title: "Jasa Pembuatan Laporan",
    description:
      "Pengerjaan laporan praktikum atau kerja praktik dari analisis, dokumentasi hasil, hingga finalisasi format agar rapi dan informatif.",
    priceRange: "Rp250.000 - Rp500.000",
    deliverables: ["Template rapi", "Pembahasan jelas", "Revisi minor"],
  },
];
