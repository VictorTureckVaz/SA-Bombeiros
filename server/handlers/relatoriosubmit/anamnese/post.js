const db = require("./../../../lib/db");

const { SUBMIT11 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        sinaisSintomasAnamnese, aconteceuOutrasVezesValue, dateAconteceu, possuiProblemaDeSaudeValue, problemasDeSaude, fazUsoDeMedicacoesValue, medicacoes, dateUltimaMedicacao, ehAlergicoValue, alergia, ingeriuAlgoValue, dateIngestao
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT11(
            sinaisSintomasAnamnese, aconteceuOutrasVezesValue, dateAconteceu, possuiProblemaDeSaudeValue, problemasDeSaude, fazUsoDeMedicacoesValue, medicacoes, dateUltimaMedicacao, ehAlergicoValue, alergia, ingeriuAlgoValue, dateIngestao
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};