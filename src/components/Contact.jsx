import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { generalWhatsAppUrl } from "../data/contact.js";

function Contact() {
  return (
    <section id="kontak" className="section contact">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__main">
            <span className="section-kicker">Mulai proyek</span>
            <h2>Punya ide atau masalah yang perlu diselesaikan?</h2>
            <p>
              Ceritakan kebutuhan, target waktu, dan kisaran anggaran Anda.
              Kami akan bantu petakan solusi yang paling masuk akal—tanpa biaya konsultasi awal.
            </p>
            <a className="button button--accent button--large" href={generalWhatsAppUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Chat melalui WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>

          <aside className="contact__details" aria-label="Informasi kontak">
            <p>Kontak langsung</p>
            <a href="mailto:bintangawan0418@gmail.com">
              <span><Mail size={18} /></span>
              <div><small>Email</small><strong>bintangawan0418@gmail.com</strong></div>
            </a>
            <a href={generalWhatsAppUrl} target="_blank" rel="noreferrer">
              <span><MessageCircle size={18} /></span>
              <div><small>WhatsApp</small><strong>+62 878 4118 5404</strong></div>
            </a>
            <div className="contact__detail-item">
              <span><MapPin size={18} /></span>
              <div><small>Lokasi</small><strong>Medan, Sumatera Utara</strong></div>
            </div>
            <p className="contact__response">Respons biasanya dalam 1×24 jam kerja.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
