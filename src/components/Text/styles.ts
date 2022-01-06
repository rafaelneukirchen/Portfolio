import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    margin-top:-249px;
    opacity: 0;
}

to {
    margin-top:0;
    opacity: 1;
  }
`;
const slideOut = keyframes`
  from {
    margin-top:-250px;
    opacity: 0;
}

to {
    margin-top:0;
    opacity: 1;
  }
`;
interface TextProps {
    size: number;
    weight?: string; 
    italic?: boolean;
    animation?: boolean;
}

export const TextWrapper = styled.p<TextProps>`
    color: #ffffff;
    font-size: ${(props) => (props.size ? `${props.size}px` : '20px')};
    font-style: ${(props) => (props.italic ? 'italic' : 'initial')};
    font-weight: ${(props) => (props.weight ? props.weight : '500')};
    animation: ${(props) => (props.animation === true ? css`${slideIn}` : css`${slideOut}`)}  1.2s ease-out;
`

