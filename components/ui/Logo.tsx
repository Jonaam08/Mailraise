import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 100 70" 
      className={`${className} transition-transform duration-500 group-hover:scale-110`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Envelope Frame */}
      <rect 
        x="4" y="4" 
        width="92" height="62" 
        rx="10" 
        stroke="#F2E9E4" 
        strokeWidth="3.5" 
        className="opacity-90"
      />
      
      {/* The main 'M' Structure / Downward Flap */}
      <path 
        d="M4 4 L50 44 L96 4" 
        stroke="#F2E9E4" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Parallel Accent Lines - Left Side */}
      <path d="M4 25 L35 55" stroke="#F2E9E4" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
      <path d="M4 42 L22 60" stroke="#F2E9E4" strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />
      
      {/* Parallel Accent Lines - Right Side */}
      <path d="M96 25 L65 55" stroke="#F2E9E4" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
      <path d="M96 42 L78 60" stroke="#F2E9E4" strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />

      {/* The 'Raise' Peak (Central Accent) */}
      <path 
        d="M28 66 L50 36 L72 66" 
        stroke="#C9ADA7" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="drop-shadow-[0_0_8px_rgba(201,173,167,0.4)]"
      />
      
      {/* Internal Diamond Highlight */}
      <path 
        d="M50 36 L62 52 L50 64 L38 52 Z" 
        fill="#C9ADA7" 
        fillOpacity="0.1" 
      />
    </svg>
  );
};
