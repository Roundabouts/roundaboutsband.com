import { ReactElement } from 'react';
import styled from 'styled-components';

export interface ContainerProps {
    children: ReactElement | ReactElement[];
}

const AppContainer = ({ children }: ContainerProps) => (
    <Container>
        {children}
    </Container>
);

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;;
`;

export default AppContainer;
