import Layout from "../components/Layout";
import Main from "../components/Main";
import content from "../content/homepage";

export default function Home() {
  return (
    <Layout className="flex flex-col justify-center bg-orange-50">
      <Main {...content.main} />
    </Layout>
  );
}
