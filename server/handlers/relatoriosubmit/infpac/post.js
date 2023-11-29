const db = require("./../../../lib/db");
const { SUBMIT1 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, vitimaEraValue, sexoPac
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT1(
            nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, vitimaEraValue, sexoPac
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};