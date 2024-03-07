import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import format from 'date-fns/format';
import formatISO from 'date-fns/formatISO';
import { FormatUtils } from '../../Utils';
import { Event } from '../../Services/ContentfulService';
import { FaGlobeAmericas, FaTicketAlt } from "react-icons/fa";

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
  events: Array<Event>;
  hideLinks?: boolean;
}

function Gigs({
  events = [],
  hideLinks = false,
}: GigsProps) {
  return (
      <Content>
        {events.map((event, i) => (
          <Gig key={i}>
            <Date>
              <DateWrapper>
                {FormatUtils.formatIsoDate(event.date, 'd MMMM')}
              </DateWrapper>
              <Note>{FormatUtils.formatIsoDate(event.date, 'EEEE')}</Note>
            </Date>
            <Middle>
              <NameWrapper>
                <Name>{event.title}</Name>
                {event.soldOut && (
                  <SoldOutLabel>Sold out</SoldOutLabel>
                )}
              </NameWrapper>
              <Note>{event.note}</Note>
            </Middle>
            <Location>{event.location}, {event.country}</Location>

            {hideLinks !== true && (
              <Links>
                <Link target="_blank" href={event.url ?? undefined} disabled={!event.url}>
                  <FaGlobeAmericas title="Website link" />
                </Link>
                <Link target="_blank" href={event.ticketsUrl ?? undefined} disabled={!event.ticketsUrl}>
                  <FaTicketAlt title="Tickets link" />
                </Link>
              </Links>
            )}
          </Gig>
        ))}
      </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;;
`;

const Gig = styled.div`
  display: flex;
  margin: 4px;
  min-height: 1.7em;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;;
  text-transform: uppercase;
  font-size: 1.3em;
  color: #637674;
  font-weight: 900;
`;

const Date = styled.div`
  flex: 2;
  color: #96aeac;
  text-align: right;
  padding-right: 1em;
`;

const DateWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  text-align: right;
`;

const Middle = styled.div`
  flex: 5;
`;

const Links = styled.div`
  margin-top: 0.2em;
  margin-left: 1em;
  font-size: 0.8em;
  color: #FFFFFFEE;

  * {
    margin: 0 0.16em;
  }
`;

const Link = styled.a<{ disabled?: boolean }>`
  opacity: ${props => props.disabled ? 0.2 : 1};
`;

const NameWrapper = styled.div`
  display: flex;;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.span`
  color: #FCD7AA;
  text-align: left;
`;

const SoldOutLabel = styled.div`
  margin-left: 0.6em;
  border-radius: 3px;
  border: 1px solid #F23F0D;
  padding: 0.2em 0.4em;
  font-size: 0.5em;
  text-transform: uppercase;;
  color: #F23F0D;
  opacity: 0.8;
`;


const Note = styled.span`
  display: block;
  font-size: 0.5em;
  color: #FFFFFF;
  opacity: 0.4;
  font-weight: normal;
`;

const Location = styled.div`
  flex: 3;
  text-align: right;
`;



export default Gigs;
