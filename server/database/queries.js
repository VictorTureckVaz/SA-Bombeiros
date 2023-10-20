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

module.exports.SUBMIT = (
    NomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, VitimaEra
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
                ${NomePac}, 
                ${nomeHosp}, 
                ${idadePac}, 
                ${docPac}, 
                ${telefonePac}, 
                ${acompanhante}, 
                ${idadeAcom}, 
                ${local}, 
                ${VitimaEra}
            )
    `;
};