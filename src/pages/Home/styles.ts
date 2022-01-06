import styled, { keyframes } from 'styled-components';
import restaurant from '../../images/restaurant.jpg';
import ContainerComponent from '../../components/Container';

//Animations
const textAnim = keyframes`
    from {
        opacity: 0;
        margin-bottom: -250px;
    }

    to {
        opacity: 1;
        margin-bottom: 0;
    }
`;

export const Container = styled(ContainerComponent)`
    margin-top: 120px;
`;

export const Background = styled.div`
    background: url(${restaurant}) fixed center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;   
    &::before{
        content: '';
        top: 0;
        background: rgba(0,0,0,0.50) 100%;
        position: absolute;
        width: 100%;
        height: inherit;
    }
`;

export const Title = styled.h2`
    font-size: 64px;
    margin-left: 16px;
    color: #fff;
    border-bottom: 1px solid rgba(180,120,100,1);
    grid-column: 1/6;
    grid-row: 1/2;
    z-index: 1;
    transition: ${textAnim} 1s ease-out;
    font-style: italic;
    font-weight: 400;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    text-align: justify;
    margin-left: 16px;
    color: #fff;
    grid-column: 1/11;
    grid-row: 3/5;
    z-index: 1;
    transition: ${textAnim} 1s ease-out;
`;

export const InternalTitle = styled.h3`
    font-size: 36px;
    margin-left: 16px;
    color: #333;
    border-bottom: 1px solid rgba(180,120,100,1);
    grid-column: 1/6;
    grid-row: 1/2;
    z-index: 1;
    transition: ${textAnim} 1s ease-out;
    font-style: italic;
    font-weight: 400;
`;