"use client";

import Hero from "@/components/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Tools/>
      <Footer/>
    </>
  );
}
