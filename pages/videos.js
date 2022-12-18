import Layout from "../components/Layout";
import GetVideos from "../components/GetVideos";
import GoToTop from "../components/GoToTop";

const Videos = () => {
  return (
    <Layout className="flex flex-col justify-center">
      <GetVideos />
      <GoToTop />
    </Layout>
  );
};

export default Videos;
