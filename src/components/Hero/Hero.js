import React from 'react';

import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding middle>
    <LeftSection>
      <Structure>&lt;h1&gt;</Structure>
      <SectionTitle main center struct>
        Me, Myself & I <br/>
        My Personal Portfolio
      </SectionTitle>
      <Structure>&lt;/h1&gt; <br/> <br/></Structure>
      <Structure>&lt;p&gt;</Structure>
      <SectionText struct>
        I'm a blah blah blah developer
      </SectionText>
      <Structure>&lt;/p&gt;</Structure>
    </LeftSection>
  </Section>
);

export default Hero;