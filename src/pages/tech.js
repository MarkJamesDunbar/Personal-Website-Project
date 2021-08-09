import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Structure } from '../styles/GlobalComponents';

const TechPage = () => {
  return (
    <Layout>
        <Structure>&lt;html&gt;<br/></Structure>
        <Structure indent>&lt;body&gt;<br/><br/></Structure>
        <Technologies/>
        <Structure indent>&lt;/body&gt;<br/></Structure>
        <Structure>&lt;/html&gt;</Structure>
    </Layout>
  );
};

export default TechPage;