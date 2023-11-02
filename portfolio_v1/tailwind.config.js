/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        wiggle:{
          '0%,100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        fadeInUp:{
          'from': {
            transform: 'translateY(20px)',
            opacity:'0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity:'100',
          },
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.75 ease-in-out',
      },
    },
  },
  plugins: [],
};
