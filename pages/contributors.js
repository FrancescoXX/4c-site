// Components - these provide styling and layout for the page
import Layout from "../components/Layout";
import Contributors from "../components/Contributors";

export default function Home() {
  // Our page components - layout provides all the wrapping elements
  return (
    <Layout className="flex flex-col justify-start w-full bg-orange-50">
      <Contributors />
    </Layout>
  );
}
