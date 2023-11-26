require("dotenv").config({ path: "./../../.env" });
const jwt = require("jsonwebtoken");
const db = require("./../../lib/db");
const { CADASTRO } = require("./../../database/queries");

module.exports = async (req, res) => {
    console.log(req.body);
    
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const pass = req.body.pass;
    const email = req.body.email;
    const cpf = req.body.cpf;

    const promise = new Promise((resolve, reject) => {
        db.query(CADASTRO(nome, sobrenome, pass, email, cpf), function(err, result) {
            if (err) throw err;
        });
    });
};
