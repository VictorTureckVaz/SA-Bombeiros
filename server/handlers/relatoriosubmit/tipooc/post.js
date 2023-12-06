const db = require("./../../../lib/db");

const { SUBMIT3 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        tipoOc, idOcorencia
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT3(
            tipoOc, idOcorencia
            ), function(err, result) {
            if (err) throw err;
            // console.log(result);
            res.send({result});
        });
    });
};