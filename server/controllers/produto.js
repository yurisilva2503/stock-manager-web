import { db } from "../db.js";

export const getProducts = (_, res) =>{
    const q= "SELECT * from produtos";

    db.query(q, (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addProducts = (req, res) =>{
    const q= "INSERT INTO produtos (`codigo`,`nfe`,`chave_de_acesso_nfe`,`cnpj_emitente_nfe`, `emitente_nfe`,`descricao`,`preco`,`quantidade`,`data_de_entrada`,`avaria`) VALUES (?)";

    const values = [
        req.body.codigo,
        req.body.nfe,
        req.body.chave_de_acesso_nfe,
        req.body.cnpj_emitente_nfe,
        req.body.emitente_nfe,
        req.body.descricao,
        req.body.preco,
        req.body.quantidade,
        req.body.data_de_entrada,
        req.body.avaria
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto adicionado com sucesso!");
    });
};

export const updateProducts = (req, res) =>{
    const q= "UPDATE produtos SET `codigo` = ?,`nfe` = ?,`chave_de_acesso_nfe` = ?,`cnpj_emitente_nfe` = ?,`emitente_nfe` = ?,`descricao` = ?,`preco` = ?,`quantidade` = ?,`data_de_entrada` = ?,`avaria` = ? WHERE `id` = ?";

    const values = [
        req.body.codigo,
        req.body.nfe,
        req.body.chave_de_acesso_nfe,
        req.body.cnpj_emitente_nfe,
        req.body.emitente_nfe,
        req.body.descricao,
        req.body.preco,
        req.body.quantidade,
        req.body.data_de_entrada,
        req.body.avaria
    ]

    db.query(q, [...values, req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Produto atualizado com sucesso!");
    });
};

export const deleteProducts = (req, res) => {
    const q = "DELETE FROM produtos WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Produto removido com sucesso!");
    });
};