
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Use HTMLMotionProps instead of React.ButtonHTMLAttributes to avoid type conflicts with motion.button event handlers
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, className, ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";
  
  const variants = {
    // Primary: White/Brand Light background, Dark text
    primary: "bg-[#F2E9E4] text-[#22223B] hover:bg-white focus:ring-[#F2E9E4]",
    // Secondary: Dark background, light text, border
    secondary: "bg-surface border border-neutral-800 text-[#F2E9E4] hover:border-[#4A4E69] hover:bg-[#22223B] focus:ring-[#4A4E69]",
    ghost: "bg-transparent text-[#9A8C98] hover:text-[#F2E9E4] hover:bg-[#F2E9E4]/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {/* Button Glow Effect for Primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#C9ADA7]"></span>
      )}
      
      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      
      {/* Shine Effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />
      )}
    </motion.button>
  );
};
