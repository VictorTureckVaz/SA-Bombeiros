const db = require("../../../lib/db");
const { SUBMIT9 } = require("../../../database/queries");

module.exports = async (req, res) => {
    const {
        primeiroGrauCabeca, segundoGrauCabeca, terceiroGrauCabeca, primeiroGrauPescoco, segundoGrauPescoco, terceiroGrauPescoco, primeiroGrauTAnt, segundoGrauTAnt, terceiroGrauTAnt, primeiroGrauTPos, segundoGrauTPos, terceiroGrauTPos, primeiroGrauGenitalia, segundoGrauGenitalia, terceiroGrauGenitalia, primeiroGrauMid, segundoGrauMid, terceiroGrauMid, primeiroGrauMie, segundoGrauMie, terceiroGrauMie, primeiroGrauMsd, segundoGrauMsd, terceiroGrauMsd, primeiroGrauMse, segundoGrauMse, terceiroGrauMse,
            
        idReport
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT9(
            primeiroGrauCabeca, segundoGrauCabeca, terceiroGrauCabeca, primeiroGrauPescoco, segundoGrauPescoco, terceiroGrauPescoco, primeiroGrauTAnt, segundoGrauTAnt, terceiroGrauTAnt, primeiroGrauTPos, segundoGrauTPos, terceiroGrauTPos, primeiroGrauGenitalia, segundoGrauGenitalia, terceiroGrauGenitalia, primeiroGrauMid, segundoGrauMid, terceiroGrauMid, primeiroGrauMie, segundoGrauMie, terceiroGrauMie, primeiroGrauMsd, segundoGrauMsd, terceiroGrauMsd, primeiroGrauMse, segundoGrauMse, terceiroGrauMse,
            
            idReport
            ), function(err, result) {
            if (err) throw err;
            // console.log(result);
            res.send({result});
        });
    });
};