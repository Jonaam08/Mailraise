import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';

const steps = [
  {
    id: "01",
    name: "Assess",
    timeline: "Days 1-10",
    description: "Laying the foundation.",
    icon: <Search className="w-5 h-5" />,
    items: ["Deep Market Research", "Create a Strategy Roadmap", "Evaluate Branding & Voice", "Audit Existing Infrastructure"]
  },
  {
    id: "02",
    name: "Invent",
    timeline: "Days 10-50",
    description: "Execution mode.",
    icon: <PenTool className="w-5 h-5" />,
    items: ["Execute Campaign Calendar", "Implement High-Converting Sign-Up Forms", "Build & Optimize Core Flows", "Weekly Performance Reports"]
  },
  {
    id: "03",
    name: "Raise",
    timeline: "Days 50+",
    description: "Scaling & Optimization.",
    icon: <TrendingUp className="w-5 h-5" />,
    items: ["Expand Campaign Frequency", "A/B Test Flows & Forms", "Experiment with New Angles", "Bi-Monthly Strategy Reviews"]
  }
];

export const Process: React.FC = () => {
  return (
    <div id="process" className="py-32 relative bg-[#050505]">
       {/* Background decorative grid fade */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-image-linear-to-b" />

      <Section>
        <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mx-auto w-12 h-12 flex items-center justify-center rounded-xl bg-[#C9ADA7]/10 text-[#C9ADA7] mb-6 border border-[#C9ADA7]/20"
           >
              <TrendingUp />
           </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-[#F2E9E4] mb-6"
          >
            The AIR Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#9A8C98] text-lg"
          >
            Assess. Invent. Raise. A systematic approach to consistent growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-black rounded-2xl border border-neutral-800 p-8 flex flex-col h-full hover:border-[#C9ADA7]/40 hover:shadow-[0_0_40px_-10px_rgba(201,173,167,0.15)] transition-all duration-300 group relative"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6 pb-6 border-b border-neutral-800 group-hover:border-[#4A4E69]/30 transition-colors">
                <div>
                  <h3 className="text-3xl font-bold text-[#F2E9E4] mb-1">{step.name}</h3>
                  <div className="text-xs font-mono text-[#C9ADA7] uppercase tracking-wider mb-2">{step.timeline}</div>
                  <p className="text-[#9A8C98] text-sm">{step.description}</p>
                </div>
                <div className="p-3 rounded-full bg-[#22223B] text-[#C9ADA7] group-hover:scale-110 transition-transform">
                    {step.icon}
                </div>
              </div>

              {/* List */}
              <ul className="space-y-4 flex-grow">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#F2E9E4] text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#C9ADA7] flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9ADA7]/0 to-transparent group-hover:via-[#C9ADA7]/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};