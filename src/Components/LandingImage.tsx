import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import OuttaYourMind from '../../public/images/landing/outta-your-mind.jpg';

interface Props {
    src: string;
}

const LandingImage = ({
    src,
}: Props) => (
    <Container>
        <Logo id="logo" src="images/logo/roundabouts-logo-black.svg" />
        <StaticImg
            src={OuttaYourMind}
            alt="Outta Your Mind band photo"
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

const StaticImg = styled(Image)`
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
