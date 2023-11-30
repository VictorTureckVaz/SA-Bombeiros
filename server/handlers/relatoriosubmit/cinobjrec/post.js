const db = require("./../../../lib/db");

const { SUBMIT13 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        DisturbioComportamento, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido, ObjetoRecolhido
    } = req.body;
    

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT13(
            DisturbioComportamento, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido, ObjetoRecolhido
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};