import styled from "styled-components";

interface navProps {
    fixed?: boolean;
}

export const NavContainer = styled.nav<navProps>`
    width: 100%;
    height: 80px;
    background-color: transparent;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 8px;
    position: ${(props) => props.fixed ? 'fixed' : 'initial'};
    z-index: 2;
    > ul {
        z-index: 1;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex: 1 0 100%;
        li, a {
            > img {
                height: 80px;
            }
            z-index: 1;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 300;
            color: #fff;
            z-index: 1;
            text-decoration: none;
            font-size: 18px;
            transition: color 0.3s;
            @media(min-width: 768px) {
                &:hover, :active {
                    cursor: pointer;
                    color: rgba(180,120,100,1);
                    transition: color 0.3s;
                }
            }
        }

        li > a {
            width: 100%;
        }
    }
`