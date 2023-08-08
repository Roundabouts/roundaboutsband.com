import React from 'react';
import styled from 'styled-components';
import VideoBackground from '../Components/VideoBackground';
import AppContainer from '../Components/UI/AppContainer';
import { Event } from '../Services/ContentfulService';
import Gigs from '../Components/Gigs/Gigs';

interface EventsScreenProps {
  events: Array<Event>,
}

function EventsScreen({
  events = []
}: EventsScreenProps) {
  return (
    <AppContainer>
      <VideoBackground autoPlay={false} />

      <Header></Header>

      <Content>
        <Gigs events={events} />
      </Content>

      <Footer></Footer>
    </AppContainer>
  );
}

const Header = styled.div`
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default EventsScreen;
