import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import format from 'date-fns/format';
import formatISO from 'date-fns/formatISO';
import { FormatUtils } from '../../Utils';
import { Event } from '../../Services/ContentfulService';

const item: Variants = {
  hidden: {
    y: '0.3em',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, opacity: { duration: 1.2 } },
  },
};

interface GigsProps {
  events: Array<Event>,
}

function Gigs({
  events = []
}: GigsProps) {
  return (
      <Content>
        <YearTitle>2023</YearTitle>
        {events.map((event, i) => (
          <Gig key={i}>
            <Date>{FormatUtils.formatIsoDate(event.date, 'd MMMM')}</Date>
            <Name>{event.title}</Name>
            <Location>{event.location}, {event.country}</Location>
          </Gig>
        ))}
      </Content>
  );
}

const YearTitle = styled.h1`
  align-self: center;;
  font-size: 6em;
  font-weight: 900;
  margin-bottom: 0.1em;
`

const Gig = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 4px;
  text-transform: uppercase;
  font-size: 1.5em;
  color: #637674;
  font-weight: 900;
`;

const Date = styled.div`
  flex: 3;
`;

const Name = styled.div`
  flex: 5;
  color: #FCD7AA;
  text-align: left;
`;
const Location = styled.div`
  flex: 3;
  text-align: right;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  max-width: 900px;
  flex-direction: column;;
`;


export default Gigs;
