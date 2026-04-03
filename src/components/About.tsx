"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "2–4", label: "Weeks to live" },
    { number: "360°", label: "Delivery coverage" },
    { number: "6+", label: "Industries served" },
    { number: "US / PH", label: "Team footprint" },
  ];

  return (
    <section id="about" className="py-32 relative bg-surface border-y border-white/5">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-3">
              <span className="text-indigo font-mono text-xs tracking-widest uppercase mb-1">// About</span>
              <h2 className="text-4xl md:text-6xl font-semibold font-heading leading-[0.9] tracking-[-0.05em]">
                 Small team. <br /> Sharp builds.
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-muted text-lg md:text-xl leading-relaxed font-body max-w-lg">
              <p>
                AIWorkz360 isn't a bloated agency with 50 account managers. 
                We're a focused team of AI builders and systems engineers who ship fast and communicate clearly.
              </p>
              <p>
                Our background is in IT, cybersecurity, and managed services — 
                which means we build tools that are not just intelligent, but secure and production-ready from day one.
              </p>
              <p className="text-white font-bold italic border-l-2 border-indigo pl-6">
                We believe AI shouldn't be a buzzword. <br />
                It should be in your workflow by next Tuesday.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center gap-3">
               <span className="text-indigo text-xl">🔗</span>
               <span className="text-muted font-mono text-xs uppercase tracking-widest leading-none">
                 Part of the ITWorkz360 ecosystem — compliance & security layer included.
               </span>
            </div>
          </motion.div>

          {/* Right - Stats Card */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             viewport={{ once: true }}
             className="relative"
          >
            {/* Background Decoration */}
             <div className="absolute -inset-4 bg-indigo/10 blur-[10px] rounded-3xl opacity-40"></div>
             
             <div className="relative p-12 rounded-[40px] bg-card border border-white/10 group overflow-hidden shadow-2xl">
               <div className="grid grid-cols-2 gap-10 mb-12 relative z-10">
                 {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                       <span className="text-3xl md:text-5xl text-white font-semibold font-heading tracking-tighter transition-all group-hover:scale-110 duration-700 origin-left">
                         {stat.number}
                       </span>
                       <span className="text-muted text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                         {stat.label}
                       </span>
                    </div>
                 ))}
               </div>

               <div className="pt-10 border-t border-white/5 relative z-10">
                  <p className="text-muted text-sm font-body leading-relaxed max-w-xs transition-colors group-hover:text-white duration-500">
                    Regulated-industry ready. HIPAA-aware builds. Secure-by-default architecture. Ask us how.
                  </p>
               </div>

               {/* Design highlight - Indigo accent corner */}
               <div className="absolute top-[-30px] right-[-30px] w-16 h-16 bg-indigo/50 blur-[50px] pointer-events-none group-hover:bg-cyan/50 transition-colors duration-1000"></div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
