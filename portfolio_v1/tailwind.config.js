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
            '--webkit0transform': 'translateY(50px)',
            transform: 'translateY(50px)',
            opacity:'0',
          },
          'to': {
            '--webkit0transform': 'translateY(0)',
            transform: 'translateY(0)',
            opacity:'1',
          },
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.75s ease-in-out',
      },
    },
  },
  plugins: [],
};

