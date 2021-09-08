const defaultTheme = require("tailwindcss/defaultTheme");
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
    extend: {
      fontFamily: {
        heading: [
          '"Red Hat Display"',
          '"Poppins"',
          ...defaultTheme.fontFamily.sans,
        ],
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
