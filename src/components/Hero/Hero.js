import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection,Partition} from './HeroStyles';

const Hero = (props) => (
  <Section>
  <Partition>
    <LeftSection>
      <SectionTitle>
        Hey <br/> I'm Abhishek Babbar
      </SectionTitle>
      <SectionText>
        I'm App Developer, Programmer and SDE1 @ Urban Comapany Based in India.
      </SectionText>
      <a href="https://drive.google.com/file/d/1QrAN0mSlA9TLi10r1C9AiiacpgIU8lYq/view?usp=sharing">
        <Button >
          Resume
        </Button>
      </a>
    </LeftSection>

    <RightSection>
     <img src="https://i.ibb.co/kQbD8wk/client1.png" alt="client1" border="0"/>
    </RightSection>
    </Partition>
  </Section>
);

export default Hero;
