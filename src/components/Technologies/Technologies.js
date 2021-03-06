import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've been working with Modern Technology To develop My Apps. I Have a Great Hand on Problem Solving Skills.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>Front End
          <ListParagraph>
            I Use XML as a Framework To create Unique UI For my Applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>Back End
          <ListParagraph>
            Worked With FireBase Database to manage the backend of my applications. 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>Problem Solving
          <ListParagraph>
            LeetCode | 3.5 Stars <em>(750+ Ques)</em> <br/>
            CodeForces | Specialist <br/><em>(Max Rating 1507)</em><br/>
            Google Kickstart Round B <br/><em>(Rank 1045)</em>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
