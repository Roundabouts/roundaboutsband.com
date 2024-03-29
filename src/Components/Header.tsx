
import React from 'react';
import styled, { css } from 'styled-components';

const Header = ({
    currentPage,
}: {
    currentPage: string;
}) => (
    <Container>
        <Logo id="logo" src="images/logo/roundabouts-logo-white.svg" />
        <Menu>
            {/* <MenuItem selected={currentPage === 'home'} href="/">Home</MenuItem>
            <MenuItem selected={currentPage === 'events'} href="/events">Shows</MenuItem> */}
        </Menu>
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
    justify-content: space-between;

    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
`;

const Logo = styled.img`
    margin-top: 6px;
    width: 200px;
`;

const Menu = styled.div`

`;

const MenuItem = styled.a<{ selected?: boolean }>`
    margin-left: 1em;
    padding: 0.5em 0;

    ${props => props.selected && css`
        font-weight: bold;
        color: #FFF;
    `}
`;

export default Header;
