"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-14">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
