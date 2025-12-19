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
      {/* Outer envelope / card */}
      <rect
        x="4"
        y="4"
        width="492"
        height="342"
        rx="32"
        fill="#191A31"
      />

      {/* Side upper triangles */}
      <polygon
        points="4,4 248,176 4,332"
        fill="#474C6B"
      />
      <polygon
        points="496,4 252,176 496,332"
        fill="#474C6B"
      />

      {/* Central diamond */}
      <polygon
        points="250,110 340,200 250,290 160,200"
        fill="#9A8CA1"
      />

      {/* Inner dark chevron */}
      <path
        d="M4 80L250 260L496 80L496 130L250 310L4 130Z"
        fill="#2D3048"
      />

      {/* Warm taupe chevron */}
      <path
        d="M4 140L250 300L496 140L496 190L250 340L4 190Z"
        fill="#C39F90"
      />

      {/* Light bottom triangle */}
      <path
        d="M36 348L250 190L464 348Z"
        fill="#F2E9E4"
      />

      {/* Black envelope strokes */}
      <path
        d="M4 4L250 190L496 4"
        stroke="#000000"
        strokeWidth="16"
        strokeLinejoin="round"
      />
      <path
        d="M4 348L250 190L496 348"
        stroke="#000000"
        strokeWidth="16"
        strokeLinejoin="round"
      />
      <path
        d="M4 4L4 332L250 190L496 332L496 4"
        stroke="#000000"
        strokeWidth="16"
        strokeLinejoin="round"
      />
    </svg>
  );
};
