import React from 'react';

import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row middle paddingleft>
    <LeftSection>
      <Structure>&lt;h1&gt;</Structure>
      <SectionTitle main center struct >
         Me, Myself &&nbsp;I.  <br/>
      </SectionTitle>
      <br/>
      <Structure>&lt;/h1&gt; <br/> <br/></Structure>
      <Structure>&lt;p&gt;</Structure>
      <SectionText struct>
        I’m a Web & Software Developer located in London, England. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        <br/>
        <br/>
        A well-organised person, problem solver, independent employee with high attention to detail. Fan of Rock Climbing, outdoor activities,  and English literature.
        <br/>
        <br/>
        Interested in the entire web-development spectrum and working on new, ambitious projects with positive, driven people.
      </SectionText>
      <br/>
      <Structure>&lt;/p&gt;</Structure>
    </LeftSection>
  </Section>
);

export default Hero;