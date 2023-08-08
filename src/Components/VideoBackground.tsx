import React from 'react';
import styled from 'styled-components';

interface Props {
    autoPlay?: boolean;
}

const VideoBackground = ({
    autoPlay = true,
}: Props) => (
    <div className="App">
        <Background>
            <Video autoPlay={autoPlay} muted loop>
                <source src="videos/promo-midnite.mp4" type="video/mp4" />
                <source src="videos/promo-midnite.webm" type="video/webm" />
            </Video>
        </Background>
        <Vignette />
    </div>
);

const Background = styled.div`
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex: 1;
    position: fixed;
    align-items: center;
    justify-content: center;
`;

const Video = styled.video`
    height: 100vh;
    opacity: 0.1;
`;

const Vignette = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    box-shadow: 0 0 20vw rgba(0,0,0,0.9) inset;
`;

export default VideoBackground;
