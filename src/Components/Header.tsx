
import React from 'react';
import styled from 'styled-components';

const Header = () => (
    <Container>
        <Logo id="logo" src="images/logo/roundabouts-logo-white.svg" />
    </Container>
);

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    padding: 10px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;

    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
`;

const Logo = styled.img`
    margin-top: 6px;
    width: 200px;
`;

export default Header;
