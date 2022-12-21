import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import GoToTop from "../components/GoToTop";

const Projects = () => {
  return (
    <div>
      <Layout className="flex flex-col  items-center justify-center">
        <h1 className="headTitle mb-20 uppercase tracking-widest text-white">
          BLOG
        </h1>
        <BlogCard />
      </Layout>
      <GoToTop />
    </div>
  );
};

export default Projects;
