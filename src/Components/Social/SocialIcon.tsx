import React from 'react';
import styled from 'styled-components';
import * as IoIcon from 'react-icons/io5';

export interface SocialIconProps {
    name: string;
    url: string;
    icon: keyof typeof IoIcon;
}

const SocialIcon = ({
    name,
    url,
    icon,
}: SocialIconProps) => {
    const Icon = IoIcon[icon];

    return (
        <Link href={url} target="_blank">
            <IconWrapper>
                <Icon className="social-icon-shadow"  />
            </IconWrapper>
            <IconWrapper>
                <Icon title={name} className="social-icon" />
            </IconWrapper>
        </Link>
    );
};

const Link = styled.a`
    display: flex;
    position: relative;
    width: 1.4em;
    height: 1em;
    margin: 0 5px;
    padding: 10px;
    font-size: 2.2em;
    color: #AAA;
`;

const IconWrapper = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default SocialIcon;
