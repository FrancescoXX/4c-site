import Layout from "../components/Layout";
import Contributors from "../components/Contributors";

export default function Home() {
  return (
    <Layout className="flex flex-col justify-start bg-orange-50">
      <Contributors />
    </Layout>
  );
}
