import Layout from "../components/Layout";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <Layout className="flex flex-col justify-start">
      <Faq />
    </Layout>
  );
}
