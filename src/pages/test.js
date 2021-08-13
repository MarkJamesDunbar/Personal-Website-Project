import Test from '../components/Test/Test';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import { Layout } from '../layout/Layout';
import { Section, Structure, Box2 } from '../styles/GlobalComponents';
import { options } from '../constants/constants';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var  CanvasJSChart = CanvasJSReact.CanvasJSChart;


const TestPage = () => {
  return (
    <Layout>

      <Section nopadding nomargin grid middle paddingleft contact indentbase>
        <Box2>
           <Structure vindent>&lt;html&gt;<br/></Structure>
           <Structure indent>&lt;body&gt;<br/><br/></Structure>
           <Test />
           <Structure indent>&lt;/body&gt;<br/></Structure>
           <Structure>&lt;/html&gt;</Structure> 
        </Box2>
        
        <CanvasJSChart options = {options}/>

      </Section>
    </Layout>
  );
};

export default TestPage;