// const db = require("./../../lib/db");
// const { SUBMIT } = require("./../../database/queries.js");
// import { OcorrenciaContext } from "../../../src/context/ocorrenciaContext.js";
// const { OcorrenciaContext } = require("../../../src/context/ocorrenciaContext");

// const context = useContext(OcorrenciaContext);

// const jsonString = `{${Object.entries(context).map(([key, value]) => 
//     `${key}:${JSON.stringify(value.state)}`).join(',\n')}}`;

// module.exports = async (req, res) => {
//     try {
//         const result = await new Promise((resolve, reject) => {
//             const {
//                 tipoOc, decisao, transporteName, transporteValue, socorristaA, 
//                 socorristaB,socorristaC, motorista, demandante, sexoPac, numUsb, 
//                 numOc, despachante, kmFinal, codSia, codIr, codPs, nomePac, 
//                 nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, 
//                 idadeAcom, vitimaEraName, vitimaEraValue, obs, aberturaOcular, 
//                 respostaVerbal, respostaMotora, possuiProblemaDeSaudeName, 
//                 possuiProblemaDeSaudeValue, aconteceuOutrasVezesName, 
//                 aconteceuOutrasVezesValue, problemasDeSaude, fazUsoDeMedicacoesValue, 
//                 fazUsoDeMedicacoesName, medicacoes, ehAlergicoName, ehAlergicoValue, 
//                 alergia, ingeriuAlgoName, ingeriuAlgoValue, fezPreNatalName, 
//                 fezPreNatalValue, nomeMedico, partoRealizado, filhos, nomeBebe,
//                 sexoBebe, primeiroFilhoName, primeiroFilhoValue
//             } = jsonString;

//             db.query(SUBMIT(
//                 tipoOc, decisao, transporteName, transporteValue, socorristaA, socorristaB,
//                 socorristaC, motorista, demandante, sexoPac, numUsb, numOc, despachante,
//                 kmFinal, codSia, codIr, codPs, nomePac, nomeHosp, docPac, idadePac,
//                 telefonePac, local, acompanhante, idadeAcom, vitimaEraName, vitimaEraValue,
//                 obs, aberturaOcular, respostaVerbal, respostaMotora, possuiProblemaDeSaudeName,
//                 possuiProblemaDeSaudeValue, aconteceuOutrasVezesName, aconteceuOutrasVezesValue,
//                 problemasDeSaude, fazUsoDeMedicacoesValue, fazUsoDeMedicacoesName, medicacoes,
//                 ehAlergicoName, ehAlergicoValue, alergia, ingeriuAlgoName, ingeriuAlgoValue,
//                 fezPreNatalName, fezPreNatalValue, nomeMedico, partoRealizado, filhos, nomeBebe,
//                 sexoBebe, primeiroFilhoName, primeiroFilhoValue
//             ), function(err, result) {
//                 if (err) {
//                     console.log(err);
//                     reject(err); // Rejeita a promessa em caso de erro
//                 } else {
//                     resolve(result); // Resolve a promessa com o resultado bem-sucedido
//                 }
//             });
//         });

//         // Se chegamos até aqui, a operação no banco de dados foi bem-sucedida
//         // Você pode verificar o valor de 'result' para tomar a ação apropriada

//         if (result) {
//             return res.send("Enviado com sucesso");
//         } else {
//             return res.send("Erro ao enviar os dados");
//         }
//     } catch (error) {
//         return res.send("Erro na consulta ao banco de dados: " + error);
//     }
// };
const db = require("./../../lib/db");
const { SUBMIT } = require("./../../database/queries.js");

module.exports = async (req, res) => {
    try {
        const result = await new Promise((resolve, reject) => {
            const {
                tipoOc, decisao, transporteName, transporteValue, socorristaA, 
                socorristaB,socorristaC, motorista, demandante, sexoPac, numUsb, 
                numOc, despachante, kmFinal, codSia, codIr, codPs, nomePac, 
                nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, 
                idadeAcom, vitimaEraName, vitimaEraValue, obs, aberturaOcular, 
                respostaVerbal, respostaMotora, possuiProblemaDeSaudeName, 
                possuiProblemaDeSaudeValue, aconteceuOutrasVezesName, 
                aconteceuOutrasVezesValue, problemasDeSaude, fazUsoDeMedicacoesValue, 
                fazUsoDeMedicacoesName, medicacoes, ehAlergicoName, ehAlergicoValue, 
                alergia, ingeriuAlgoName, ingeriuAlgoValue, fezPreNatalName, 
                fezPreNatalValue, nomeMedico, partoRealizado, filhos, nomeBebe,
                sexoBebe, primeiroFilhoName, primeiroFilhoValue
            } = context;

            db.query(SUBMIT(
                tipoOc, decisao, transporteName, transporteValue, socorristaA, socorristaB,
                socorristaC, motorista, demandante, sexoPac, numUsb, numOc, despachante,
                kmFinal, codSia, codIr, codPs, nomePac, nomeHosp, docPac, idadePac,
                telefonePac, local, acompanhante, idadeAcom, vitimaEraName, vitimaEraValue,
                obs, aberturaOcular, respostaVerbal, respostaMotora, possuiProblemaDeSaudeName,
                possuiProblemaDeSaudeValue, aconteceuOutrasVezesName, aconteceuOutrasVezesValue,
                problemasDeSaude, fazUsoDeMedicacoesValue, fazUsoDeMedicacoesName, medicacoes,
                ehAlergicoName, ehAlergicoValue, alergia, ingeriuAlgoName, ingeriuAlgoValue,
                fezPreNatalName, fezPreNatalValue, nomeMedico, partoRealizado, filhos, nomeBebe,
                sexoBebe, primeiroFilhoName, primeiroFilhoValue
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