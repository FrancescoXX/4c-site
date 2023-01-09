/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "user-images.githubusercontent.com", "cdn.discordapp.com", "i.ibb.co", "i.postimg.cc", "images2.imgbox.com", "raw.githubusercontent.com", "img.youtube.com"],
    formats: ["image/webp"],
    unoptimized: process.env.NODE_ENV === "development",
  },
  async redirects() {
    return [
      {
        destination: "https://discord.com/invite/TcmA2kbJeA",
        source: "/join",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
