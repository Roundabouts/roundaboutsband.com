
import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import SocialIcon from '../Components/Social/SocialIcon';

const Footer = () => (
    <Container>
        <Socials>
            <h2>Find us at</h2>
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
                    name="spotify"
                    url="https://open.spotify.com/artist/64tyCY2tryedSw9AxUWty4?si=ZlpA39NLQquhDU25Ia4RNg"
                    icon="FaSpotify"
                    />
                </AnimatedSocialIcon>
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
            </AnimatedSocialIconsContainer>
        </Socials>
        <Contact>
            <h2>Contact</h2>
            Robin van de Wetering<br />
            info@roundaboutsband.com<br />
            +31 623 7924 73<br />
        </Contact>
        <Contact>
            <h2>Bookings</h2>
            Frank Satink (Goomah Music)<br />
            frank@goomahmusic.nl<br />
        </Contact>
      </Container>
);


const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding-bottom: 3em;
  flex-direction: row;
  /* justify-content: space-around; */

  h2 {
    font-size: 0.9em;
    margin-bottom: 0.3em;
    color: #FFFFFF;
  }
`;

const Socials = styled.div`
    display: flex;
    flex: 1.8;
    flex-direction: column;
`;

const Contact = styled.div`
    display: flex;
    flex: 1.2;
    flex-direction: column;
    line-height: 1.4em;
    color: #FFFFFF99;
`;


const AnimatedSocialIconsContainer = styled(motion.ul)`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: -1em;
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

export default Footer;
