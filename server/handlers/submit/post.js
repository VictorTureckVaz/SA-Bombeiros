const db = require("./../../lib/db");

module.exports = async (req, res) => {
    console.log(req.body);
    
    const NomePac = req.body.NomePac;
    const nomeHosp = req.body.nomeHosp;
    const docPac = req.body.docPac;
    const idadePac = req.body.idadePac;
    const telefonePac = req.body.telefonePac;
    const local = req.body.local;
    const acompanhante = req.body.acompanhante;
    const idadeAcom = req.body.idadeAcom;
    const VitimaEra = req.body.VitimaEra;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(SUBMIT(
                NomePac, 
                nomeHosp, 
                docPac,
                idadePac,
                telefonePac,
                local,
                acompanhante,
                idadeAcom,
                VitimaEra
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
