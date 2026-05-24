"use client";

import { Suspense } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SectionDivider from "./SectionDivider";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
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
