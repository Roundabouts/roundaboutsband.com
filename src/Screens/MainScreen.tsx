import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import RoundaboutsLogo from '../Components/RoundaboutsLogo';
import SocialIcon from '../Components/Social/SocialIcon';
import VideoBackground from '../Components/VideBackground';

const item: Variants = {
  hidden: { y: '0.3em', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

function MainScreen() {
  return (
    <Container>
      <VideoBackground />

      <Header></Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <RoundaboutsLogo />
        </motion.div>
      </Content>

      <Footer>
        <AnimatedSocialIconsContainer
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: 2,
                  staggerChildren: 0.3,
                },
              },
            }}
        >
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="facebook"
              url="https://www.facebook.com/roundaboutsband"
              icon="IoLogoFacebook"
            />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="instagram"
              url="https://www.instagram.com/roundaboutsband"
              icon="IoLogoInstagram"
            />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="tiktok"
              url="https://www.tiktok.com/@roundaboutsband"
              icon="IoLogoTiktok"
            />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon variants={item}>
            <SocialIcon
              name="youtbube"
              url="https://www.youtube.com/channel/UCbJAWKjqUS1ZxJYf7PMcemA"
              icon="IoLogoYoutube"
            />
          </AnimatedSocialIcon>
        </AnimatedSocialIconsContainer>
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



export default MainScreen;
