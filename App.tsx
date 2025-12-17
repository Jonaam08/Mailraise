import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { WhyEmail } from './components/WhyEmail';
import { ValueProps } from './components/ValueProps';
import { Process } from './components/Process';
import { Proof } from './components/Proof';
import { FooterCTA } from './components/FooterCTA';
import { Infrastructure } from './components/Infrastructure';
import { FAQ } from './components/FAQ';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Subtle cursor follower effect for the whole page
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <Layout>
      {/* Global Cursor Spotlight - using Brand Tan/Rose for warmth */}
      <div 
        className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(201,173,167,0.05), transparent 40%)`
        }}
      />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Infrastructure Section */}
      <Infrastructure />
      
      {/* 3. Why Email */}
      <WhyEmail />
      
      {/* 4. Proof */}
      <Proof />
      
      {/* 5. Process (The AIR Process) */}
      <Process />
      
      {/* 6. ValueProps */}
      <ValueProps />

      {/* 7. Footer CTA (Moved up) */}
      <FooterCTA />

      {/* 8. FAQ Section (Moved down below CTA) */}
      <FAQ />
    </Layout>
  );
}

export default App;