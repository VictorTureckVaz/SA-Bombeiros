const db = require("./../../../lib/db");

const { SUBMIT2 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        numUsb, numOc, despachante, kmFinal, codIr, codPs, codSia
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT2(
            numUsb, numOc, despachante, kmFinal, codIr, codPs, codSia
            ), function(err, result) {
            if (err) throw err;
            // console.log(result);
            res.send({result});
        });
    });
};