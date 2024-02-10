import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


import logo from "./images/logo-pystock.png";


import "./styles/reset.css";
import "./styles/login.css";
import "./styles/mediaquerys/login-mediaquery.css";

function Login_page() {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const usuario = document.getElementById("username").value;
        const senha = document.getElementById("pass").value;

        try {
            const response = await axios.get(`http://localhost:8800/users/?username=${usuario}&password=${senha}`);

            if (response.data.length > 0) {
                navigate('/home');
            } else {
                alert("Usuário ou senha incorretos");
                document.getElementById("username").value = "";
                document.getElementById("pass").value = "";
            }
        } catch (error) {
            alert("Erro ao autenticar usuário");
            console.error(error);
        }
    }

    return (
        <div className="login_page">
            <main className="wrapper-login">
                <div className="login-container">
                    <img src={logo} alt="PyStock Logo" className="logo-login" />
                    <div className="form-container_login">
                        <form onSubmit={handleLogin}>
                            <div className="credentials-login">
                                <input type="text" id="username" placeholder="user" required />
                                <input type="password" id="pass" placeholder="password" required />
                            </div>
                            <div className="buttons-container_login">
                                <input type="submit" value="Login" id="login-button" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login_page;
