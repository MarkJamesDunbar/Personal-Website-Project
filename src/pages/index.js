import Accomplishments from '../components/Achievements/Achievements';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, Structure } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
        <Structure>&lt;html&gt;<br/></Structure>
        <Structure indent>&lt;body&gt;<br/><br/></Structure>


        <Section grid middle>
          <Hero />
          <BgAnimation />
        </Section>

        <Projects />

        <Technologies />

        <Timeline />

        <Accomplishments />

        <Structure>&lt;/html&gt;</Structure>
    </Layout>
  );
};

export default Home;
