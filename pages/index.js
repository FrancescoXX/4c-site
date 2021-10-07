// Components - these provide styling and layout for the page
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { NextSeo } from "next-seo";
import Head from "next/head";

// Content - this is the detail on the page
import content from "../content/homepage";

export default function Home() {
  // Our page components - layout provides all the wrapping elements
  return (
    <Layout className="flex flex-col justify-center min-h-screen overflow-hidden bg-orange-50">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/codegowdacloud/image/upload/v1632206291/logo_gsnxnf.jpg"
        />
      </Head>
      <Hero {...content.hero} />
      {/* Other components go here */}
      <NextSeo
        title="4C"
        description="The Cool Community For Content Creators"
        canonical="https://www.4c.rocks/"
        openGraph={{
          url: "https://www.4c.rocks/",
          title: "4C - Creator Community",
          description:
            "The Cool Community For Content Creators or 4C is a community where different content creator from every domain have come together to help each other and grow.",
          images: [
            {
              url: "/logo.jpg",
              width: 432,
              height: 432,
              alt: "4C",
              type: "image/jpeg",
            },
          ],
          site_name: "4C",
        }}
      />
    </Layout>
  );
}
