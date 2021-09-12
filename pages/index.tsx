import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import { SeoProps } from "../components/SEO";
import content from "../content/homepage";

const seo: SeoProps = {
    metaTitle: "4C",
  };

export default function Home(): ReactElement {
  //Our page components - layout provides all the wrapping elements
  return (
    <Layout
      className="flex flex-col justify-center min-h-screen bg-orange-50"
      seo={seo}
    >
      <Hero {...content.hero} />
      {/* Other components go here */}
    </Layout>
  );
}
