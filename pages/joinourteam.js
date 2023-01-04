import Layout from '../components/Layout';
import JoinOurTeam from '../components/JoinOurTeam';
import GoToTop from '../components/GoToTop';

export default function joinOurTeam () {
  return (
    <Layout className="flex flex-col justify-center">
      <JoinOurTeam />
      <GoToTop />
    </Layout>
  );
}
