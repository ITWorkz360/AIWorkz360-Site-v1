"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Builds", href: "#builds" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-[#07070D]/80 backdrop-blur-xl border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-semibold flex items-center gap-1">
          <span className="text-indigo">AI</span>
          <span className="text-white">Workz360</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="bg-indigo text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Book a Scoping Call
        </Link>
      </div>
    </nav>
  );
}
