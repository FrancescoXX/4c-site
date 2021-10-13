// Components - these provide styling and layout for the page
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Contributors from "../components/Contributors";

export default function Home() {
  // Our page components - layout provides all the wrapping elements
  return (
    <Layout className="flex flex-col justify-start w-full bg-orange-50">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/codegowdacloud/image/upload/v1632206291/logo_gsnxnf.jpg"
        />
      </Head>
      <NextSeo
        title="4C"
        description="The Cool Community For Content Creators"
        canonical="https://www.4c.rocks/"
        openGraph={{
          url: "https://www.4c.rocks/",
          title: "4C",
          description: "The Cool Community For Content Creators",
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

      <Contributors />
    </Layout>
  );
}
