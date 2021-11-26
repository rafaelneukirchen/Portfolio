import styled from 'styled-components';
import tree from '../../images/tree.jpg';

export const Background = styled.div`
    background: url(${tree}) fixed center no-repeat;
    width: 100%;
    height: 200vh;
    position: relative;
    z-index: -1;
    position: relative;
    &::before{
        z-index: -1;
        content: '';
        top: 0;
        background: rgba(0,0,0,0.50) 100%;
        position: absolute;
        width: 100%;
        height: inherit;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    height: calc(100vh - 100px);
`

// Photo by <a href="https://unsplash.com/@s_tsuchiya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">S. Tsuchiya</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  