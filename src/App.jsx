import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Backlinks from "./components/Backlinks";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Backlinks />
      <AboutUs />
      <Portfolio />
      <Testimonials />
      <Contact />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
