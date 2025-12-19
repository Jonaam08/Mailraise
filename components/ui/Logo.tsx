import React from 'react';

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 500 350"
      className={`${className} transition-transform duration-500 group-hover:scale-110 select-none`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mailraise logo"
    >
      {/* Note: Colors adapted from brand palette so logo is visible on dark header */}

      {/* Side upper triangles (dark brand purple/blue) */}
      <polygon
        points="4,16 248,176 4,336"
        fill="#4A4E69"
      />
      <polygon
        points="496,16 252,176 496,336"
        fill="#4A4E69"
      />

      {/* Central diamond */}
      <polygon
        points="250,116 340,206 250,296 160,206"
        fill="#9A8C98"
      />

      {/* Inner dark chevron */}
      <path
        d="M4 84L250 260L496 84L496 132L250 308L4 132Z"
        fill="#22223B"
      />

      {/* Warm taupe chevron */}
      <path
        d="M4 144L250 300L496 144L496 196L250 340L4 196Z"
        fill="#C39F90"
      />

      {/* Light bottom triangle */}
      <path
        d="M36 344L250 190L464 344Z"
        fill="#F2E9E4"
      />

      {/* Envelope strokes (slightly off-white for contrast) */}
      <path
        d="M4 16L250 190L496 16"
        stroke="#F2E9E4"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      <path
        d="M4 336L250 190L496 336"
        stroke="#F2E9E4"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      <path
        d="M4 16L4 328L250 190L496 328L496 16"
        stroke="#F2E9E4"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    </svg>
  );
};
