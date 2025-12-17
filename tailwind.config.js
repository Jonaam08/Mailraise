/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        border: '#333333',
        primary: '#F2E9E4', // Off-white
        muted: '#9A8C98', // Muted Purple/Grey
        brand: {
          darkest: '#22223B', // Dark Blue/Purple
          dark: '#4A4E69', // Desaturated Purple/Blue
          gray: '#9A8C98', // Muted Purple/Grey
          tan: '#C9ADA7', // Warm Taupe/Rose
          light: '#F2E9E4', // Off-white/Beige
        },
      },
      animation: {
        'glow-line': 'glow-line 3s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        'glow-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};


