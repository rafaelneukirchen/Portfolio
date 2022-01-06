import { useCallback, useEffect, useState } from 'react';

const Auth = () => {


    const hexGenerator = (size: any) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    const [hash, setHash] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    
    const verifyIsLogged = useCallback(() => {
        if(localStorage.getItem('login')) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [])
    
    const login = useCallback(() => {
        if(localStorage.getItem('login')) {
            console.log('Já está logado');
            return;
        } else {
            const newHash = hexGenerator(16);
            setHash(newHash);
            localStorage.setItem('login', newHash);
        }
    }, []);
    
    const logout = useCallback(() => {
        localStorage.removeItem('login');
        localStorage.clear();
    }, []);
    
    useEffect(() => {
        verifyIsLogged();
    }, [verifyIsLogged])

    return (
        {
            login: login,
            logout: logout,
            verifyIsLogged: verifyIsLogged,
            isLogged: isLogged,
            hash: hash,
        }
    );
};

export default Auth;