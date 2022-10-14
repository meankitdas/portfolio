/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: ["Silkscreen", "sans-serif"],
        // code: "code",
        code: ["Source Code Pro", "monospace"],
      },
      screens: {
        xs: "480px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
