import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa"; 
import { BsArrowDownSquareFill } from "react-icons/bs";
import { toast } from "react-toastify";

import "../styles/grid_produtos.css";
import "../styles/mediaquerys/grid_produtos-mediaquery.css";

const Grid_Produtos = ({products, setProducts, setOnEdit, getProducts, getExits, setExits}) => {

    const handleEdit = async(item) =>{
        setOnEdit(item);
    };

    const handleDelete = async(id) =>{
        try {
            const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?");
            if (!confirmDelete) return;
    
            await axios.delete("http://localhost:8800/products/delete/" + id);
            
            const newArray = products.filter ((produtos) => produtos.id !== id);
            setProducts(newArray);
            toast.success("Produto excluído!");
        } catch (error) {
            console.log("Erro ao excluir o produto - ", error);
        }
    };

    const handleMoveToExit = async (item) => {
        try {
            const data_de_saida = prompt("Informe a data de saída (formato: DD/MM/AAAA):");
            if (!data_de_saida) return;

            item.data_de_saida = data_de_saida;

            await axios.post("http://localhost:8800/exits", item);
            await axios.delete(`http://localhost:8800/products/delete/${item.id}`);
    
            const newProducts = products.filter((product) => product.id !== item.id);
            setProducts(newProducts);
    
            const newExits = [...products, { ...item }];
            setExits(newExits);
    
            await getProducts();
            await getExits();
            setOnEdit(null);
            toast.success("Saída registrada com sucesso!")
        } catch (error) {
            console.log("Erro ao registrar saída - ", error);
        }
    };
    
    return (
        <table className="main-table_products">
            <caption className="main-table_title">Estoque</caption>
            <thead className="thead_products">
                <tr className="tr_products">
                    <th className="th_products -short">
                        Código
                    </th>
                    <th className="th_products -medium">
                        NF-e
                    </th>
                    <th className="th_products -large">
                        Chave_Acesso
                    </th>
                    <th className="th_products -large">
                        Cnpj_Emitente
                    </th>
                    <th className="th_products -large">
                        Emitente
                    </th>
                    <th className="th_products -large">
                        Descrição
                    </th>
                    <th className="th_products -short">
                        Preço
                    </th>
                    <th className="th_products -medium">
                        Quantidade
                    </th>
                    <th className="th_products -large">
                        Data de Entrada
                    </th>
                    <th className="th_products -medium">
                        Avaria
                    </th>
                </tr>
            </thead>
            <tbody className="body_products">
                {products.map((item, i) => (
                    <tr key={i}>
                        <td className="td_products">{item.codigo}</td>
                        <td className="td_products">{item.nfe}</td>
                        <td className="td_products">{item.chave_de_acesso_nfe}</td>
                        <td className="td_products">{item.cnpj_emitente_nfe}</td>
                        <td className="td_products">{item.emitente_nfe}</td>
                        <td className="td_products">{item.descricao}</td>
                        <td className="td_products">{item.preco}</td>
                        <td className="td_products">{item.quantidade}</td>
                        <td className="td_products">{item.data_de_entrada}</td>
                        <td className="td_products">{item.avaria}</td>
                        <td className="icon_exits">
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </td>
                        <td className="icon_exits">
                            <FaTrash onClick={() => handleDelete(item.id)}/>
                        </td>
                        <td className="icon_exits">
                            <BsArrowDownSquareFill onClick={() => handleMoveToExit(item)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Grid_Produtos;
