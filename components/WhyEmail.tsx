import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { Section } from './ui/Section';

const reasons = [
  {
    icon: <TrendingUp className="w-5 h-5 text-[#C9ADA7]" />,
    title: "Rising Ad Costs",
    desc: "Acquisition costs are skyrocketing. You can't afford to buy the same customer twice. Retention is the new acquisition."
  },
  {
    icon: <Users className="w-5 h-5 text-[#9A8C98]" />,
    title: "Relationship & Trust",
    desc: "Customers don't buy after seeing a brand just once. We build the bridge that turns a visitor into a loyal advocate."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#F2E9E4]" />,
    title: "Ownership",
    desc: "Smart brands don't rely on rented land. Own your audience data and stop losing customers the moment they exit your site."
  }
];

export const WhyEmail: React.FC = () => {
  return (
    <div id="why-email" className="py-24 border-b border-white/5 bg-[#22223B]/30">
      <Section>
        <div className="mb-12">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F2E9E4]">Why Email Marketing?</h2>
           <p className="text-[#9A8C98] max-w-2xl text-lg">
             The e-commerce landscape has shifted. Trust is the currency of the future.
           </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="p-6 rounded-xl border border-[#4A4E69]/30 bg-[#0a0a0a] hover:border-[#C9ADA7]/50 hover:bg-[#22223B]/50 transition-colors duration-300 group"
             >
                <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-[#C9ADA7]/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#F2E9E4]">{item.title}</h3>
                <p className="text-[#9A8C98] leading-relaxed text-sm">
                  {item.desc}
                </p>
             </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};