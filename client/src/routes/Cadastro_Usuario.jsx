import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/reset.css";
import "../styles/cadastro_usuarios.css";
import "../styles/mediaquerys/cadastro_usuarios-mediaquery.css";

const Cadastro_Usuario = () => {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [perfil, setPerfil] = useState("");

    const cadastrarUsuario = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8800/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: nome,
                    password: senha,
                    perfil: perfil,
                }),
            });

            if (response.ok) {
                toast.success("Usuário cadastrado com sucesso!");
                setNome("");
                setSenha("");
                setPerfil("");
            } else {
                const data = await response.json();
                toast.error(`Erro ao cadastrar usuário: ${data.message}`);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <main>
            <ToastContainer autoClose={500}/>
            <div className="form-register_container">
                <div className="form-register_wrapper">
                    <form className="register_form" onSubmit={cadastrarUsuario}>
                        <div className="credentials">
                            <h1 className="form-register_title">Cadastro de Usuário</h1>
                            <label className="form-register_label">Usuário</label>
                            <input className="form-register_input" type="text" placeholder="Digite seu usuário" value={nome} onChange={(e) => setNome(e.target.value)}/>

                            <label className="form-register_label">Senha</label>
                            <input className="form-register_input" type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

                            <label className="form-register_label">Perfil</label>
                            <input className="form-register_input" type="text" placeholder="Digite seu perfil (adm ou usr)" value={perfil} onChange={(e) => setPerfil(e.target.value)}/>
                        </div>

                        <div class="buttons-container">
                            <input type="submit" value="Cadastrar" id="submit-button" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Cadastro_Usuario;
