"use client";

import { motion } from "framer-motion";

const cases = [
  { icon: "🏥", title: "Healthcare & Clinics", desc: "Automate patient intake, appointment reminders, and documentation pipelines." },
  { icon: "⚖️", title: "Legal Professionals", desc: "Contract summarizers, client intake bots, and document review automation." },
  { icon: "🏢", title: "SMBs & Startups", desc: "Lead capture, CRM sync, reporting, and customer onboarding — on autopilot." },
  { icon: "📈", title: "Finance & Accounting", desc: "Expense classification, invoice routing, and financial report generation." },
  { icon: "🧑‍💼", title: "Staffing & HR", desc: "Resume screening AI, onboarding flows, and applicant tracking integrations." },
  { icon: "🚀", title: "Agencies & Consultants", desc: "Client reporting, proposal builders, and delivery workflow automation." },
];

export default function UseCases() {
  return (
    <section className="py-32 relative bg-surface border-y border-white/5">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-cyan font-mono text-xs tracking-widest uppercase mb-2">// Use Cases</span>
          <h2 className="text-4xl md:text-6xl font-semibold font-heading leading-tight tracking-[-0.04em]">
            Built for real <br /> workflows.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-card border border-white/10 hover:border-indigo/50 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform origin-left duration-500">{useCase.icon}</div>
              <h3 className="text-xl font-bold font-heading text-white mb-4">{useCase.title}</h3>
              <p className="text-muted leading-relaxed font-body">{useCase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
