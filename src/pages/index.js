import Layout from "components/Layout"
import Main from "components/Main"
import { main } from "data/homepage"
import { useRouter } from "next/router"
import React from "react"
import GoToTop from "components/GoToTop"

export default function Home() {
  const router = useRouter()

  if (typeof window !== "undefined") {
    if (router.pathname === "/") {
      localStorage.removeItem("active")
    }
  }

  return (
    <div>
      <Layout className="flex flex-col justify-center">
        <Main {...main} />
      </Layout>
      <GoToTop />
    </div>
  )
}
