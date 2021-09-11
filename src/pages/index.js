import Home from '../components/Home/Home';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import { Layout } from '../layout/Layout';
import { Section, Structure, Box2, ScrollContainer } from '../styles/GlobalComponents';

const HomePage = () => {
  return (
    <Layout>
      <ScrollContainer>
        <Section nopadding nomargin grid middle paddingleft contact indentbase>
          <Box2>
            <Structure vindent>&lt;html&gt;<br/></Structure>
            <Structure indent>&lt;body&gt;<br/><br/></Structure>
            <Home />
            <Structure indent>&lt;/body&gt;<br/></Structure>
            <Structure>&lt;/html&gt;</Structure> 
          </Box2>
          
          <BgAnimation />
        </Section>
      </ScrollContainer>
    </Layout>
  );
};

export default HomePage;