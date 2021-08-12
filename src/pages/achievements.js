import Achievements from '../components/Achievements/Achievements';
import { Layout } from '../layout/Layout';
import { Structure, Section } from '../styles/GlobalComponents';

const AchievementsPage = () => {
  return (
    <Layout>
      <Section indentbase>
        <Structure vtindent>&lt;html&gt;<br/></Structure>
        <Structure indent>&lt;body&gt;<br/><br/></Structure>
        <Achievements/>
        <Structure indent>&lt;/body&gt;<br/></Structure>
        <Structure vbindent>&lt;/html&gt;</Structure>
        </Section>
    </Layout>
  );
};

export default AchievementsPage;