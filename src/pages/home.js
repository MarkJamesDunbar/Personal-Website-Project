import Hero from '../components/Hero/Hero';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import { Layout } from '../layout/Layout';
import { Section, Structure, Box2 } from '../styles/GlobalComponents';

const HomePage = () => {
  return (
    <Layout>

      <Section nopadding nomargin grid middle paddingleft contact indentbase>
        <Box2>
           <Structure vindent>&lt;html&gt;<br/></Structure>
           <Structure indent>&lt;body&gt;<br/><br/></Structure>
           <Hero />
           <Structure indent>&lt;/body&gt;<br/></Structure>
           <Structure>&lt;/html&gt;</Structure> 
        </Box2>
        
        <BgAnimation />

      </Section>
    </Layout>
  );
};

export default HomePage;