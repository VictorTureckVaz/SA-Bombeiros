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
    nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, vitimaEra
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
