import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header>
        <Navbar />
      </header>
      <main id="main-content" className="flex-1">
        <Hero />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
