const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
