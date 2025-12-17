import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Cpu, Mail } from 'lucide-react';
import { Section } from './ui/Section';

export const Infrastructure: React.FC = () => {
  return (
    <div className="py-12 border-b border-white/5 bg-black">
      <Section>
        <div className="flex flex-col items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4A4E69]/30 to-transparent mb-12 border-t border-dashed border-white/10" />
          
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#9A8C98] mb-10">
            Powered by industry-leading infrastructure
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* OpenAI */}
            <div className="flex items-center gap-3 group">
              <Cpu className="w-5 h-5 text-[#C9ADA7] group-hover:text-white transition-colors" />
              <span className="text-lg font-semibold tracking-tight text-[#F2E9E4]">OpenAI</span>
            </div>
            
            {/* Figma */}
            <div className="flex items-center gap-3 group">
              <Figma className="w-5 h-5 text-[#9A8C98] group-hover:text-white transition-colors" />
              <span className="text-lg font-semibold tracking-tight text-[#F2E9E4]">Figma</span>
            </div>
            
            {/* Klaviyo */}
            <div className="flex items-center gap-3 group">
              <Mail className="w-5 h-5 text-[#C9ADA7] group-hover:text-white transition-colors" />
              <span className="text-lg font-semibold tracking-tight text-[#F2E9E4]">Klaviyo</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};