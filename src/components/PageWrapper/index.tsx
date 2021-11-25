import React from 'react';
import { Container } from './style';

const PageWrapper: React.FC = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default PageWrapper;