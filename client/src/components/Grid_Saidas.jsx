import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa"; 
import { BsArrowUpSquareFill } from "react-icons/bs";
import { toast } from "react-toastify";

import "../styles/grid_saidas.css";
import "../styles/mediaquerys/grid_saidas-mediaquery.css";


const Grid_Saidas = ({exits, setExits, getExits, getProducts, setProducts}) => {

    const handleEdit_exits = async(item) =>{
        setOnEdit_exits(item);
    };

    const handleDelete_exits = async(id) =>{
        await axios.delete("http://localhost:8800/exits/delete/" + id).then(() => {
            const newArray_exits = exits.filter ((exits) => exits.id !== id);

            setExits(newArray_exits);
            toast.success("Saída excluída!");
        })
        .catch (({data}) => toast.error (data));
    setOnEdit_exits(null);
    };

    const handleMoveToProducts = async (item) => {
        const confirmMove = window.confirm("Tem certeza que deseja mover este produto de volta para o estoque?");
        if (!confirmMove) return;
        await axios.post("http://localhost:8800/products", item);
        await axios.delete(`http://localhost:8800/exits/delete/${item.id}`);
        
        const newExits = exits.filter((exits) => exits.id !== item.id);
        setExits(newExits);

        const newProducts = [...exits, { ...item }];
        setProducts(newProducts);
            
        getProducts();
        getExits();
        toast.success("Produto retornado ao estoque com sucesso!");
        setOnEdit_exits(null);
        }

    return (
        <table className="main-table_exits">
            <caption className="main-exits_title">Saídas</caption>
            <thead className="thead_exits">
                <tr className="tr_exits">
                    <th className="th_exits -short">
                        Código
                    </th>
                    <th className="th_exits -medium">
                        NF-e
                    </th>
                    <th className="th_exits -large">
                        Chave_Acesso
                    </th>
                    <th className="th_exits -large">
                        Cnpj_Emitente
                    </th>
                    <th className="th_exits -medium">
                        Emitente
                    </th>
                    <th className="th_exits -large">
                        Descrição
                    </th>
                    <th className="th_exits -short">
                        Preço
                    </th>
                    <th className="th_exits -large">
                        Quantidade
                    </th>
                    <th className="th_exits -large">
                        Data de Entrada
                    </th>
                    <th className="th_exits -large">
                        Data de Saída
                    </th>
                    <th className="th_exits -medium">
                        Avaria
                    </th>
                </tr>
            </thead>
            <tbody className="body_exits">
                {exits.map((item, i) => (
                    <tr key={i}>
                        <td className="td_exits">{item.codigo}</td>
                        <td className="td_exits">{item.nfe}</td>
                        <td className="td_exits">{item.chave_de_acesso_nfe}</td>
                        <td className="td_exits">{item.cnpj_emitente_nfe}</td>
                        <td className="td_exits">{item.emitente_nfe}</td>
                        <td className="td_exits">{item.descricao}</td>
                        <td className="td_exits">{item.preco}</td>
                        <td className="td_exits">{item.quantidade}</td>
                        <td className="td_exits">{item.data_de_entrada}</td>
                        <td className="td_exits">{item.data_de_saida}</td>
                        <td className="td_exits">{item.avaria}</td>
                        <td className="icon_exits">
                            <FaTrash onClick={() => handleDelete_exits(item.id)}/>
                        </td>
                        <td className="icon_exits">
                            <BsArrowUpSquareFill onClick={() => handleMoveToProducts(item)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Grid_Saidas;