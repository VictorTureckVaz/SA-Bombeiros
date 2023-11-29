const db = require("./../../../lib/db");

const { SUBMIT7 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        abdomen, afundamento, agitacao, amnesia, anginaPeito, apneia, bradicardia, bradipneia, broncoAspirando, cefaleia, convulsao, decorticacao, deformidade, descerebracao, desmaio, desvioTraqueia, dispneia, dorLocal, enfisemaSubcutaneo, extaseJugular, facePalida, hemorragiaInterna, hemorragiaExterna, hipertensão, nauseasVomito, nasoragia, obito, otorreia, ovace, paradaCardiaca, paradaRespiratoria, priapismo, pruridoPele, pupilasAnisocori, pupilasIsocoria, pupilasMidriase, pupilasMiose, pupilasReagente, pupilasNaoReagente, sinalBattle, sinalGuaxinim, sudorese, taquipneia, taquicardia, tontura, outros
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT7(
            abdomen, afundamento, agitacao, amnesia, anginaPeito, apneia, bradicardia, bradipneia, broncoAspirando, cefaleia, convulsao, decorticacao, deformidade, descerebracao, desmaio, desvioTraqueia, dispneia, dorLocal, enfisemaSubcutaneo, extaseJugular, facePalida, hemorragiaInterna, hemorragiaExterna, hipertensão, nauseasVomito, nasoragia, obito, otorreia, ovace, paradaCardiaca, paradaRespiratoria, priapismo, pruridoPele, pupilasAnisocori, pupilasIsocoria, pupilasMidriase, pupilasMiose, pupilasReagente, pupilasNaoReagente, sinalBattle, sinalGuaxinim, sudorese, taquipneia, taquicardia, tontura, outros
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};