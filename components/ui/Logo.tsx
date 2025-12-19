import React from 'react';

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  const basePath = import.meta.env.BASE_URL ?? "/";

  return (
    <img
      src={`${basePath}logo.svg`}
      alt="Mailraise logo"
      className={`${className} transition-transform duration-500 group-hover:scale-110 select-none`}
      loading="lazy"
    />
  );
};
