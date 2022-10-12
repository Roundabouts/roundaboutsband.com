import React from 'react';
import styled from 'styled-components';
import RoundaboutsLogo from '../Components/RoundaboutsLogo';
import SocialIcon from '../Components/Social/SocialIcon';
import VideoBackground from '../Components/VideBackground';

function MainScreen() {
  return (
    <Container>
      <VideoBackground />

      <Header></Header>

      <Content>
        <RoundaboutsLogo />
      </Content>

      <Footer>
        <SocialIcons>
          <SocialIcon
            name="facebook"
            url="https://www.facebook.com/roundaboutsband"
            icon="IoLogoFacebook"
          />
          <SocialIcon
            name="instagram"
            url="https://www.instagram.com/roundaboutsband"
            icon="IoLogoInstagram"
          />
          <SocialIcon
            name="tiktok"
            url="https://www.tiktok.com/@roundaboutsband"
            icon="IoLogoTiktok"
          />
          <SocialIcon
            name="youtbube"
            url="https://www.youtube.com/channel/UCbJAWKjqUS1ZxJYf7PMcemA"
            icon="IoLogoYoutube"
          />
        </SocialIcons>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`;

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

const SocialIcons = styled.div`
  display: flex;
`;

export default MainScreen;
