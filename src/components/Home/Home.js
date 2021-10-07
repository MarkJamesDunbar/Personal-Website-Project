import React from 'react';
import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { LeftSection, Anchor, Button } from './HomeStyles';
import {motion} from 'framer-motion';


const Home = () => (
  <Section contact row middle main indent nopaddingtop>
    <LeftSection indent>
      <Structure>&lt;h1&gt;</Structure>
      <SectionTitle center struct >
        Me, Myself&nbsp;<br/> & I&nbsp;
      </SectionTitle>
      <Structure>&lt;/h1&gt; <br/><br/><br/><br/></Structure>
      <Structure>&lt;p&gt;</Structure>
      <SectionText struct>
        I’m an aspiring Data Scientist located in London, England. I have a serious passion for problem solving & data-driven solutions.
        <br/>
        <br/>
        As a well-organised, independent individual with a keen eye for detail, I'm always looking for new ways to maximise my insight and experience.
        <br/>
        <br/>
        With strong interests in the entire data science spectrum, and working on challenging, ambitious projects with positive, driven people.
        <br/>
        <br/>
        Sound interesting?
        <br/>
        <Anchor href='contact'>
          Let's work together
        </Anchor>
        <Button>Get in touch</Button>

      </SectionText>
      <br/>
      <Structure>&lt;/p&gt;</Structure>
      <br/>
    </LeftSection>

  </Section>
);

export default Home;