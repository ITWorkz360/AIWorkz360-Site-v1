"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Scope", subtitle: "Free 20-min call", body: "We map your workflow, identify gaps, and define exactly what to build.", timing: "→ Day 1", active: false },
  { id: "02", title: "Build", subtitle: "Collaborative design", body: "We design, develop, and test your automation or custom tool — you stay in the loop throughout.", timing: "→ Week 1–3", active: true },
  { id: "03", title: "Deploy & Run", subtitle: "One-time or retainer", body: "Your tool goes live. Walk away with a one-time delivery or stay on retainer for ongoing growth.", timing: "→ Week 2–4", active: false },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative bg-bg overflow-hidden whitespace-nowrap overflow-x-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-24">
          <span className="text-indigo font-mono text-xs tracking-widest uppercase mb-2">// How It Works</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight tracking-tight">
            From idea to live <br /> in weeks, not months.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12 lg:gap-x-20">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-indigo via-indigo/50 to-cyan/50 pointer-events-none opacity-40"></div>

          {/* Steps */}
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Step Circle */}
              <div className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center border-2 mb-12 shadow-2xl transition-all duration-500 hover:scale-110 ${
                step.active ? "bg-indigo border-indigo/20 shadow-indigo/40" : "bg-bg border-white/20 hover:border-indigo/50"
              }`}>
                <span className={`text-[40px] font-black font-heading tracking-tighter ${step.active ? "text-white" : "text-white/20"}`}>
                  {step.id}
                </span>
                {step.active && (
                   <div className="absolute inset-[-8px] rounded-full border border-indigo/30 animate-pulse"></div>
                )}
              </div>

              <div className="mb-4">
                <span className="text-cyan font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block">{step.subtitle}</span>
                <h3 className="text-2xl font-black font-heading text-white tracking-tight">{step.title}</h3>
              </div>
              <p className="text-muted text-lg mb-6 leading-relaxed font-body whitespace-normal">
                {step.body}
              </p>
              <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] text-white/50 tracking-widest group-hover:text-indigo transition-colors uppercase">
                {step.timing}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
