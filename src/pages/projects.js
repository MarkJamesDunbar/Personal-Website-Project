import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import { Structure } from '../styles/GlobalComponents';

const ProjectsPage = () => {
  return (
    <Layout>
        <Structure>&lt;/html&gt;<br/></Structure>
        <Structure indent>&lt;body&gt;<br/><br/></Structure>
        <Projects/>
        <Structure>&lt;/html&gt;</Structure>
    </Layout>
  );
};

export default ProjectsPage;