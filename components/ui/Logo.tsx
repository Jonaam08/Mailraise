import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 100 60"
      className={`text-[#CFE0FF] ${className} transition-transform duration-500 group-hover:scale-110`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Layered chevrons + central diamond (matches provided mark) */}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* Outer */}
        <path d="M6 45 L50 10 L94 45" strokeWidth="4" opacity="0.9" />
        <path d="M6 15 L50 50 L94 15" strokeWidth="4" opacity="0.9" />

        {/* Mid */}
        <path d="M16 45 L50 18 L84 45" strokeWidth="3.2" opacity="0.55" />
        <path d="M16 15 L50 42 L84 15" strokeWidth="3.2" opacity="0.55" />

        {/* Inner */}
        <path d="M26 45 L50 26 L74 45" strokeWidth="2.6" opacity="0.35" />
        <path d="M26 15 L50 34 L74 15" strokeWidth="2.6" opacity="0.35" />

        {/* Center diamond */}
        <path d="M50 23 L60 30 L50 37 L40 30 Z" strokeWidth="3" opacity="0.8" />
      </g>
    </svg>
  );
};
