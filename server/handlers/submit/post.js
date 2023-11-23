const db = require("./../../lib/db");
const { SUBMIT } = require("./../../database/queries.js");

module.exports = async (req, res) => {
    console.log(req.body);

    const {
        nomePac,
        nomeHosp,
        docPac,
        idadePac,
        telefonePac,
        local,
        acompanhante,
        idadeAcom,
        vitimaEra
    } = req.body;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(SUBMIT(
                nomePac,
                nomeHosp,
                docPac,
                idadePac,
                telefonePac,
                local,
                acompanhante,
                idadeAcom,
                vitimaEra
            ), function(err, result) {
                if (err) {
                    console.log(err);
                    reject(err); // Rejeita a promessa em caso de erro
                } else {
                    resolve(result); // Resolve a promessa com o resultado bem-sucedido
                }
            });
        });

        // Se chegamos até aqui, a operação no banco de dados foi bem-sucedida
        // Você pode verificar o valor de 'result' para tomar a ação apropriada

        if (result) {
            return res.send("Enviado com sucesso");
        } else {
            return res.send("Erro ao enviar os dados");
        }
    } catch (error) {
        return res.send("Erro na consulta ao banco de dados: " + error);
    }
};
