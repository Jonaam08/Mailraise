import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      ></div>

      {/* Top Light Beam - Using Brand Dark/Purple for atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#4A4E69]/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
    </div>
  );
};