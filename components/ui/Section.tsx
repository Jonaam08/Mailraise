import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </section>
  );
};