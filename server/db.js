import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1890D82407ee!',
    database: 'pystock'
});