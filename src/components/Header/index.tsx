import React, { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import Logo from '../../images/logo.png';
import { NavContainer } from './styles';
interface HeaderProps {
    fixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixed }) => {

    const { isLogged, verifyIsLogged } = useAuth();

    useEffect(() => {
        verifyIsLogged();
    }, [verifyIsLogged])

    return (
        <NavContainer fixed={fixed}>
            <ul>
                <li><a href="/cardapio" id="">Cardápio</a></li>
                <li><a href="/nossas-lojas" id="">Nossas Lojas</a></li>
                <a href="/"><img src={`${Logo}`} alt="logo" title="logo" /></a>
                <li><a href="/contato" id="">Contato</a></li>
                <li><a href={!isLogged ? '/entrar' : '/minha-conta'} id="">{!isLogged ? 'Entrar' : 'Minha conta'}</a></li>
            </ul>
        </NavContainer>
    )
}

export default Header;