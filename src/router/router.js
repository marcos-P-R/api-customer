const db = require('../db/dbSqlite3');
const rotas = require('express').Router();

class Rotas{
    static getByID(req, res) {
        let params = [req.params.id];
        db.get(`SELECT * FROM customer where id = ?`, params, (err, row) => {
            return err ? res.status(400).json({"erro": err.message}) : res.status(200).json({row});
        });
    }

    static getAll(req, res){
        db.all("SELECT * FROM customer", [], (err, rows) => {
            return err ? res.status(400).json({"error":err.message}) : res.status(200).json({rows});
        });
    }
}

module.exports = Rotas;