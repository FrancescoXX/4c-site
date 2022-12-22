import GoToTop from "../components/GoToTop";
import Layout from "../components/Layout";
import Title from "../components/Title";

const Projects = () => {
  return (
    <div>
      <Layout className="flex flex-col  items-center justify-center text-3xl ">
        <Title heading="New Activites Coming Soon ..." />
      </Layout>
      <GoToTop />
    </div>
  );
};

export default Projects;
