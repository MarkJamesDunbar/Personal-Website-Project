import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle>
          <LinkItem href="tel:+44 7913716076">+44 7913716076</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Email </LinkTitle>
          <LinkItem href="mailto:marjamdun@hotmail.co.uk">
            marjamdun@hotmail.co.uk
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> One project at a time . . . </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/MerkuMerku">
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/mark-dunbar-17a426152/">
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/merkumerk/">
            <AiFillInstagram size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
