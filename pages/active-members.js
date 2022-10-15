import Layout from "../components/Layout";
import ActiveMembers from "../components/ActiveMembers";

export default function Home() {
  return (
    <Layout className="flex flex-col  items-center justify-center text-5xl">
      <ActiveMembers />
    </Layout>
  );
}
