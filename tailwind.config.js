const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...colors },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
