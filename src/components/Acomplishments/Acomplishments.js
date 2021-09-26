import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "720+", text: 'LeetCode Problems'},
  { number: "RANK 1045", text: 'Google KickStart Round B 2021', },
  { number: "SPECIALIST", text: 'CodeForces', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <SectionTitle main>Personnel Achievements</SectionTitle>
    <Boxes>
    {data.map((card,index)=> (
      <Box>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
