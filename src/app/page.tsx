import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhatWeDo from "@/components/WhatWeDo";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Builds from "@/components/Builds";
import CtaStrip from "@/components/CtaStrip";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <WhatWeDo />
        <UseCases />
        <HowItWorks />
        <Builds />
        <CtaStrip />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
