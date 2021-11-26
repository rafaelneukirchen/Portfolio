import styled, { css } from "styled-components";

interface TextProps {
    size: number;
    weight?: string; 
    italic?: boolean;
    animation?: 'upper' | 'lower';
}

export const TextWrapper = styled.p<TextProps>`
    color: #ffffff;
    font-size: ${(props) => (props.size ? `${props.size}px` : '20px')};
    font-style: ${(props) => (props.italic ? 'italic' : 'initial')};
    font-weight: ${(props) => (props.weight ? props.weight : '500')};
`