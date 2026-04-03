"use client";

import { motion } from "framer-motion";

const items = [
  "⚡ Workflow Automation",
  "🤖 Custom AI Tools",
  "📄 Document Processing",
  "🔗 CRM Integration",
  "📊 Auto Reporting",
  "💬 AI Chatbots",
  "🧩 App Building",
  "📥 Lead Pipelines",
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-surface py-8 border-y border-indigo/20">
      <div className="flex w-fit animate-marquee whitespace-nowrap gap-16 px-8">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-white/80 font-heading text-lg font-bold tracking-tight"
          >
            <span className="text-indigo text-2xl">•</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
