import "styles/global.css"
import React, { useEffect } from "react"
import Head from "next/head"
import { AnimatePresence } from "framer-motion"
import { Poppins, Red_Hat_Display as RedHatDisplay } from "@next/font/google"
import pages from "data/navbar"
import GoToTop from "components/GoToTop"

const poppins = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
})

const redHatDisplay = RedHatDisplay({
  weight: ["700"],
  variable: "--font-redhat",
  subsets: ["latin"],
  display: "swap",
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const preloads = [
      ...pages.map((page) => page.href),
      "/",
    ]

    preloads.forEach((href) => {
      const link = document.createElement("link")
      link.rel = "prefetch"
      link.href = href
      document.head.appendChild(link)
    })
  })

  return (
    <div className={`${poppins.variable} ${redHatDisplay.variable} font-sans`}>
      <Head>
        <meta
          name="description"
          content="4C: The Cool Community for Content Creators"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <GoToTop/>
    </div>
  )
}
