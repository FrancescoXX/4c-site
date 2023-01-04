import Layout from '../components/Layout';
import ActiveMembers from '../components/ActiveMembers';
import GoToTop from '../components/GoToTop';

export default function Home () {
  return (
    <Layout className="flex flex-col justify-start">
      <ActiveMembers />
      <GoToTop />
    </Layout>
  );
}
