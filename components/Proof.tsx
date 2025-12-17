import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Percent, ShieldCheck } from 'lucide-react';

export const Proof: React.FC = () => {
  return (
    <div id="work" className="py-24 border-b border-white/5 bg-black">
      <Section>
        <div className="text-center mb-16">
          <p className="text-sm font-mono uppercase tracking-widest text-[#9A8C98] mb-6">
            Our Commitment
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F2E9E4] max-w-3xl mx-auto leading-tight">
            We only win when <span className="text-[#C9ADA7]">you win</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900 rounded-2xl overflow-hidden mt-12 shadow-2xl">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="bg-[#080808] p-12 flex flex-col items-center justify-center text-center group hover:bg-[#22223B]/40 transition-colors relative"
           >
              <div className="mb-6 p-4 rounded-full bg-[#C9ADA7]/10 text-[#C9ADA7]">
                <ShieldCheck size={48} />
              </div>
              <h3 className="text-2xl font-bold text-[#F2E9E4] mb-4">Zero Financial Risk</h3>
              <p className="text-[#9A8C98] max-w-sm">
                We don't charge hefty retainers upfront. We take on the risk of execution so you can focus on product and operations.
              </p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.1 }}
             className="bg-[#080808] p-12 flex flex-col items-center justify-center text-center group hover:bg-[#22223B]/40 transition-colors relative"
           >
               <div className="mb-6 p-4 rounded-full bg-[#4A4E69]/20 text-[#9A8C98] group-hover:text-[#F2E9E4] transition-colors">
                <Percent size={48} />
              </div>
              <h3 className="text-2xl font-bold text-[#F2E9E4] mb-4">Performance Based</h3>
              <p className="text-[#9A8C98] max-w-sm">
                Our fee is a percentage of the revenue we generate for you. Our incentives are perfectly aligned with your growth.
              </p>
           </motion.div>
        </div>
      </Section>
    </div>
  );
};