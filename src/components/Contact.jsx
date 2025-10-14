import React from "react";

const contacts = [
  {
    label: "LinkedIn",
    value: "@bintangkurniawanherman",
    href: "https://www.linkedin.com/in/bintang-kurniawan-herman",
    iconSrc: "images/linkedin.svg",
  },
  {
    label: "Instagram",
    value: "@bintangawanz",
    href: "https://www.instagram.com/bintangawanz?igsh=Mm4wZTN4dWs4cXE2",
    iconSrc: "images/instagram.svg",
  },
  {
    label: "X (Twitter)",
    value: "@starlvng",
    href: "https://x.com/starlvng?t=6_i2MZDVjLQSUWNQiFD9qw&s=08",
    iconSrc: "images/x-logo.svg",
  },
  {
    label: "WhatsApp",
    value: "+62 878 4118 5404",
    href: "https://wa.me/6287841185404",
    iconSrc: "images/whatsapp.svg",
  },
  {
    label: "Gmail",
    value: "@bintangawan0418",
    href: "mailto:bintangawan0418@gmail.com",
    iconSrc: "images/gmail.svg",
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

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="rounded-[40px] bg-gradient-to-br from-white via-white/80 to-blue-50/30 px-8 py-12 shadow-2xl shadow-gray-900/5 backdrop-blur-sm sm:px-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Left Column */}
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-blue-600/30">
                Contact Me
              </span>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Mari diskusikan kebutuhan digital Anda, saya siap membantu dari
                ide sampai eksekusi.
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Kirim pesan melalui platform favorit Anda, atau langsung
                jadwalkan sesi konsultasi singkat. Saya akan merespon dalam 24
                jam.
              </p>
              <a
                href="https://wa.me/6287841185404"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40"
              >
                <WhatsAppIcon />
                Chat WhatsApp Sekarang
              </a>
            </div>

            {/* Right Column - Contact Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("mailto") ? "_self" : "_blank"
                  }
                  rel="noreferrer"
                  className="group flex flex-col justify-between gap-3 rounded-3xl border border-gray-200 bg-white/90 px-6 py-6 shadow-lg shadow-gray-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-sm">
                      {contact.iconSrc ? (
                        <img
                          src={contact.iconSrc}
                          alt={contact.label}
                          className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                          // style={{
                          //   filter:
                          //     "brightness(0) saturate(100%) invert(38%) sepia(84%) saturate(2476%) hue-rotate(220deg) brightness(95%) contrast(95%)",
                          // }}
                        />
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.22l-8 5.3-8-5.3V6ZM4 18V9.14l7.37 4.88a1 1 0 0 0 1.26 0L20 9.14V18Z" />
                        </svg>
                      )}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      {contact.label}
                    </span>
                  </div>
                  <span className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {contact.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
