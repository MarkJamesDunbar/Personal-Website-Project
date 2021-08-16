import React from 'react';
import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { LeftSection, Anchor, Letter } from './HeroStyles';


const Hero = () => (
  <Section contact row middle main indent nopaddingtop>
    <LeftSection indent>
      <Structure>&lt;h1&gt;</Structure>
      <SectionTitle center struct >


        <span>
          <Letter>M</Letter>
          <Letter>e</Letter>
          <Letter>,</Letter>
        </span>

        <span> </span>

        <span>
          <Letter>M</Letter>
          <Letter>y</Letter>
          <Letter>s</Letter>
          <Letter>e</Letter>
          <Letter>l</Letter>
          <Letter>f</Letter>
        </span>

        <span> </span>

        <span>
          <Letter>+</Letter>
        </span>

        <span> </span>

        <span>
          <Letter>I</Letter>
          <Letter>.</Letter>
        </span>


         Me, Myself &&nbsp;I.  <br/>



      </SectionTitle>
      <br/>
      <Structure>&lt;/h1&gt; <br/> <br/></Structure>
      <Structure>&lt;p&gt;</Structure>
      <SectionText struct>
        I’m an aspiring Software Developer located in London, England. I have a serious passion for web design and creating intuitive, dynamic user experiences.
        <br/>
        <br/>
        A well-organised, independent individual with a passion for problem solving with a keen eye for detail. Fan of rock climbing, outdoor activities, and music.
        <br/>
        <br/>
        Interested in the entire development spectrum and working on new, ambitious projects with positive, driven people.
        <br/>
        <br/>


          <Anchor href='contact'>
            <span>
              <Letter>L</Letter>
              <Letter>e</Letter>
              <Letter>t</Letter>
              <Letter>'</Letter>
              <Letter>s </Letter>
            </span>

            <span> </span>

            <span>
              <Letter>w</Letter>
              <Letter>o</Letter>
              <Letter>r</Letter>
              <Letter>k </Letter>
            </span>

            <span> </span>

            <span>
              <Letter>t</Letter>
              <Letter>o</Letter>
              <Letter>g</Letter>
              <Letter>e</Letter>
              <Letter>t</Letter>
              <Letter>h</Letter>
              <Letter>e</Letter>
              <Letter>r</Letter>
              <Letter>!</Letter>
            </span>
          </Anchor>

      </SectionText>
      <br/>
      <Structure>&lt;/p&gt;</Structure>
    </LeftSection>

  </Section>
);

export default Hero;