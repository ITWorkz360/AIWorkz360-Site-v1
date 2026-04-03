"use client";

import { motion } from "framer-motion";

const builds = [
  {
    industry: "Healthcare Admin",
    title: "Patient Intake → CRM Pipeline",
    desc: "Replaced a 12-step manual intake form with an automated flow that captures data, creates CRM records, and triggers follow-up emails — no human touch required.",
    resultBadge: "↓ 80% manual work",
    resultText: "Staff reclaimed 3 hrs/day",
  },
  {
    industry: "Staffing Firm",
    title: "AI Resume Screening Tool",
    desc: "Built a custom AI screener that scores and ranks 100 applicant resumes in under 60 seconds against a job description — with an exportable shortlist report.",
    resultBadge: "100 CVs in 60s",
    resultText: "From 4 hours to minutes",
  },
  {
    industry: "Legal Professional",
    title: "Contract Summary Assistant",
    desc: "A custom AI tool that accepts uploaded contracts and returns a structured plain-English summary with flagged clauses, risk indicators, and key dates — in seconds.",
    resultBadge: "↓ 90% review time",
    resultText: "Per contract processed",
  },
  {
    industry: "SMB Owner",
    title: "Automated Weekly Reporting",
    desc: "Replaced manual weekly report compilation with an AI pipeline that pulls data from 4 tools, formats it, and delivers a Slack summary every Monday at 8am.",
    resultBadge: "Fully automated",
    resultText: "Saves 2hrs every week",
  },
];

export default function Builds() {
  return (
    <section id="builds" className="py-32 bg-surface">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col gap-4 mb-24">
          <span className="text-indigo font-mono text-xs tracking-widest uppercase mb-2">// Builds</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight tracking-[-0.04em]">
            Results, not <br /> feature lists.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {builds.map((build, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[40px] bg-card border border-white/5 hover:border-indigo/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden group shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-widest border border-white/10 mb-4 inline-block">
                    {build.industry}
                  </span>
                  <h3 className="text-2xl font-black font-heading text-white tracking-tight">{build.title}</h3>
                </div>
                
                <p className="text-muted text-lg mb-12 leading-relaxed flex-grow font-body">
                  {build.desc}
                </p>

                <div className="pt-8 border-t border-white/10 mt-auto flex flex-col sm:flex-row items-center gap-6 group-hover:border-indigo/30 transition-colors duration-500">
                  <div className="px-4 py-2 rounded-xl bg-cyan/10 border border-cyan/20 text-cyan text-sm font-black font-heading tracking-tight whitespace-nowrap shadow-cyan/5 shadow-lg group-hover:scale-110 transition-transform">
                    {build.resultBadge}
                  </div>
                  <span className="text-muted text-sm italic font-medium opacity-80">{build.resultText}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
