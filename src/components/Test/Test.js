import React from 'react';
import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { LeftSection } from './TestStyles';
import { options } from '../../constants/constants';


const Test = () => (
  <Section contact row middle main indent nopaddingtop>
    <LeftSection indent>
      <Structure>&lt;h1&gt;</Structure>
      <SectionTitle center struct >
         TESTPAGE.  <br/>
      </SectionTitle>
      <br/>
      <Structure>&lt;/h1&gt; <br/> <br/></Structure>
      <Structure>&lt;p&gt;</Structure>
      <SectionText struct>
        TEST
        <br/>
        <br/>
        TEST
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