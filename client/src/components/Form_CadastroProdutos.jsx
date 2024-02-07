import React, {useEffect, useRef} from "react";
import "../styles/Form_CadastroProdutos.css";
import "../styles/mediaquerys/form_cadastroprodutos-mediaquery.css";
import axios from "axios";
import { toast } from "react-toastify";

const Form_CadastroProdutos = ({onEdit, setOnEdit, getProducts}) =>{
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const product = ref.current;

            product.codigo.value = onEdit.codigo;
            product.nfe.value = onEdit.nfe;
            product.chave_de_acesso_nfe.value = onEdit.chave_de_acesso_nfe;
            product.cnpj_emitente_nfe.value = onEdit.cnpj_emitente_nfe;
            product.emitente_nfe.value = onEdit.emitente_nfe;
            product.descricao.value = onEdit.descricao;
            product.preco.value = onEdit.preco;
            product.quantidade.value = onEdit.quantidade;
            product.data_de_entrada.value = onEdit.data_de_entrada;
            product.avaria.value = onEdit.avaria;
        }
    }, [onEdit]);

    function clear(){
        document.getElementById("codigo").value = "";
        document.getElementById("nfe").value = "";
        document.getElementById("chave_de_acesso_nfe").value = "";
        document.getElementById("cnpj_emitente_nfe").value = "";
        document.getElementById("emitente_nfe").value = "";
        document.getElementById("descricao").value = "";
        document.getElementById("preco").value = "";
        document.getElementById("quantidade").value = "";
        document.getElementById("data_de_entrada").value = "";
        document.getElementById("avaria").value = "";
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const product = ref.current;

        if (
            !product.codigo.value ||
            !product.nfe.value ||
            !product.chave_de_acesso_nfe.value ||
            !product.cnpj_emitente_nfe.value ||
            !product.emitente_nfe.value ||
            !product.descricao.value ||
            !product.preco.value ||
            !product.quantidade.value ||
            !product.data_de_entrada.value ||
            !product.avaria.value
        ){
            return toast.warn("Preencha todos os campos");
        }

        if (onEdit) {
            await axios.put("http://localhost:8800/products/update/"+ onEdit.id, {
                codigo: product.codigo.value,
                nfe: product.nfe.value,
                chave_de_acesso_nfe: product.chave_de_acesso_nfe.value,
                cnpj_emitente_nfe: product.cnpj_emitente_nfe.value,
                emitente_nfe: product.emitente_nfe.value,
                descricao: product.descricao.value,
                preco: product.preco.value,
                quantidade: product.quantidade.value,
                data_de_entrada: product.data_de_entrada.value,
                avaria: product.avaria.value
            })
            .then(() => toast.success("Produto atualizado com sucesso!"))
            .catch(() => toast.error("Falha ao atualizar produto!"));
        } else {
            await axios.post("http://localhost:8800/products", {
                codigo: product.codigo.value,
                nfe: product.nfe.value,
                chave_de_acesso_nfe: product.chave_de_acesso_nfe.value,
                cnpj_emitente_nfe: product.cnpj_emitente_nfe.value,
                emitente_nfe: product.emitente_nfe.value,
                descricao: product.descricao.value,
                preco: product.preco.value,
                quantidade: product.quantidade.value,
                data_de_entrada: product.data_de_entrada.value,
                avaria: product.avaria.value
            })
          .then(() => toast.success("Produto adicionado com sucesso!"))
          .catch(() => toast.error("Erro ao adicionar produto!"));
        }
        clear();
        setOnEdit(null);
        getProducts();
    };

    return(
        <div className="main-tables">
            <form className="form-container_tables" ref={ref} onSubmit={handleSubmit}>
                <h1 className="title-tableform">Cadastro de Mercadorias </h1>
                <div className="input-container_tables">
                    <div className="input-area">
                        <label className="label-tables">Código do Produto</label>
                        <input maxLength="14" className="input-tables" name="codigo" id="codigo" placeholder="Máx. 14 digitos"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">NF-e</label>
                        <input maxLength="9" className="input-tables" name="nfe" id="nfe" placeholder="Máx. 9 digitos"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">Chave de Acesso (NF-e)</label>
                        <input maxLength="40" className="input-tables" name="chave_de_acesso_nfe" id="chave_de_acesso_nfe" placeholder="Máx. 40 digitos"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">Cnpj Emitente (NF-e)</label>
                        <input maxLength="14" className="input-tables" name="cnpj_emitente_nfe" id="cnpj_emitente_nfe" placeholder="Máx. 14 digitos"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">Emitente (NF-e)</label>
                        <input maxLength="255" className="input-tables" name="emitente_nfe" id="emitente_nfe" placeholder="Ex: Miriade"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">Descrição</label>
                        <input maxLength="255" className="input-tables" name="descricao" id="descricao" placeholder="Ex: Cadeira"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">Preço</label>
                        <input maxLength="255" className="input-tables" name="preco" id="preco" placeholder="Ex: 119.90"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">Quantidade</label>
                        <input type="number" min="1" className="input-tables" name="quantidade" id="quantidade" placeholder="Ex: 1"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">Data de Entrada</label>
                        <input maxLength="10" className="input-tables" name="data_de_entrada" id="data_de_entrada" placeholder="Ex: 31/01/2024"></input>
                    </div>
                    <div className="input-area">
                        <label className="label-tables">Avaria</label>
                        <input maxLength="3" className="input-tables" name="avaria" id="avaria" placeholder="Sim ou Não"></input>
                    </div>
                </div>
                <div className="button-container_tables">
                    <button className="save-button">Cadastrar</button>
                </div>
            </form>
        </div>
    );

};

export default Form_CadastroProdutos;