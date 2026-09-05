const whatsappNumber = "6287841185404";

export function createWhatsAppUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const generalWhatsAppUrl = createWhatsAppUrl(
  "Halo Bintang Teknologi Solusindo, saya ingin konsultasi tentang kebutuhan website/software."
);
