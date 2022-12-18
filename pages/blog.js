import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import GoToTop from "../components/GoToTop";

const Projects = () => {
  return (
    <div>
      <Layout className="flex flex-col  items-center justify-center text-5xl ">
        <h1 className="mb-20 tracking-widest text-white uppercase">BLOG</h1>
        <BlogCard />
      </Layout>
      <GoToTop />
    </div>
  );
};

export default Projects;
