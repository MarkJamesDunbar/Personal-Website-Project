import Achievements from '../components/Achievements/Achievements';
import { Layout } from '../layout/Layout';
import { Structure } from '../styles/GlobalComponents';

const AchievementsPage = () => {
  return (
    <Layout>
        <Structure>&lt;html&gt;<br/></Structure>
        <Structure indent>&lt;body&gt;<br/><br/></Structure>
        <Achievements/>
        <Structure indent>&lt;/body&gt;<br/></Structure>
        <Structure>&lt;/html&gt;</Structure>
    </Layout>
  );
};

export default AchievementsPage;