import React from 'react';
import { GridBackground } from './ui/GridBackground';
import { Logo } from './ui/Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-[#F2E9E4] font-sans selection:bg-[#C9ADA7]/30 selection:text-[#F2E9E4]">
      <GridBackground />
      
      {/* Simple Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Logo className="w-9 h-9" />
            <span className="font-bold tracking-tight text-xl text-[#F2E9E4] group-hover:text-[#C9ADA7] transition-colors duration-300">Mailraise</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-[#9A8C98] font-medium">
            <a href="#why-email" className="hover:text-[#F2E9E4] transition-colors">Why Email?</a>
            <a href="#process" className="hover:text-[#F2E9E4] transition-colors">The AIR Process</a>
            <a href="#work" className="hover:text-[#F2E9E4] transition-colors">Our Promise</a>
          </div>
          <a
            href="#audit"
            className="text-sm font-medium bg-[#22223B] hover:bg-[#4A4E69] px-4 py-2 rounded-md transition-colors border border-white/5 text-[#C9ADA7] hover:text-[#F2E9E4]"
          >
            Get Audit
          </a>
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer className="border-t border-white/10 bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[#4A4E69] text-sm">
           <div className="flex items-center gap-2">
             <Logo className="w-5 h-5 opacity-50" />
             <p>© 2025 Mailraise Inc.</p>
           </div>
           <div className="flex gap-6">
             <a href="#" className="hover:text-[#F2E9E4] transition-colors">Twitter</a>
             <a href="#" className="hover:text-[#F2E9E4] transition-colors">LinkedIn</a>
           </div>
        </div>
      </footer>
    </div>
  );
};
