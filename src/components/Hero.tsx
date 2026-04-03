"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const stats = [
    { value: "2–4 wks", label: "Average Go-Live" },
    { value: "2 Models", label: "Project + Retainer" },
    { value: "360°", label: "End-to-end Delivery" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-16">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-30 mask-gradient-b"></div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo/40 rounded-full blur-[140px] pointer-events-none"
      ></motion.div>

      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <div className="absolute inset-0 noise-overlay"></div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start mb-8"
        >
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo/20 bg-indigo/5 text-indigo text-[10px] font-mono tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo"></span>
            </span>
            ● Now building for professionals & SMBs
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white text-5xl md:text-8xl font-black font-heading leading-[0.9] tracking-[-0.05em] mb-8 text-center md:text-left"
        >
          The AI Team <br className="hidden md:block" />
          You Don't Have <br className="hidden md:block" />
          to Hire.
        </motion.h1>

        {/* SubHeading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted text-lg md:text-xl max-w-2xl mb-12 text-center md:text-left leading-relaxed contrast-125"
        >
          Custom AI automations and tools built for professionals and SMBs who have better things to do than repetitive work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-24 justify-center md:justify-start"
        >
          <Link
            href="#contact"
            className="group relative bg-indigo text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 font-heading">Book a Scoping Call</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[45deg]"></div>
          </Link>
          <Link
            href="#builds"
            className="group px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all"
          >
            See Our Builds
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-border/40 pt-16 gap-8 text-center md:text-left"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-white text-3xl font-black font-heading tracking-tight">{stat.value}</span>
              <span className="text-muted text-xs font-mono uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
