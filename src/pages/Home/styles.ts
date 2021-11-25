import styled from 'styled-components';
import tree from '../../images/tree.jpg';

export const Background = styled.div`
    background: url(${tree}) fixed center no-repeat;
    width: 100%;
    height: 300vh;
    position: relative;
    z-index: -1;
    position: relative;
    &::after{
        content: '';
        top: 0;
        background: linear-gradient(rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.50) 100%);
        position: absolute;
        width: 100%;
        height: inherit;
    }
`;

export const Content = styled.div`
    color: #ffffff;
    background-color: #ffffff;
    height: 100vh;
`

// Photo by <a href="https://unsplash.com/@s_tsuchiya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">S. Tsuchiya</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  