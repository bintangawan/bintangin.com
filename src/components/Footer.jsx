const MailIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.22l-8 5.3-8-5.3V6Zm0 12H4V9.14l7.37 4.88a1 1 0 0 0 1.26 0L20 9.14Z" />
  </svg>
);

const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.03 2a9.93 9.93 0 0 0-8.47 15.32L2 22l4.79-1.52A9.93 9.93 0 1 0 12.03 2Zm5.63 14.3c-.24.67-1.4 1.28-1.95 1.36-.5.07-1.13.1-1.83-.11-.42-.13-.95-.31-1.63-.61-2.87-1.24-4.74-4.11-4.89-4.3s-1.17-1.56-1.17-2.98a3.18 3.18 0 0 1 1-2.36 1 1 0 0 1 .72-.31h.52c.16 0 .39 0 .6.46s.77 1.89.83 2.03a.47.47 0 0 1 0 .45 1.26 1.26 0 0 1-.19.33c-.09.11-.24.27-.35.36-.12.12-.24.25-.1.49s.73 1.2 1.57 1.94 1.53 1.05 1.77 1.17.4.1.54-.06.63-.73.8-1 .35-.22.58-.13 1.5.71 1.76.84.58.26.67.41a2.14 2.14 0 0 1-.11 1.01Z" />
  </svg>
);

function Footer() {
  return (
    <footer className="section-padding border-t border-dark/10 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 py-8 text-sm text-dark/60 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} BintangIn. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:bintangawan0418@gmail.com"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-accent"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-white/70 shadow-inner shadow-dark/5">
              <MailIcon />
            </span>
            bintangawan0418@gmail.com
          </a>
          <span className="hidden text-dark/30 sm:block">|</span>
          <a
            href="https://wa.me/6287841185404"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-accent"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-white/70 shadow-inner shadow-dark/5">
              <WhatsAppIcon />
            </span>
            6287841185404
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
