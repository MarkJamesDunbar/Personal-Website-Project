import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { Section, Structure, Box2 } from '../styles/GlobalComponents';
import {GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return ( <GoogleMap defaultZoom={10} defaultCenter={{ lat: 51.507351, lng: -0.127758 }} />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const ContactPage = () => {
  return (
    <Layout>

        <Section nopadding nomargin grid middle paddingleft>
          <Box2>
           <Structure>&lt;html&gt;<br/></Structure>
           <Structure indent>&lt;body&gt;<br/><br/></Structure>
           <Contact />
          </Box2>

          <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
          loadingElement={<div style={{height: '100%'}} />}
          containerElement={<div style={{height: '100%'}} />}
          mapElement={<div style={{height: '100%'}} />}
          />
        </Section>
        <Structure indent>&lt;/body&gt;<br/></Structure>
        <Structure>&lt;/html&gt;</Structure>

    </Layout>
  );
};

export default ContactPage;