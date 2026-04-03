"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function WhatWeDo() {
  const cards = [
    {
      title: "AI Automations",
      icon: <Zap className="w-8 h-8 text-indigo" />,
      body: "Connect your existing tools. Eliminate manual steps. We map your workflow gaps and wire up intelligent automations that run 24/7 — without you touching a thing.",
      tags: ["Lead Follow-up", "Invoice Processing", "Onboarding Flows", "Auto Reporting", "CRM Pipelines"],
      accent: "border-indigo/50 hover:border-indigo",
    },
    {
      title: "Custom AI Builds",
      icon: <span className="text-3xl">🛠️</span>,
      body: "Purpose-built AI apps, dashboards, and tools — when off-the-shelf doesn't cut it. We scope, build, and deploy software designed exactly for your workflow.",
      tags: ["AI Chatbots", "Doc Processors", "Client Portals", "Proposal Generators", "Custom Dashboards"],
      accent: "border-cyan/50 hover:border-cyan shadow-cyan/10",
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-indigo font-mono text-xs tracking-widest uppercase mb-1">// What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading leading-[0.9] tracking-[-0.05em] max-w-xl">
            Two ways we plug into <br /> your business.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[32px] bg-card border-2 ${card.accent} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default group`}
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-bg/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-black font-heading text-white mb-4 tracking-tight">{card.title}</h3>
              <p className="text-muted text-lg mb-8 leading-relaxed font-body">
                {card.body}
              </p>
              <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                {card.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/50 border border-white/10 font-medium group-hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
