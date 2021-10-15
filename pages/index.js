// Components - these provide styling and layout for the page
import Layout from "../components/Layout";
import Hero from "../components/Hero";

// Content - this is the detail on the page
import content from "../content/homepage";

export default function Home() {
  // Our page components - layout provides all the wrapping elements
  return (
    <Layout className="flex flex-col justify-center bg-orange-50">
      <Hero {...content.hero} />
      {/* Other components go here */}
    </Layout>
  );
}
