/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["gotham", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#FCAB3F",
          200: "#FDC963",
          300: "#4D4D4D",
          400: "#FFFFFF",
        },
        secondary: {
          100: "#A1D2CE",
          200: "#F49897",
          300: "#E4E4E4",
          400: "#FEF2F1",
        },
      },
    },
  },
  plugins: [],
};
