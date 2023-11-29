const db = require("./../../../lib/db");

const { SUBMIT13 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        ObjetoRecolhido, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT13(
            ObjetoRecolhido, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};