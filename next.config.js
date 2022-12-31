/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "cdn.discordapp.com"],
  },
  async redirects() {
    return [
      {
        source: "/join",
        destination: "https://discord.com/invite/TcmA2kbJeA",
        permanent: true,
      },
    ];
  },
};
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
module.exports = withPWA(nextConfig);
