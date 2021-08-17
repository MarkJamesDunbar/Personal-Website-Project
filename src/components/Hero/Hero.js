import React from 'react';
import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { LeftSection, Anchor } from './HeroStyles';
import {motion} from 'framer-motion';


const Hero = () => (
  <Section contact row middle main indent nopaddingtop>
    <LeftSection indent>
      <Structure>&lt;h1&gt;</Structure>
      <SectionTitle center struct >
        Me, Myself&nbsp;<br/> & I.
      </SectionTitle>
      <Structure>&lt;/h1&gt; <br/><br/><br/><br/></Structure>
      <Structure>&lt;p&gt;</Structure>
      <SectionText struct>
        I’m an aspiring Software Developer located in London, England. I have a serious passion for web design and creating intuitive, dynamic user experiences.
        <br/>
        <br/>
        A well-organised, independent individual with a passion for problem solving, and a keen eye for detail. Fan of rock climbing, outdoor activities, and music.
        <br/>
        <br/>
        Interested in the entire web development spectrum and working on new, ambitious projects with positive, driven people.
        <br/>
        Sound interesting?
        <br/>
        <br/>
        <Anchor href='contact'>
          Let's work together
        </Anchor>

      </SectionText>
      <br/>
      <Structure>&lt;/p&gt;</Structure>
    </LeftSection>

  </Section>
);

export default Hero;