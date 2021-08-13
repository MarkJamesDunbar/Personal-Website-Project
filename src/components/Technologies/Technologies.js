import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" nopaddingtop>
    <Structure>&lt;h1&gt;</Structure>
      <SectionTitle main struct>Technologies.</SectionTitle>
    <Structure>&lt;/h1&gt;</Structure>
    <Structure>&lt;p&gt;</Structure>
      <SectionText struct>
        I've worked with a range of techologies in the web development world. From Back-End To Design
      </SectionText>
    <Structure>&lt;/p&gt;</Structure>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js
            Flask
            Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>
            Data Handling
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
