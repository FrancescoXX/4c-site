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
        bigScreen:"1100px",
        laptop: "801px",
        medium:"450px",
        break: "500px",
        mobile: "300px",
      },
      fontFamily: {
        heading: [
          '"Red Hat Display"',
          '"Poppins"',
          ...defaultTheme.fontFamily.sans,
        ],
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        "3xl": "0 0 10px #0000006e",
      },
      maxWidth: {
        bodyContainer: "1300px",
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
