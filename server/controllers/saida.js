import { db } from "../db.js";

export const getExits = (_, res) =>{
    const q= "SELECT * from saidas";

    db.query(q, (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addExits= (req, res) =>{
    const q= "INSERT INTO saidas (`codigo`,`nfe`,`chave_de_acesso_nfe`,`cnpj_emitente_nfe`, `emitente_nfe`,`descricao`,`preco`,`quantidade`,`data_de_entrada`,`data_de_saida`,`avaria`) VALUES (?)";

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
        req.body.data_de_saida,
        req.body.avaria
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Saída realizada com sucesso!");
    });
};

export const updateExits = (req, res) =>{
    const q= "UPDATE saidas SET `codigo` = ?,`nfe` = ?,`chave_de_acesso_nfe` = ?,`cnpj_emitente_nfe` = ?,`emitente_nfe` = ?,`descricao` = ?,`preco` = ?,`quantidade` = ?,`data_de_entrada` = ?,`data_de_saida`,`avaria` = ? WHERE `id` = ?";

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
        req.body.data_de_saida,
        req.body.avaria
    ]

    db.query(q, [...values, req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Saída atualizada com sucesso!");
    });
};

export const deleteExits = (req, res) => {
    const q = "DELETE FROM saidas WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Saída removida com sucesso!");
    });
};