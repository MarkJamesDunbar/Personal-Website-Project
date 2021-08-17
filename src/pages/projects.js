import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import { Structure, ScrollContainer, Section } from '../styles/GlobalComponents';

const ProjectsPage = () => {
  return (
    <Layout>
      <Section indentbase>
        <ScrollContainer>
            <Structure vindent>&lt;html&gt;<br/></Structure>
            <Structure indent>&lt;body&gt;<br/><br/></Structure>
            <Projects/>
            <Structure indent>&lt;/body&gt;<br/></Structure>
            <Structure vbindent>&lt;/html&gt;</Structure>
        </ScrollContainer>
      </Section>
    </Layout>
  );
};

export default ProjectsPage;