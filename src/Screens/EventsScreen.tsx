import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import RoundaboutsLogo from '../Components/RoundaboutsLogo';
import SocialIcon from '../Components/Social/SocialIcon';
import VideoBackground from '../Components/VideoBackground';
import AppContainer from '../Components/UI/AppContainer';
import LandingImage from '../Components/LandingImage';
import Gigs from '../Components/Gigs/Gigs';
import { EventUtils } from '../Utils/EventUtils';
import { Vignette } from '../Components/UI/Vignette';
import Header from '../Components/Header';
import { Event } from '../Services/ContentfulService';

interface EventsScreenProps {
  events: Array<Event>,
}

function EventsScreen({
  events = []
}: EventsScreenProps) {
  const currentYear = (new Date).getFullYear();
  const firstYear = events.length > 0 ? new Date(events[0].date).getFullYear() : currentYear;
  const lastYear = events.length > 0 ? new Date(events[events.length - 1].date).getFullYear() : currentYear;

  const [selectedYear, setSelectedYear] = useState(currentYear)

  const futureEvents = events
    .filter(event => selectedYear === new Date(event.date).getFullYear());

  return (
    <AppContainer>
      <Vignette />
      <Header currentPage="events" />

      <Block>
        <GigsHeading>
          <Button disabled={selectedYear <= firstYear} onClick={() => setSelectedYear(selectedYear - 1)}>
            terug
          </Button>
          {selectedYear}
          <Button disabled={selectedYear >= lastYear} onClick={() => setSelectedYear(selectedYear + 1)}>
            verder
          </Button>
        </GigsHeading>
        <Gigs events={futureEvents} />
      </Block>

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
  /* max-width: 980px; */
  flex-direction: column;
`;

const GigsHeading = styled.h1`
  font-size: 3em;
  line-height: 1em;
  text-shadow: 0.4rem 0.2rem 1rem #00000099;
  text-transform: uppercase;;
  align-self: center;
`;

const Button = styled.button`

`;

const Footer = styled.div`
  display: flex;
  flex: 1;
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


export default EventsScreen;
