import styled, { css } from "styled-components";

interface ButtonProps {
    color: string;
    fullfilled?: boolean;
}

export const ButtonWrapper = styled.button<ButtonProps>`
    padding: 8px 24px;
    border-radius: 16px;
    min-width: 160px;
    border-size: 1px;
    ${(props) => props.color === 'green' ? css`
        color: #00ff00;
        background-color: #fff;
        border-color: #00ff00;
    ` : props.color === 'yellow' ? css`
        color: #fff000;
        background-color: #fff;
        border-color: #fff000;
    ` : css`
        color: #ff0000;
        background-color: #fff;
        border-color: #ff0000;
    `}

`