import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../styles/componentes/Botoes.css";
import "../styles/navegacao.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/home" activeClassName="activeLink">Home</NavLink>
                <NavLink to="/tables" activeClassName="activeLink">Tabelas</NavLink>
                <NavLink to="/about" activeClassName="activeLink">Sobre</NavLink>
                <button onClick={handleLogout} className="a_button">Sair</button>
            </nav>
        </header>
    );
};

export default Navbar;
