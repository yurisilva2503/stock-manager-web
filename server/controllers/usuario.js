// user.js
import { db } from "../db.js";

export const getUserByCredentials = (req, res) => {
    const { username, password } = req.query;
    const q = `SELECT * from usuarios WHERE user_nome = ? AND user_senha = ?`;

    db.query(q, [username, password], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const createUser = (req, res) => {
    const { username, password, perfil } = req.body;

    const checkQuery = `SELECT * FROM usuarios WHERE user_nome = ?`;

    db.query(checkQuery, [username], (checkErr, checkData) => {
        if (checkErr) return res.json(checkErr);

        if (checkData.length > 0) {
            return res.status(400).json({ message: 'Nome de usuário já em uso. Escolha outro.' });
        }

        const insertQuery = `INSERT INTO usuarios (user_nome, user_senha, user_perfil) VALUES (?, ?, ?)`;

        db.query(insertQuery, [username, password, perfil], (insertErr, insertData) => {
            if (insertErr) return res.json(insertErr);

            return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
        });
    });
};
