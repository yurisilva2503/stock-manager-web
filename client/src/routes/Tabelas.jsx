import React from "react";
import "../styles/Form_CadastroProdutos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form_CadastroProdutos from "../components/Form_CadastroProdutos.jsx";
import Grid_Produtos from "../components/Grid_Produtos.jsx";
import Grid_Saidas from "../components/Grid_Saidas.jsx";
import "../styles/tabelas.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/mediaquerys/tabelas-mediaquery.css";

const Tables = () => {
    const [products, setProducts] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
    const [exits, setExits] = useState([]);

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8800/products");
            setProducts(res.data);
        } catch (error) {
            toast.error(error);
        }
    };
    useEffect(() => {
        getProducts();
    }, [setProducts]);

    const getExits = async () => {
        try {
            const res = await axios.get("http://localhost:8800/exits");
            setExits(res.data);
        } catch (error) {
            toast.error(error);
        }
    };
    useEffect(() => {
        getExits();
    }, [setExits]);

    return (
        <div className="tables-container">
            <main className="main-tables">
                <ToastContainer autoClose={500}/>

                <Form_CadastroProdutos onEdit={onEdit} setOnEdit={setOnEdit} getProducts={getProducts} getExits={getExits} setExits={setExits}/>

                <Grid_Produtos products={products} setProducts={setProducts} setOnEdit={setOnEdit}
                getProducts={getProducts} getExits={getExits} setExits={setExits}/>

                <span className="space_middle"></span>

                <Grid_Saidas exits={exits} setExits={setExits} getExits={getExits} getProducts={getProducts} setProducts={setProducts}/>
            </main>
        </div>
    )
}

export default Tables;