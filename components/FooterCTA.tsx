import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const FooterCTA: React.FC = () => {
  return (
    <div id="audit" className="relative py-48 overflow-hidden scroll-mt-24">
      {/* Background Gradient - Darkest to slightly lighter dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#22223B] z-0" />
      
      {/* Light Beam Effect - Using Tan/Rose for warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C9ADA7]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <Section className="relative z-10 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-8 flex flex-col gap-2"
        >
           <span className="text-[#C9ADA7] uppercase tracking-widest text-sm font-semibold">For brands seeking</span>
           <div className="flex flex-wrap justify-center gap-4 text-[#9A8C98] text-sm">
              <span>• Lead Longevity</span>
              <span>• Customer Loyalty</span>
              <span>• Increased Bottom Line</span>
              <span>• Sales Independence</span>
           </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-[#F2E9E4] mb-6"
        >
          Ready to Raise?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#9A8C98] max-w-xl mb-10"
        >
          If you run a DTC eCommerce brand making <strong>$20k+/mo</strong>, book a free strategy audit. We'll show you exactly where you're leaving money on the table.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
           <Button variant="primary" className="text-lg px-8 py-4 shadow-[0_0_50px_-10px_rgba(201,173,167,0.2)]">
             Get Your Free Audit
           </Button>
        </motion.div>

        <p className="mt-8 text-sm text-[#4A4E69]">
            Limited spots available for the performance model.
        </p>
      </Section>
    </div>
  );
};