import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import BrandMark from "./BrandMark.jsx";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#proses", label: "Cara kerja" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#beranda"><BrandMark /></a>
          <p>Software house di Medan untuk website, sistem informasi, dan produk digital yang siap bertumbuh.</p>
        </div>
        <div className="footer__nav">
          <span>Navigasi</span>
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <div className="footer__social">
          <span>Terhubung</span>
          <a href="https://www.linkedin.com/in/bintang-kurniawan-herman" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href="https://www.instagram.com/bintangawanz" target="_blank" rel="noreferrer">
            <Instagram size={16} /> Instagram <ArrowUpRight size={14} />
          </a>
          <a href="mailto:bintangawan0418@gmail.com"><Mail size={16} /> Email</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Bintang Teknologi Solusindo.</p>
        <p>Dibangun dengan teliti di Medan.</p>
      </div>
    </footer>
  );
}

export default Footer;
