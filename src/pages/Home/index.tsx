import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import PageWrapper from '../../components/PageWrapper';
import Text from '../../components/Text';
import { Background, Content } from './styles';

const Home: React.FC = () => {
    const texts = useMemo(() => {
        return ['The grow Continues.', 'Today we grow Stronger.', 'Be fruitful and multiply.'];
    }, []);
    const [growText, setGrowText] = useState(texts[Math.floor(Math.random() * 3)]);
    const changeText = useCallback(() => {
        setGrowText(texts[Math.floor(Math.random() * 3)]);
    }, [texts])

    useEffect(() => {
        setInterval(() => {
            changeText();
        }, 64000);
    }, [changeText, texts]);
    return(
        <PageWrapper>
            <Background>
            <Header />
                <Content>
                <Text size={80} italic animation={'upper'}> {growText}</Text>
                </Content>
            </Background>
        </PageWrapper>
    )
}

export default Home;