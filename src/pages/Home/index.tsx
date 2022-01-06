import React from 'react';
import Header from '../../components/Header';
import PageWrapper from '../../components/PageWrapper';
import { Background, Title, Paragraph, Container, InternalTitle } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <PageWrapper>
                <Background>
                    <Header />
                    <Container rows={4} cols={12}>
                        <Title>Drinks Meister's</Title>
                        <Paragraph>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                    </Container>
                </Background>
                <Container rows={4} cols={12}>
                    <InternalTitle>Venha conhecer nosso menu</InternalTitle>
                </Container>
            </PageWrapper>
        </>
    )
}

export default Home;