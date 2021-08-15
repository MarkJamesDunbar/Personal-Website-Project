import Test from '../components/Test/Test';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import { Layout } from '../layout/Layout';
import { Section, Structure, Box2 } from '../styles/GlobalComponents';
import { options } from '../constants/constants';
//import CanvasJSReact from '../assets/canvasjs.react';
// var CanvasJSReact = require('../assets/canvasjs.react');
// var  CanvasJS = CanvasJSReact.CanvasJS;
// var  CanvasJSChart = CanvasJSReact.CanvasJSChart;
// const StockChart = dynamic(() => import("./Chart/StockChart"), { ssr: false });




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
        


      </Section>
    </Layout>
  );
};

export default TestPage;