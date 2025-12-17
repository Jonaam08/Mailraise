import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Zap, BarChart, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const visualY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div ref={targetRef} className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden border-b border-white/5">
      <Section className="z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Hook & Promise */}
        <motion.div 
          style={{ opacity, scale, y }}
          className="flex flex-col gap-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9ADA7]/10 border border-[#C9ADA7]/20 w-fit"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9ADA7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9ADA7]"></span>
            </span>
            <span className="text-xs font-medium text-[#C9ADA7] tracking-wide uppercase">Performance Based • Zero Risk</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#F2E9E4] leading-[0.95]"
          >
            Traffic Is Expensive. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9ADA7] to-[#9A8C98]">Letting It Leave Is Optional.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#9A8C98] max-w-lg leading-relaxed"
          >
            We help B2C Ecommerce Brands increase revenue through engineered Email Marketing. You take on <strong>no financial risk</strong>—we work on a percentage of the revenue we generate.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#audit">
              <Button variant="primary" icon={<ArrowRight size={16} />}>
                Start Scaling
              </Button>
            </a>
            <a href="#process">
              <Button variant="secondary">
                Our Model
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Abstract Visual */}
        <motion.div 
          style={{ y: visualY, rotateX: visualRotate }}
          className="relative hidden lg:block perspective-1000"
        >
           {/* Abstract Floating Interface Representation */}
           <div className="relative w-full aspect-square max-w-lg mx-auto">
              
              {/* Back Glow - Using Brand Dark/Blue */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9ADA7]/10 to-[#4A4E69]/30 blur-[60px] rounded-full" />
              
              {/* Main Card */}
              <motion.div 
                className="absolute inset-10 bg-[#22223B]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Mock UI Header */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C9ADA7]/20 border border-[#C9ADA7]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#4A4E69]/40 border border-[#4A4E69]/50" />
                </div>
                {/* Mock UI Body */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-[#9A8C98] uppercase tracking-widest">Client Revenue Generated</div>
                      <div className="text-3xl font-mono text-[#F2E9E4]">$124,040</div>
                    </div>
                    <div className="px-3 py-1 bg-[#C9ADA7]/10 text-[#C9ADA7] text-xs rounded border border-[#C9ADA7]/20 font-mono flex items-center gap-2">
                      <span>35%</span>
                      <TrendingUp size={14} className="stroke-[3]" />
                    </div>
                  </div>
                  
                  {/* Chart Graphic Area */}
                  <div className="h-32 w-full flex items-end justify-between gap-1 pt-4">
                    {[20, 35, 30, 50, 45, 60, 55, 75, 70, 95].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="w-full bg-gradient-to-t from-[#4A4E69]/30 to-[#9A8C98]/50 rounded-t-sm relative group"
                      >
                         <div className="absolute inset-x-0 top-0 h-[1px] bg-[#C9ADA7]/40 group-hover:bg-[#C9ADA7] transition-colors" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Nodes connecting */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                     <div className="h-16 rounded bg-[#0a0a0a]/50 border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9ADA7] to-transparent animate-glow-line" />
                        <Zap size={16} className="text-[#C9ADA7] mr-2" />
                        <span className="text-xs text-[#9A8C98]">Campaign Active</span>
                     </div>
                     <div className="h-16 rounded bg-[#0a0a0a]/50 border border-white/5 flex items-center justify-center">
                        <BarChart size={16} className="text-[#4A4E69] mr-2" />
                        <span className="text-xs text-[#9A8C98]">Reporting</span>
                     </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-20 z-30 p-4 bg-[#22223B] border border-[#4A4E69]/30 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#C9ADA7]" />
                  <div className="text-xs text-[#F2E9E4]">New Flow Published</div>
                </div>
              </motion.div>

           </div>
        </motion.div>
      </Section>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#9A8C98] flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={14} />
      </motion.div>
    </div>
  );
};