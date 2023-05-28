import Blogs from "components/blog-posts"
import CommunityPartners from "components/CommunityPartners"
import Faq from "components/faq"
import GetActivities from "components/GetActivities"
import GetVideos from "components/GetVideos"
import Layout from "components/Layout"
import Main from "components/Main"
import { main } from "data/homepage"
import { useRouter } from "next/router"
import React from "react"

export default function Home() {
  const router = useRouter()

  if (typeof window !== "undefined") {
    if (router.pathname === "/") {
      localStorage.removeItem("active")
    }
  }
  return (
    <div>
      <Layout className="flex flex-col justify-center mt-[13rem] md:mt-[5rem]">
        <Main {...main} />
        <div className="flex flex-col gap-32">
          <GetActivities />
          <GetVideos />
          <Blogs />
          <Faq />
        </div>
        <CommunityPartners />
      </Layout>
    </div>
  )
}
