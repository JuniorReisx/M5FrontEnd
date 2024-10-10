import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <a href="/" className="button-nav" target='blank'>Inicio</a>
            <a href="/" className="button-nav" target='blank'>Cadastro</a>
            <a href="/" className="button-nav" target='blank'>Vagas</a>
        </nav>
    );
};

export default Header;