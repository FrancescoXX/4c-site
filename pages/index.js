//Components - these provide styling and layout for the page
import Layout from "../components/Layout";
import Hero from "../components/Hero";

//Content - this is the detail on the page
import content from "../content/homepage";

export default function Home() {
  //Set up our SEO for the page
  const seo = {
    metaTitle: "4C",
  };

  //Our page components - layout provides all the wrapping elements
  return (
    <Layout
      className="flex flex-col min-h-screen bg-orange-50 justify-center"
      seo={seo}
    >
      <Hero {...content.hero} />
      {/* Other components go here */}
    </Layout>
  );
}
