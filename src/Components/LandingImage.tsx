import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import RoundaboutsLogo from './RoundaboutsLogo';

interface Props {
    src: string;
}

const LandingImage = ({
    src,
}: Props) => (
    <Container>
        <Logo id="logo" src="images/logo/roundabouts-logo-black.svg" />
        <AnimatedImg
            src={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
        />
    </Container>
);

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 80vh;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #121517;
`;

const AnimatedImg = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
    object-fit: cover;
`;

const Logo = styled.img`
    width: 50vw;
    opacity: 0.2;
`;

export default LandingImage;
