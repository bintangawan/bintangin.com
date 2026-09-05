import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandMark from "./BrandMark.jsx";
import { generalWhatsAppUrl } from "../data/contact.js";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#proses", label: "Cara kerja" },
  { href: "#tentang", label: "Tentang" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#beranda" className="navbar__brand" onClick={() => setOpen(false)}>
          <BrandMark />
        </a>

        <nav className="navbar__desktop" aria-label="Navigasi utama">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="button button--dark navbar__cta"
          href={generalWhatsAppUrl}
          target="_blank"
          rel="noreferrer"
        >
          Konsultasi gratis <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        <nav className="container" aria-label="Navigasi seluler">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <a
            className="button button--primary"
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Mulai konsultasi <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
