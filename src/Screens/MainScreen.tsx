import React from 'react';
import styled from 'styled-components';
import RoundaboutsLogo from '../Components/RoundaboutsLogo';
import VideoBackground from '../Components/VideBackground';

function MainScreen() {
  return (
    <Container>
      <VideoBackground />
      <Content>
        <RoundaboutsLogo />
      </Content>
    </Container>
  );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export default MainScreen;
