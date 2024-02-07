import React from "react";
import "../styles/reset.css";
import "../styles/principal.css";
import logo from "../images/logo-pystock.png";
import "../styles/componentes/Botoes.css";
import "../styles/mediaquerys/principal-mediaquery.css";
import { NavLink } from "react-router-dom";


const Home = () => {

    return (
        <main className="main-home">
            <div className="main-wrapper">
                <img src={logo} alt="" className="logo"/>
                <NavLink to="/cadastro_usuario"><button className="a_button -bgblack">Cadastrar Usuário</button></NavLink>
            </div>
        </main>
    )
}

export default Home;