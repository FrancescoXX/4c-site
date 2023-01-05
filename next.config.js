/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "user-images.githubusercontent.com", "cdn.discordapp.com", "i.ibb.co", "i.postimg.cc", "images2.imgbox.com", "raw.githubusercontent.com", "img.youtube.com"],
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
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          subsets: ["latin"],
          display: "swap",
        },
      },
    ],
  },
}

module.exports = nextConfig
