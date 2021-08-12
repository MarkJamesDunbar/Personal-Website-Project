import Hero from '../components/Hero/Hero';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import { Layout } from '../layout/Layout';
import { Section, Structure } from '../styles/GlobalComponents';

const HomePage = () => {
  return (
    <Layout>
      <Section indentbase>
        <Structure vindent>&lt;html&gt;<br/></Structure>
        <Structure indent>&lt;body&gt;<br/><br/></Structure>
        <Section nopadding nomargin grid middle page indent>
          <Hero />
          <BgAnimation />
        </Section>
        <Structure indent>&lt;/body&gt;<br/></Structure>
        <Structure vbindent>&lt;/html&gt;</Structure>
      </Section>
    </Layout>
  );
};

export default HomePage;