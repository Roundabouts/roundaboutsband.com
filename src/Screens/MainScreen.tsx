import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import SocialIcon from '../Components/Social/SocialIcon';
import AppContainer from '../Components/UI/AppContainer';
import LandingImage from '../Components/LandingImage';
import Gigs from '../Components/Gigs/Gigs';
import { EventUtils } from '../Utils/EventUtils';
import { Vignette } from '../Components/UI/Vignette';
import Header from '../Components/Header';
import { Event } from '../Services/ContentfulService';
import dynamic from 'next/dynamic';

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

  return (
    <AppContainer>
      <Vignette />
      <Header currentPage="home" />

      <Content>
        <LandingImage />
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
          height="500px"
          controls={true}
        />
      </VideoBlock>

      <Footer>
        <AnimatedSocialIconsContainer
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: 1,
                  staggerChildren: 0.3,
                },
              },
            }}
        >
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="facebook"
              url="https://www.facebook.com/roundaboutsband"
              icon="FaFacebookSquare"
            />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="instagram"
              url="https://www.instagram.com/roundaboutsband"
              icon="FaInstagram"
            />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="tiktok"
              url="https://www.tiktok.com/@roundaboutsband"
              icon="FaTiktok"
            />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="youtube"
              url="https://www.youtube.com/channel/UCbJAWKjqUS1ZxJYf7PMcemA"
              icon="FaYoutube"
            />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="soundcloud"
              url="https://soundcloud.com/roundaboutsband"
              icon="FaSoundcloud"
            />
          </AnimatedSocialIcon>
        </AnimatedSocialIconsContainer>
      </Footer>
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

const Footer = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 3em;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const AnimatedSocialIconsContainer = styled(motion.ul)`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  `;

const AnimatedSocialIcon = styled(motion.li)`
  margin: 0;
  padding: 0;
`;

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


export default MainScreen;
