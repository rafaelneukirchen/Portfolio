import styled from "styled-components";

interface navProps {
    fixed?: boolean;
}

export const NavContainer = styled.nav<navProps>`
    width: 100%;
    height: 80px;
    background-color: transparent;
    position: ${(props) => props.fixed ? 'fixed' : 'initial'};
`