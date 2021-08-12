import React from 'react';
import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { LeftSection } from './ContactStyles';

const Contact = () => (
  <Section contact row middle main indent nopaddingtop>
    <LeftSection indent>
    <Structure>&lt;h1&gt;</Structure>
    <SectionTitle center struct >
        Contact me.  <br/>
    </SectionTitle>
    <br/>
    <Structure>&lt;/h1&gt; <br/> <br/></Structure>
    <Structure>&lt;form&gt;</Structure>
    <SectionText struct>
        form placeholder
        <br/>
        <br/>
        form placeholder
        <br/>
        <br/>
        form placeholder
    </SectionText>
    <br/>
    <Structure>&lt;/form&gt;</Structure>
    <br/>
    </LeftSection>

  </Section>
);

export default Contact;