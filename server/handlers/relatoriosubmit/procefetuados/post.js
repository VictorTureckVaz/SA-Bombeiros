const db = require("./../../../lib/db");

const { SUBMIT10 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        Aspiracao, AvalInicial, AvalDirigida, AvalContinuada, ChaveRautek, CanulaGuedel, DesobstrucaoVA, EmpregoDEA, GerenciamentoRiscos, LimpezaFerimento, Curativos, Compressivo, Encravamento, Ocular, Queimadura, Simples, TresPontas, Imobilizacoes, MacaRodas, MacaRigida, Ponte, RetiradoCapacete, Rcp, Rolamento90, Rolamento180, TomadaDecisao, TratadoChoque, UsoCanula, UsoColar, UsoKED, UsoTTF, VentSuporte, Oxigenoterapia, Reanimador, Meios, Auxiliares, OutrosProcedimentos
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT10(
            Aspiracao, AvalInicial, AvalDirigida, AvalContinuada, ChaveRautek, CanulaGuedel, DesobstrucaoVA, EmpregoDEA, GerenciamentoRiscos, LimpezaFerimento, Curativos, Compressivo, Encravamento, Ocular, Queimadura, Simples, TresPontas, Imobilizacoes, MacaRodas, MacaRigida, Ponte, RetiradoCapacete, Rcp, Rolamento90, Rolamento180, TomadaDecisao, TratadoChoque, UsoCanula, UsoColar, UsoKED, UsoTTF, VentSuporte, Oxigenoterapia, Reanimador, Meios, Auxiliares, OutrosProcedimentos
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};