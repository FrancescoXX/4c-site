// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily: _fontFamily } = require("tailwindcss/defaultTheme")

/**
 * @type {import("tailwindcss").Config}
 */

const tailwindConfig = {
  content: [
    "./**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        bigScreen: "1100px",
        laptop: "801px",
        medium: "450px",
        break: "500px",
        mobile: "300px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ..._fontFamily.sans],
      },
      dropShadow: {
        "3xl": "0 0 10px #0000006e",
      },
      maxWidth: {
        bodyContainer: "1300px",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}

module.exports = tailwindConfig
