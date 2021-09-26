import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (

    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:9888869725">9888869725</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:abhishekbabbar1989@gmail.com">abhishekbabbar1989@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>First, Solve the Problem. Then Write the Code</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
            <SocialIcons href="https://github.com/babbar1989">
            <AiFillGithub size="2rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/abhishek_babbar17/">
              <AiFillInstagram size="2rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/abhishek-babbar-b51396191/">
              <AiFillLinkedin size="2rem"/>
            </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterWrapper>

  );
};

export default Footer;
