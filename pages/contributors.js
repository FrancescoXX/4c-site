import Layout from "../components/Layout";
import Contributors from "../components/Contributors";

export default function Home() {
  return (
    <Layout className="flex flex-col justify-start">
      <Contributors />
    </Layout>
  );
}
