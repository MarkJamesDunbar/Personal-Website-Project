import React from 'react';
import { Section, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AchievementsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section nopaddingtop>
      <Structure>&lt;h1&gt;</Structure>
      <SectionTitle main struct> Personal <br/> Achievements. </SectionTitle>
      <Structure>&lt;/h1&gt;</Structure>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
  </Section>
  
);

export default Acomplishments;