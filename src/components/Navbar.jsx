import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "My Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleNavigate = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dark/5 bg-cream/90 backdrop-blur-xl">
      <div className="section-padding mx-auto flex max-w-7xl items-center justify-between py-4">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-dark transition-colors duration-300 hover:text-accent sm:text-xl"
          onClick={handleNavigate}
        >
          <span className="text-accent">Bintang</span>In
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-dark/70 md:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative transition-all duration-300 hover:text-dark"
            >
              <span className="after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-accent after:to-secondary after:transition-all after:duration-300 hover:after:w-full">
                {label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/6287841185404"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-dark px-5 py-2 text-sm font-semibold text-cream shadow-lg shadow-dark/10 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 bg-cream shadow-sm transition-all duration-300 hover:border-accent/60 hover:shadow-lg md:hidden"
          onClick={handleToggle}
        >
          <span className="sr-only">Toggle menu</span>
          <span
            className={`absolute left-1/2 h-0.5 w-6 -translate-x-1/2 bg-dark transition-transform duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-1/2 h-0.5 w-6 -translate-x-1/2 bg-dark transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-1/2 h-0.5 w-6 -translate-x-1/2 bg-dark transition-transform duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <div className={`section-padding md:hidden ${open ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 pb-4 text-base font-medium text-dark">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavigate}
              className="rounded-2xl bg-white/70 px-4 py-3 shadow-sm transition-all duration-300 hover:bg-white hover:text-accent"
            >
              {label}
            </a>
          ))}

          <a
            href="https://wa.me/6287841185404"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-gradient-to-r from-accent to-secondary px-4 py-3 text-center font-semibold text-white shadow-lg shadow-accent/30 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
