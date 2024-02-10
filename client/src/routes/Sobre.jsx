import React from "react";

import ico_comosurgiu from "../images/ico_comosurgiu.png";

import "../styles/reset.css";
import "../styles/sobre.css";
import "../styles/mediaquerys/sobre-mediaquery.css";

const About = () => {
    return (
        <main className="main-about">
            <div className="main-header_wrapper">
                <div className="subtitle_container">
                    <h2 className="subtitle">PyStock</h2>
                </div>
                <div class="paragraph_container">
                    <div className="first_paragraph">
                        <h3 className="paragraph_title">O que é?</h3>
                            <p className="paragraph_text">
                                O PyStock é um poderoso programa de gerenciamento de estoque desenvolvido para auxiliar empresas na otimização do controle de produtos e materiais.
                            </p>
                    </div>
                    <div className="second_paragraph">
                        <h3 className="paragraph_title">Como funciona?</h3>
                        <p className="paragraph_text">
                            O PyStock opera por meio da integração de suas funcionalidades utilizando tecnologias como React e Express, juntamente com o ambiente Node.js. Essa combinação possibilita o cadastro eficiente de usuários, produtos e outras informações essenciais para o gerenciamento de estoque.
                        </p>
                    </div>
                    <div className="third_paragraph">
                        <h3 className="paragraph_title">Destaques</h3>
                        <p className="paragraph_text">
                            O PyStock inclui um sistema abrangente de controle de estoque, integração direta com banco de dados e criação de contas.
                        </p>
                    </div>
                </div>
            </div>
            <div className="origin-paragraph">
                <div className="origin-paragraph_wrapper">
                    <h3 className="paragraph_title -bgblack">Origem</h3>
                    <p className="paragraph_text -bgblack">
                    O PyStock teve origem como um projeto acadêmico concebido e implementado por quatro alunos: Marcelly, Mateus, Warleson e Yuri. Inicialmente, foi idealizado como um programa de gestão de estoque voltado para desktops, empregando o Python como principal linguagem de programação. Após a finalização do projeto para desktops, o PyStock passou por um processo de aprimoramento que culminou na sua adaptação para um formato web mais abrangente.
                    </p>

                    <p className="paragraph_text -bgblack">
                    No estágio inicial, o PyStock foi projetado com interfaces de usuário utilizando a eficiente ferramenta Qt Designer, enquanto a codificação foi realizada com o auxílio da IDE PyCharm. Essa transição para uma versão online não só atendeu às demandas acadêmicas, mas também conferiu ao PyStock uma versatilidade mais ampla. A transformação em um site web não apenas ampliou seu alcance, mas também permitiu uma acessibilidade mais flexível.
                    </p>

                    <p className="paragraph_text -bgblack">
                    Assim, o projeto não se limitou a cumprir os requisitos estabelecidos pela instituição de ensino, mas evoluiu para uma ferramenta prática e completa. O PyStock, originalmente uma resposta acadêmica, tornou-se uma solução funcional que está destinada não apenas a ser reconhecida como um trabalho de conclusão de curso excepcional, mas também como uma aplicação valiosa no cenário prático da gestão de estoques.
                    </p>
                </div>
                <img src={ico_comosurgiu} alt="" className="large_icon"/>
            </div>
        </main>
    )
}

export default About;