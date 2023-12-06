const db = require("./../../../lib/db");

const { SUBMIT12 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        fezPreNatalValue, nomeMedico, possibilidadeDeComplicacoesValue, primeiroFilhoValue, filhos, dateContracoesInicio, dateContracoesDuracao, dateContracoesIntervalo, pressaoEvacuarValue, rupturaBolsaValue, feitoInspecaoValue, partoRealizadoValue, sexoBebeValue, nomeBebe, dateNascimento
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT12(
            fezPreNatalValue, nomeMedico, possibilidadeDeComplicacoesValue, primeiroFilhoValue, filhos, dateContracoesInicio, dateContracoesDuracao, dateContracoesIntervalo, pressaoEvacuarValue, rupturaBolsaValue, feitoInspecaoValue, partoRealizadoValue, sexoBebeValue, nomeBebe, dateNascimento
            ), function(err, result) {
            if (err) throw err;
            // console.log(result);
            res.send({result});
        });
    });
};