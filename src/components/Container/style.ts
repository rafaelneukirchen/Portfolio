import styled, { css } from "styled-components";
import {ContainerProps} from './index';

export const Grid = styled.div<ContainerProps>`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;

    ${(props) => props.cols && css`
        grid-template-columns: repeat(${props.cols ? props.cols : '12'}, 1fr);
    `}
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`