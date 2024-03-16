import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const LandingImage = ({
    src,
    alt,
    width,
    height,
}: Props) => (
    <Container>
        <Logo id="logo" src="images/logo/roundabouts-logo-black.svg" />
        <StaticImg
            src={src}
            alt={alt}
            width={width}
            height={height}
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

    @media (max-width: 900px) {
        height: 60vh;
    }

    @media (max-width: 600px) {
        height: 50vh;
    }
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
