import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 112 76"
      className={`${className} transition-transform duration-500 group-hover:scale-110`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Monochrome mark (inherits parent text color) */}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* Outer chevrons */}
        <path d="M6 44 L56 6 L106 44" strokeWidth="6" opacity="0.92" />
        <path d="M6 32 L56 70 L106 32" strokeWidth="6" opacity="0.92" />

        {/* Middle chevrons */}
        <path d="M18 44 L56 18 L94 44" strokeWidth="5" opacity="0.62" />
        <path d="M18 32 L56 58 L94 32" strokeWidth="5" opacity="0.62" />

        {/* Inner chevrons */}
        <path d="M30 44 L56 30 L82 44" strokeWidth="4" opacity="0.42" />
        <path d="M30 32 L56 46 L82 32" strokeWidth="4" opacity="0.42" />

        {/* Center diamond */}
        <path d="M56 24 L68 38 L56 52 L44 38 Z" strokeWidth="6" opacity="0.85" />
      </g>
    </svg>
  );
};
