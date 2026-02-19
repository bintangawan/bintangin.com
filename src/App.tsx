import { Suspense, lazy, useEffect, useState } from "react";
import Hero from "./components/Hero";
import type { ContactLink } from "./components/Contact";
import type { TechItem } from "./components/TechStack";
import GithubIcon from "lucide-react/dist/esm/icons/github";
import InstagramIcon from "lucide-react/dist/esm/icons/instagram";
import LinkedinIcon from "lucide-react/dist/esm/icons/linkedin";
import MailIcon from "lucide-react/dist/esm/icons/mail";
import MapPinIcon from "lucide-react/dist/esm/icons/map-pin";
import MessageCircleIcon from "lucide-react/dist/esm/icons/message-circle";
import TwitterIcon from "lucide-react/dist/esm/icons/twitter";
import { experiences } from "./data/experiences";
import { projects } from "./data/projects";
import { services } from "./data/services";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const Footer = lazy(() => import("./components/Footer"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const TechStack = lazy(() => import("./components/TechStack"));

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "My Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const techItems: TechItem[] = [
  { name: "React", iconSrc: "/techstack/React.svg", accent: "#61DAFB" },
  { name: "Vite", iconSrc: "/techstack/Vite.js.svg", accent: "#6366F1" },
  { name: "Express", iconSrc: "/techstack/Express.svg", accent: "#A1A1AA" },
  { name: "Laravel", iconSrc: "/techstack/Laravel.svg", accent: "#EF4444" },
  { name: "PHP", iconSrc: "/techstack/PHP.svg", accent: "#A3A3FF" },
  { name: "JavaScript", iconSrc: "/techstack/JavaScript.svg", accent: "#FACC15" },
  { name: "TypeScript", iconSrc: "/techstack/TypeScript.svg", accent: "#2563EB" },
  { name: "Node.js", iconSrc: "/techstack/Node.js.svg", accent: "#22C55E" },
];

const heroFloatingIcons = [
  { label: "React", iconSrc: "/techstack/React.svg" },
  { label: "Vite", iconSrc: "/techstack/Vite.js.svg" },
  { label: "JavaScript", iconSrc: "/techstack/JavaScript.svg" },
  { label: "Laravel", iconSrc: "/techstack/Laravel.svg" },
  { label: "TypeScript", iconSrc: "/techstack/TypeScript.svg" },
  { label: "Node.js", iconSrc: "/techstack/Node.js.svg" },
  { label: "Express", iconSrc: "/techstack/Express.svg" },
  { label: "PHP", iconSrc: "/techstack/PHP.svg" },
];

const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bintang-kurniawan-herman",
    value: "linkedin.com/in/bintang-kurniawan-herman",
    icon: LinkedinIcon,
    iconColor: "#0A66C2",
    iconBackground: "#E8F3FF",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bintangawanz",
    value: "@bintangawanz",
    icon: InstagramIcon,
    iconColor: "#E1306C",
    iconBackground: "#FFE9F2",
  },
  {
    label: "X",
    href: "https://x.com/starlvng",
    value: "@starlvng",
    icon: TwitterIcon,
    iconColor: "#0F172A",
    iconBackground: "#E9EEF8",
  },
  {
    label: "GitHub",
    href: "https://github.com/bintangawan",
    value: "github.com/bintangawan",
    icon: GithubIcon,
    iconColor: "#111827",
    iconBackground: "#EEF2F7",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6287841185404",
    value: "+62 878-4118-5404",
    icon: MessageCircleIcon,
    iconColor: "#25D366",
    iconBackground: "#EAFAF0",
  },
  {
    label: "Gmail",
    href: "mailto:bintangawan0418@gmail.com",
    value: "bintangawan0418@gmail.com",
    icon: MailIcon,
    iconColor: "#EA4335",
    iconBackground: "#FEEDEA",
  },
];

const footerContacts = [
  {
    label: "WhatsApp",
    value: "+62 878-4118-5404",
    href: "https://wa.me/6287841185404",
    icon: MessageCircleIcon,
    iconColor: "#16A34A",
    iconBackground: "#ECFDF3",
  },
  {
    label: "Email",
    value: "bintangawan0418@gmail.com",
    href: "mailto:bintangawan0418@gmail.com",
    icon: MailIcon,
    iconColor: "#DC2626",
    iconBackground: "#FEF2F2",
  },
  {
    label: "Lokasi",
    value: "Indonesia",
    icon: MapPinIcon,
    iconColor: "#1D4ED8",
    iconBackground: "#EFF6FF",
  },
];

const hireMeLink = "https://wa.me/6287841185404";
const containerWidthClass = "mx-auto w-[92%] sm:w-[90%] lg:w-[86%] xl:w-[82%] 2xl:w-[78%] max-w-[1240px]";
const sectionIds = navItems.map((item) => item.href.replace("#", ""));

const resolveSectionFromHash = () => {
  if (typeof window === "undefined") {
    return "home";
  }

  const hash = window.location.hash.replace("#", "");
  return sectionIds.includes(hash) ? hash : "home";
};

const resolveSectionFromScroll = () => {
  if (typeof window === "undefined") {
    return "home";
  }

  const marker = window.scrollY + 150;
  let current = "home";

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section && marker >= section.offsetTop) {
      current = id;
    }
  });

  return current;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(resolveSectionFromHash);
  const [renderDeferred, setRenderDeferred] = useState(() => resolveSectionFromHash() !== "home");

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(resolveSectionFromScroll());
    };

    const handleHashChange = () => {
      setActiveSection(resolveSectionFromHash());
    };

    handleScroll();
    handleHashChange();

    const rafId = window.requestAnimationFrame(() => {
      handleScroll();
      handleHashChange();
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (renderDeferred) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      setRenderDeferred(true);
    }, 220);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [renderDeferred]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[--background-primary] text-[--text-primary]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_9%,rgba(99,102,241,0.2),transparent_32%),radial-gradient(circle_at_12%_32%,rgba(14,165,233,0.14),transparent_36%),linear-gradient(180deg,var(--background-primary),var(--background-secondary),var(--surface-card))]"
      />

      <header className="sticky top-0 z-50 border-b border-[--border-subtle] bg-[rgba(255,255,255,0.92)] backdrop-blur-xl">
        <nav className={`${containerWidthClass} flex h-[4.25rem] items-center justify-between`}>
          <a href="#home" className="text-base font-semibold tracking-[0.01em] text-[--text-primary]">
            Portfolio <span className="brand-gradient">| Bintang</span>
          </a>

          <ul className="hidden items-center gap-6 text-sm text-[--text-secondary] md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(sectionId)}
                    className={`group relative inline-flex pb-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent-secondary] ${
                      isActive
                        ? "font-semibold text-[--accent-primary]"
                        : "text-[--text-secondary] hover:text-[--accent-primary]"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-[rgba(15,23,42,0.78)] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={hireMeLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[--accent-primary] bg-white px-5 py-2 text-sm font-semibold text-[--accent-primary] shadow-[0_10px_24px_rgba(99,102,241,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[--accent-primary] hover:text-white md:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[--border-subtle] bg-white text-[--text-primary] md:hidden"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-panel"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      {isMenuOpen ? (
        <div
          id="mobile-menu-panel"
          className="fixed inset-0 z-[60] bg-[rgba(247,248,252,0.98)] backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className={`${containerWidthClass} h-full py-4`}>
            <div className="flex items-center justify-between">
              <a href="#home" className="text-base font-semibold text-[--text-primary]">
                Portfolio <span className="brand-gradient">| Bintang</span>
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[--border-subtle] bg-white text-[--text-primary]"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="mt-10">
              <ul className="flex flex-col items-center gap-6 text-xl leading-none text-[--text-secondary]">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <li
                      key={`mobile-menu-${item.href}`}
                      className="menu-drop-in opacity-0"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <a
                        href={item.href}
                        onClick={() => {
                          setActiveSection(sectionId);
                          setIsMenuOpen(false);
                        }}
                        className={`transition duration-200 ${
                          isActive ? "text-[--accent-primary]" : "hover:text-[--accent-primary]"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex justify-center">
                <a
                  href={hireMeLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-drop-in inline-flex min-w-32 items-center justify-center rounded-xl bg-[--accent-primary] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(79,70,229,0.24)]"
                  style={{ animationDelay: `${navItems.length * 90}ms` }}
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </div>
        </div>
      ) : null}

      <main className={`${containerWidthClass} flex flex-col gap-20 pb-14 pt-3 sm:gap-24 sm:pt-4 lg:pt-5`}>
        <Hero
          fullName="Bintang Kurniawan Herman"
          role="Fullstack Developer"
          tagline="Membantu mewujudkan website dan aplikasi yang modern, elegan, cepat, dan nyaman dipakai."
          summary="Saya fokus membangun produk digital dari sisi frontend hingga backend dengan arsitektur rapi, performa tinggi, dan pengalaman pengguna yang mulus."
          imageSrc="/bintangin-profile-optimized.png"
          imageAlt="Bintang Kurniawan Herman profile photo"
          floatingIcons={heroFloatingIcons}
          primaryCta={{ label: "Hire Me", href: hireMeLink }}
          secondaryCta={{ label: "View Projects", href: "#projects" }}
        />
        <Suspense fallback={null}>
          {renderDeferred ? (
            <>
              <About
                fullName="Bintang Kurniawan Herman"
                role="Fullstack Developer"
                introduction="Halo, saya Bintang Kurniawan Herman, seorang Fullstack Developer dengan ketertarikan kuat pada product development. Saya menikmati proses mengubah kebutuhan bisnis menjadi antarmuka yang rapi, mudah dipakai, dan punya nilai nyata untuk pengguna."
                background="Dalam praktiknya, saya terbiasa bekerja dari tahap perencanaan fitur, slicing UI, integrasi API, sampai deployment. Saya juga aktif di jalur akademik dan project-based learning, sehingga terbiasa menyeimbangkan kualitas teknis, dokumentasi, dan ketepatan delivery. Target saya selalu sama: membangun solusi yang maintainable, performanya bagus, dan tetap nyaman untuk user di berbagai device."
                techHighlights={[
                  "React",
                  "TypeScript",
                  "Vite",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "Laravel",
                  "PHP",
                  "REST API",
                  "MySQL",
                  "Google Cloud",
                ]}
                strengths={[
                  "Component architecture yang scalable",
                  "Code quality dan struktur project yang rapi",
                  "Optimasi performa dan responsiveness",
                  "Kolaborasi tim dengan komunikasi jelas",
                  "Debugging cepat dan problem solving terarah",
                  "Delivery fokus hasil dan impact produk",
                ]}
                education={[
                  {
                    title: "Bachelor Degree",
                    institution: "UIN Sumatera Utara (UINSU)",
                    year: "2025",
                    focus: "Computer Science",
                    logoSrc: "/education/uinsu.svg",
                    logoAlt: "Logo UINSU",
                    logoBackground: "#EEF2FF",
                  },
                  {
                    title: "Bangkit Academy 2024 Batch 2",
                    institution: "Bangkit Academy",
                    year: "2024",
                    focus: "Cloud Computing",
                    logoSrc: "/education/bangkit.svg",
                    logoAlt: "Logo Bangkit Academy",
                    logoBackground: "#E9FAF0",
                  },
                  {
                    title: "Coding Camp 2025",
                    institution: "Coding Camp powered by DBS Foundation",
                    year: "2025",
                    focus: "Fullstack Web Developer",
                    logoSrc: "/education/codingcamp.svg",
                    logoAlt: "Logo Coding Camp",
                    logoBackground: "#EFF6FF",
                  },
                  {
                    title: "Coding Camp 2026",
                    institution: "Coding Camp powered by DBS Foundation",
                    year: "2026",
                    focus: "Fullstack Web Developer",
                    logoSrc: "/education/codingcamp.svg",
                    logoAlt: "Logo Coding Camp",
                    logoBackground: "#EFF6FF",
                  },
                ]}
              />

              <ExperienceSection experiences={experiences} />

              <ServicesSection services={services} />

              <TechStack items={techItems} />

              <ProjectsSection projects={projects} />

              <Contact links={contactLinks} />
            </>
          ) : null}
        </Suspense>
      </main>
      <Suspense fallback={null}>
        {renderDeferred ? (
          <Footer
            name="Bintang Kurniawan Herman"
            role="Fullstack Developer"
            year={new Date().getFullYear()}
            imageSrc="/bintangin-profile-optimized.png"
            imageAlt="Bintang profile"
            tagline="Mengerjakan website dan aplikasi dengan fokus pada kualitas visual, performa, dan hasil yang berdampak."
            links={navItems}
            contacts={footerContacts}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

export default App;
