const db = require("./../../../lib/db");

const { SUBMIT5 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        aberturaOcular, respostaVerbal, respostaMotora
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT5(
            aberturaOcular, respostaVerbal, respostaMotora
            ), function(err, result) {
            if (err) throw err;
            // console.log(result);
            res.send({result});
        });
    });
};