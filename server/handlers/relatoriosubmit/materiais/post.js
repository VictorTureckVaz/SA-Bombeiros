const db = require("./../../../lib/db.js");
const { SUBMIT14 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        tipo, nome, tamanho, quantidade, idReport
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT14(
            tipo, nome, tamanho, quantidade, idReport
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};