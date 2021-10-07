import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionText, SectionTitle, Structure } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" nopaddingtop>
    <Structure>&lt;h1&gt;</Structure>
      <SectionTitle struct>Technologies&nbsp;</SectionTitle>
    <Structure>&lt;/h1&gt;</Structure>
    <Structure>&lt;p&gt;</Structure>
      <SectionText struct>
        I've worked with a range of techologies in the web development world. From Back-End To Design...
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
            React.js
            <br/>
            Bootstrap
            <br/>
            CSS 
            <br/>
            Html 5
            <br/>
            
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
            
            NodeJS
            <br/>
            Flask
            <br/>
            NextJS
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
            Apache Airflow
            <br/>
            SQL
            <br/>
            GraphQL


          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
