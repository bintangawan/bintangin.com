import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
