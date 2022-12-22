import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import GoToTop from "../components/GoToTop";
import Title from "../components/Title";

const Projects = () => {
  return (
    <div>
      <Layout className="flex flex-col  items-center justify-center">
        <Title heading="Blogs" />
        <BlogCard />
      </Layout>
      <GoToTop />
    </div>
  );
};

export default Projects;
