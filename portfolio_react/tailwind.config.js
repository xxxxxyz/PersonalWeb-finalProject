/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],

  // daisyUI config
  daisyui: {
    themes: ["light", "dark", "black"],
  },
};
