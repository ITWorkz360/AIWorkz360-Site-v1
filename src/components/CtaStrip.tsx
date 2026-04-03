"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaStrip() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center bg-[#07070D]">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container relative z-10 px-6 mx-auto text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="mb-8"
        >
          <span className="text-indigo font-mono text-xs tracking-[0.3em] uppercase">// Ready to automate?</span>
        </motion.div>

        <motion.h2
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           viewport={{ once: true }}
           className="text-4xl md:text-7xl font-black font-heading leading-[0.9] tracking-[-0.03em] mb-12 text-white max-w-4xl"
        >
          Not sure where to start? <br className="hidden md:block" />
          That's exactly what the call is for.
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="text-muted text-xl max-w-2xl mb-16 leading-relaxed font-body"
        >
          20 minutes. No pressure. We map your workflow together — you leave with a clear picture, even if we don't work together.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           viewport={{ once: true }}
           className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="#contact"
            className="group relative bg-indigo text-white px-10 py-5 rounded-full font-black text-lg hover:shadow-[0_0_40px_rgba(108,99,255,0.4)] transition-all flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10 font-heading">Book a Free Scoping Call</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[45deg]"></div>
          </Link>
          <Link
            href="#builds"
            className="group px-10 py-5 rounded-full font-black text-lg text-white border border-white/20 hover:bg-white/5 transition-all"
          >
            See Our Builds
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
