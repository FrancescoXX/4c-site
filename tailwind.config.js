const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        laptop: "801px",
        break: "500px",
      },
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
  corePlugins: {
    accessibility: false,
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".sr-only": {
          border: "0",
          padding: "0",
          margin: "0",

          position: "absolute !important",
          height: "1px",
          width: "1px",
          overflow: "hidden",
          clip: "rect(1px 1px 1px 1px)",
          "clip-path": "inset(50%)",
          "white-space": "nowrap",
        },
      });
    }),
    require("@tailwindcss/line-clamp"),
  ],
};