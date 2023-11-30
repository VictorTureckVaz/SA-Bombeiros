require("dotenv").config({ path: "./../../../.env" });
const jwt = require("jsonwebtoken");
const db = require("./../../../lib/db");
const { MATERIAIS } = require("./../../../database/queries");

module.exports = async (req, res) => {
    console.log(req.body);

    const tipo = req.body.tipo;
    const material = req.body.material;
    const tamanho = req.body.tamanho;
    const quantidade = req.body.quantidade;

    const promise = new Promise((resolve, reject) => {
        db.query(MATERIAIS(tipo, material, tamanho, quantidade), function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
};