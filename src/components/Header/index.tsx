import React from 'react';
import { NavContainer } from './styles';
interface HeaderProps{
    fixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({fixed, children}) => {

    return(
        <NavContainer fixed={fixed}>

        </NavContainer>
    )
}

export default Header;