import Hero from '../components/Hero/Hero';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import { Layout } from '../layout/Layout';
import { Section, Structure } from '../styles/GlobalComponents';

const HomePage = () => {
  return (
    <Layout>
        <Structure>&lt;/html&gt;<br/></Structure>
        <Structure indent>&lt;body&gt;<br/><br/></Structure>
        <Section grid middle>
          <Hero />
          <BgAnimation />
        </Section>
        <Structure indent>&lt;/body&gt;<br/><br/></Structure>
        <Structure>&lt;/html&gt;</Structure>
    </Layout>
  );
};

export default HomePage;