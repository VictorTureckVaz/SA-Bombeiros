require("dotenv").config({ path: "./../../../.env" });
const jwt = require("jsonwebtoken");
const db = require("./../../../lib/db");
const { FERIMENTOS } = require("./../../../database/queries");

module.exports = async (req, res) => {
    console.log(req.body);

    const local = req.body.local;
    const face = req.body.face;
    const lado = req.body.lado;
    const tipo = req.body.tipo;

    

    const promise = new Promise((resolve, reject) => {
        db.query(FERIMENTOS(local, face, lado, tipo), function(err, result) {
            if (err) throw err;
            // console.log(result);
        });
    });
};