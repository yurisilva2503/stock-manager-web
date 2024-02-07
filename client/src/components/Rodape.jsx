import React from "react";

import ico_x from "../images/ico_x.png";
import ico_instagram from "../images/ico_instagram.png";

import "../styles/componentes/Rodape.css";
import "../styles/mediaquerys/Rodape-mediaquery.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper-icon">
                <a href="https://twitter.com/PyStock_oficial" target="_blank">
                    <img src={ico_x} alt="ícone do X" className="footer-icon"/>
                </a>
                <a href="https://www.instagram.com/pystock_oficial/" target="_blank">
                    <img src={ico_instagram} alt="ícone do instagram" className="footer-icon"/>
                </a>
            </div>
            <p>Copyright © 2023 - PyStock</p>
            <p>Todos os direitos reservados</p>
        </div>
    );
};

export default Footer;
