import React from 'react';

import { Section, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { FooterWrapper } from '../Footer/FooterStyles';
import { Box, Boxes, BoxNum, BoxText } from './AchievementsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section nopadding>
    <FooterWrapper>
      <Structure indent2>&lt;h1&gt;</Structure>
      <SectionTitle main> Personal Achievements. </SectionTitle>
      <Structure indent2>&lt;/h1&gt;</Structure>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </FooterWrapper> 
  </Section>
  
);

export default Acomplishments;