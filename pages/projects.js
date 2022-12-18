import Layout from "../components/Layout";
import GetProjects from "../components/GetProjects";
import GoToTop from "../components/GoToTop";

export default function joinOurTeam() {
  return (
    <Layout className="flex flex-col justify-center">
      <GetProjects />
      <GoToTop />
    </Layout>
  );
}
