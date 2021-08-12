import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Structure, Section } from '../styles/GlobalComponents';

const TechPage = () => {
  return (
    <Layout>
      <Section indentbase>
        <Structure vindent>&lt;html&gt;<br/></Structure>
        <Structure indent>&lt;body&gt;<br/><br/></Structure>
        <Technologies/>
        <Structure indent>&lt;/body&gt;<br/></Structure>
        <Structure vbindent>&lt;/html&gt;</Structure>
      </Section>
    </Layout>
  );
};

export default TechPage;