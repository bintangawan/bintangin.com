import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-cream text-dark">
      <div className="absolute inset-x-0 -top-40 hidden h-[380px] bg-gradient-to-br from-accent/20 via-secondary/10 to-tertiary/10 blur-3xl md:block" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
