/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Logo from '../../images/logo.png';
import { NavContainer } from './styles';
interface HeaderProps {
    fixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixed }) => {

    return (
        <NavContainer fixed={fixed}>
            <ul>
                <li><a href="/cardapio" id="">Cardápio</a></li>
                <li><a href="/nossas-lojas" id="">Nossas Lojas</a></li>
                <a href="/"><img src={`${Logo}`} alt="logo" title="logo" /></a>
                <li><a href="/contato" id="">Contato</a></li>
                <li><a href="/entrar" id="">Entrar</a></li>
            </ul>
        </NavContainer>
    )
}

export default Header;