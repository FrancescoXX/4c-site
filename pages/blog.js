import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";

const Projects = () => {
  return (
    <Layout className="flex flex-col  items-center justify-center text-5xl ">
      <h1 className="mb-20 tracking-widest text-white uppercase">BLOG</h1>
      <BlogCard />
    </Layout>
  );
};

export default Projects;
