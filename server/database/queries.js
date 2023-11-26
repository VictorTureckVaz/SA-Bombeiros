module.exports.TEST = () => {
    return `
        SELECT *
        FROM bombeiro
    `;
};

module.exports.GET_BOMBEIRO = (email, cpf) => {
    return `
        SELECT *
        FROM bombeiro
        WHERE email="${email}" OR cpf="${cpf}";
    `;
};

module.exports.CADASTRO = (nome, sobrenome, pass, email, cpf) => {
    return `INSERT INTO bombeiro (email, cpf, senha, nome, sobrenome) VALUES ("${email}", "${cpf}", "${pass}", "${nome}", "${sobrenome}");`;
    
};

module.exports.SUBMIT = (
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
) => {
    return `
        INSERT INTO identificacao_do_paciente (
            PacienteNome, 
            NomeHospital, 
            PacienteIdade, 
            PacienteRGouCPF, 
            PacienteFone, 
            AcompanhanteNome, 
            AcompanhanteIdade, 
            LocalDaOcorrencia, 
            Vitima_era
        ) VALUES (
            "${nomePac}",
            "${nomeHosp}",
            "${idadePac}",
            "${docPac}",
            "${telefonePac}",
            "${acompanhante}",
            "${idadeAcom}",
            "${local}",
            "${vitimaEra}"
        );
    `;
};
