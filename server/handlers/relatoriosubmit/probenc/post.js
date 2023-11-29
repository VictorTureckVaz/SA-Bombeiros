const db = require("./../../../lib/db");

const { SUBMIT8 } =require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        psico, resp, diabetes, outrosProblemas, partoEmergencial, problemaGestante, hemorragiaExcessiva, aereo, clinico, emergencial, posTrauma, samu, semRemocao, outrosProblemaTransporte
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT8(
            psico, resp, diabetes, outrosProblemas, partoEmergencial, problemaGestante, hemorragiaExcessiva, aereo, clinico, emergencial, posTrauma, samu, semRemocao, outrosProblemaTransporte
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};