/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C9A84C",
        gold2: "#E8C97A",
        navy: "#0D1B2A",
        purple: "#2D2645",
        burgundy: "#6B2040",
        rose: "#A63255",
        cream: "#F5EDD8",
        dark: "#0a0806",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};