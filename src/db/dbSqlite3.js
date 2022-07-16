const sqlite3 = require('sqlite3');

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const db = new sqlite3.Database('./userDB.db', (err) => {
    if (err){
        console.log("Erro open database", err.message);
    } else {
        let sql = `CREATE TABLE customer(
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            name NVARCHAR(30) NOT NULL,
            sobrenome NVARCHAR(30) NOT NULL,
            numero_telefone NVARCHAR(30) NOT NULL,
            email NVARCHAR(30) NOT NULL,
            data_criacao TEXT
        )`
        db.run(sql, (err) => {
            if (err){
                console.log("Table already exists.");
            }
            let insert = 'INSERT INTO customer (name, sobrenome, numero_telefone, email, data_criacao) VALUES (?,?,?,?,?)';
            db.run(insert, ["Rayanne", "Souza", "(99) 00000-0000", "Rne@email.com", today.toISOString()]);
            db.run(insert, ["Rayssa", "Souza", "(91) 00000-0000", "Rsa@email.com", today.toISOString()]);
            db.run(insert, ["Dianna", "Sousa", "(91) 99999-9999", "Di@email.com", today.toISOString()]);
        });
    }
});

module.exports = db;