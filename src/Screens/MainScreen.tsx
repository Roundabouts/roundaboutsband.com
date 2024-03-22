import React from 'react';
import styled from 'styled-components';
import AppContainer from '../Components/UI/AppContainer';
import LandingImage from '../Components/LandingImage';
import Gigs from '../Components/Gigs/Gigs';
import { EventUtils } from '../Utils/EventUtils';
import { Vignette } from '../Components/UI/Vignette';
import Header from '../Components/Header';
import { Event } from '../Services/ContentfulService';
import dynamic from 'next/dynamic';
import Footer from '../Components/Footer';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface MainScreenProps {
  events: Array<Event>,
}

function MainScreen({
  events = []
}: MainScreenProps) {
  const futureEvents = events
    .filter(event => EventUtils.isFutureEvent(event))
    // .slice(0, 8);

  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  return (
    <AppContainer>
      <Vignette />
      <Header currentPage="home" />

      <Content>
        <LandingImage
          src="/images/landing/outta-your-mind.jpg"
          alt="Outta Your Mind band photo"
          width={2000}
          height={1334}
        />
      </Content>

      <Block>
        <GigsHeading>Upcoming gigs</GigsHeading>
        <Gigs events={futureEvents} />
      </Block>

      <VideoBlock>
        <GigsHeading>Outta Your Mind</GigsHeading>
        <VideoPlayer
          url="https://youtu.be/IVP-hu2gMZM?si=VptHvr3YzIdhjTIo?rel=0"
          width="100%"
          height={screenWidth > 800
            ? 500
            : 300}
          controls={true}
        />
      </VideoBlock>

      <Footer />
    </AppContainer>
  );
}

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  position: relative;
  width: 100%;
  max-width: 980px;
  display: flex;
  padding: 4em 0;
  flex: 1;
  flex-direction: column;
`;

const VideoBlock = styled(Block)`
  margin: 4em 0;
  max-width: 100%;
  background-color: #00000055;
  align-items: center;
  justify-content: center;;
  padding: 0;
`;

const VideoPlayer = styled(ReactPlayer)`
    width: 100%;
    max-width: 980px;
`;

const GigsHeading = styled.h1`
  position: absolute;
  top: -1.2em;
  padding: 0.5em 0.6em 0.2em;
  background-color: #EF1E66;
  border-bottom: 0.1em solid yellow;
  margin-left: 2em;

  font-size: 2em;
  line-height: 1em;
  /* text-shadow: 0.4rem 0.2rem 1rem #00000099; */
  text-transform: uppercase;;
  transform: rotate(-2deg);
  display: none;

`;


export default MainScreen;
