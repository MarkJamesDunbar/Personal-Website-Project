import React from 'react';
import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import TextAnimation from '../../styles/GlobalComponents/TextAnimation';
import { LeftSection } from './TestStyles';
import {motion} from 'framer-motion';


const Test = () => (
  <Section contact row middle main indent nopaddingtop>
    <LeftSection indent>
      <Structure>&lt;h1&gt;</Structure>
      <SectionTitle center struct >
        Test Page!
      </SectionTitle>
      <Structure>&lt;/h1&gt; <br/> <br/></Structure>
      <Structure>&lt;p&gt;</Structure>
      
      <SectionText struct>
        TEST
        <br/>
        <br/>
        <TextAnimation/>
        <br/>
        <br/>
        TEST
        <br/>
        <br/>
      </SectionText>
      <br/>
      <Structure>&lt;/p&gt;</Structure>
    </LeftSection>

  </Section>
);

export default Test;