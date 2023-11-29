module.exports.TEST = () => {
    return `
        SELECT *
        FROM bombeiro
    `;
};

module.exports.LOGIN = (email, cpf) => {
    return `
        SELECT *
        FROM bombeiro
        WHERE email="${email}" OR cpf="${cpf}";
    `;
};

module.exports.CADASTRO = (nome, sobrenome, pass, email, cpf) => {
    return `INSERT INTO bombeiro (email, cpf, senha, nome, sobrenome) VALUES ("${email}", "${cpf}", "${pass}", "${nome}", "${sobrenome}");`;
    
};

module.exports.NULLQry = () => {
    return `INSERT INTO identificacao_do_paciente () VALUES ();`;
    
};












module.exports.SUBMIT11 = (sinaisSintomasAnamnese, aconteceuOutrasVezesValue, dateAconteceu, possuiProblemaDeSaudeValue, problemasDeSaude, fazUsoDeMedicacoesValue, medicacoes, dateUltimaMedicacao, ehAlergicoValue, alergia, ingeriuAlgoValue, dateIngestao) => {
    return `INSERT INTO anamnese_emergencial (Oque_aconteceu, Aconteceu_Outras_Vezes, A_Quanto_Tempo_Aconteceu, Problema_de_Saude, Quais_Problema_de_Saude, Usa_Medicacao, Ultima_Medicacao, Quais_Medicacao, Alergico, Especifique_Alergico, Ingeriu_Alimento6H, Ingeriu_Horas) 
    VALUES ("${aconteceuOutrasVezesValue}", "${dateAconteceu}", "${possuiProblemaDeSaudeValue}", "${problemasDeSaude}", "${fazUsoDeMedicacoesValue}", "${medicacoes}", "${dateUltimaMedicacao}", "${ehAlergicoValue}", "${alergia}", "${ingeriuAlgoValue}", "${dateIngestao}");`;
};

module.exports.SUBMIT7 = (abdomen, afundamento, agitacao, anginaPeito, apneia, bradicardia, bradipneia, broncoAspirando, cefaleia, convulsao, decorticacao, deformidade, descerebracao, desmaio, desvioTraqueia, dispneia, dorLocal, enfisemaSubcutaneo, extaseJugular, facePalida, hemorragiaInterna, hemorragiaExterna, hipertensao, nauseasVomito, nasoragia, obito, otorreia, ovace, paradaCardiaca, paradaRespiratoria, priapismo, pruridoPele, pupilasAnisocoria, pupilasIsocoria, pupilasMidriase, pupilasMiose, pupilasReagente, pupilasNaoReagente, sinalBattle, sinalGuaxinim, sudorese, taquipneia, taquicardia, tontura) => {
    return `INSERT INTO sinais_e_sintomas (Abdomen, Afundamento_Cranio, Agitacao, Angina_de_Peito, Apneia, Bradicardia, Bradipneia, Bronco_Aspirando, Cefaleia, Convulsao, Decorticao, Deformidade, Descerebracao, Desmaio, Desvio_de_Traqueia, Dispneia, Dor_Local, Enfisema_Subcutaneo, Estase_de_Jugular, Face_Palida, Hemorragia_Interna, Hemorragia_Externa, Hipertensao, Nauseas_e_Vomitos, Nasoragia, Obito, Otorreia, OVACE, Parada_Cardiaca, Parada_Respiratoria, Priapismo, Prurido_na_pele, Pupila_Anisocoria, Pupila_Isocoria, Pupila_Midriase, Pupila_Miose, Pupila_Reagente, Pupila_Nao_Reagente, Sinal_de_Battle, Sinal_de_Guaxinim, Sudorese, Taquipneia, Taquicardia, Tontura) VALUES (${abdomen}, ${afundamento}, ${agitacao}, ${anginaPeito}, ${apneia}, ${bradicardia}, ${bradipneia}, ${broncoAspirando}, ${cefaleia}, ${convulsao}, ${decorticacao}, ${deformidade}, ${descerebracao}, ${desmaio}, ${desvioTraqueia}, ${dispneia}, ${dorLocal}, ${enfisemaSubcutaneo}, ${extaseJugular}, ${facePalida}, ${hemorragiaInterna}, ${hemorragiaExterna}, ${hipertensao},             ${nauseasVomito},            ${nasoragia}, ${obito}, ${otorreia}, ${ovace}, ${paradaCardiaca}, ${paradaRespiratoria}, ${priapismo}, ${pruridoPele},      ${pupilasAnisocoria},      ${pupilasIsocoria}, ${pupilasMidriase}, ${pupilasMiose}, ${pupilasReagente}, ${pupilasNaoReagente}, ${sinalBattle}, ${sinalGuaxinim}, ${sudorese}, ${taquipneia}, ${taquicardia}, ${tontura});`;
};






module.exports.SUBMIT12 = (fezPreNatalValue, nomeMedico, possibilidadeDeComplicacoesValue, primeiroFilhoValue, filhos, dateContracoesInicio, dateContracoesDuracao, dateContracoesIntervalo, pressaoEvacuarValue, rupturaBolsaValue, feitoInspecaoValue, partoRealizadoValue, sexoBebeValue, nomeBebe, dateNascimento) => {
    return `INSERT INTO anamnese_gestacional (Pre_natal, Nome_do_Medico, Possibilidade_Complicacoes, Primeiro_Filho, Quantos_Filhos, Horas_Contracoes, Duracao_Contracao_em_Seg, Intervalo_Contracao_em_Min, Pressao_ou_Evacuar, Ruptura_Bolsa, Inspecao_Visual, Parto_Realizado, Nascimento, Sexo_Bebe, Nome_Bebe) 
    VALUES ("${fezPreNatalValue}", "${nomeMedico}", "${possibilidadeDeComplicacoesValue}", "${primeiroFilhoValue}", "${filhos}", "${dateContracoesInicio}", "${dateContracoesDuracao}", "${dateContracoesIntervalo}", "${pressaoEvacuarValue}", "${rupturaBolsaValue}", "${feitoInspecaoValue}", "${partoRealizadoValue}", "${dateNascimento}", "${sexoBebeValue}", "${nomeBebe}");`;
};//ACHO Q VAI DAR MERDA ISSO!

module.exports.SUBMIT5 = (aberturaOcular, respostaVerbal, respostaMotora) => {
    return `INSERT INTO avaliacao_do_paciente (Abertura_Ocular, Resposta_verbal, Resposta_motora) 
    VALUES ("${aberturaOcular}", "${respostaMotora}", "${respostaVerbal}");`;
};

// module.exports.SUBMIT6 = (presMax, presMin, pulso, respiracao, sat, temperatura, hgt, perfusaoValue, normalidade) => {
//     return `INSERT INTO  (Abertura_Ocular, Resposta_verbal, Resposta_motora) 
//     VALUES ("${presMax}", "${presMin}", "${pulso}", "${respiracao}", "${sat}", "${temperatura}", "${hgt}", "${perfusaoValue}", "${normalidade}");`;
// };


module.exports.SUBMIT2 = (numUsb, numOc, despachante, kmFinal, codIr, codPs, codSia) => {
return `INSERT INTO informacao_da_ambulancia (N_USB, N_Ocorrencia, Despachante, KM_Final, Cod_IR, Cod_PS, Cod_SIA) 
    VALUES ("${numUsb}", "${numOc}", "${despachante}", ${kmFinal}, ${codIr}, ${codPs}, "${codSia}");`;
};

module.exports.SUBMIT4 = (decisao, transporteValue, socorristaA, socorristaB, socorristaC, motorista, demandante) => {
return `INSERT INTO conducao_e_transporte (Forma_de_conducao, Decisao_de_Transporte, Motorista, Socorrista1, Socorrista2,	Socorrista3, Demandante) 
    VALUES ("${transporteValue}", "${decisao}", "${motorista}", "${socorristaA}", "${socorristaB}", "${socorristaC}", "${demandante}");`;
};

module.exports.SUBMIT13 = (ObjetoRecolhido, DisturbioComportamento, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido) => {
    return `INSERT INTO avaliacao_cinematica (Distubio_Comportamento, Encontrado_de_Capacete, Encontrado_de_Cinto, Para_Brisas_Avariado, Caminhando_na_Cena, Painel_Avariado, Volante_Torcido, Objetos_Recolhidos) 
    VALUES "(${DisturbioComportamento}", "${EncontradoCapacete}", "${EncontradoCinto}", "${ParaBrisasAvariado}", "${CaminhandoCena}", "${PainelAvariado}", "${PainelAvariado}", "${ObjetoRecolhido}",);`;
};

module.exports.SUBMIT9 = (primeiroGrauCabeca, segundoGrauCabeca, terceiroGrauCabeca, primeiroGrauPescoco, segundoGrauPescoco, terceiroGrauPescoco, primeiroGrauTAnt, segundoGrauTAnt, terceiroGrauTAnt, primeiroGrauTPos, segundoGrauTPos, terceiroGrauTPos, primeiroGrauGenitalia, segundoGrauGenitalia, terceiroGrauGenitalia, primeiroGrauMid, segundoGrauMid, terceiroGrauMid, primeiroGrauMie, segundoGrauMie, terceiroGrauMie, primeiroGrauMsd, segundoGrauMsd, terceiroGrauMsd, primeiroGrauMse, segundoGrauMse, terceiroGrauMse, idReport) => {
    return `INSERT INTO localizacao_dos_traumas_queimaduras (1G_Cabeca    1G_Pescoco, 1G_T.ANT, 1G_T.POS, 1G_Genitalia, 1G_MID, 1G_MIE, 1G_MSD, 1G_MSE, 2G_Cabeca, 2G_Pescoco, 2G_T.ANT, 2G_T.POS, 2G_Genitalia, 2G_MID, 2G_MIE, 2G_MSD, 2G_MSE, 3G_Cabeca, 3G_Pescoco, 3G_T.ANT, 3G_T.POS, 3G_Genitalia, 3G_MID, 3G_MIE, 3G_MSD, 3G_MSE) 
    VALUES ("${primeiroGrauCabeca}", "${primeiroGrauPescoco}", "${primeiroGrauTAnt}" , "${primeiroGrauTPos}", "${primeiroGrauGenitalia}", "${primeiroGrauMid}", "${primeiroGrauMie}", "${primeiroGrauMsd}" , "${primeiroGrauMse}", "${segundoGrauCabeca}", "${segundoGrauPescoco}", "${segundoGrauTAnt}", "${segundoGrauTPos}" , "${segundoGrauGenitalia}", "${segundoGrauMid}", "${segundoGrauMie}", "${segundoGrauMsd}", "${segundoGrauMse}" , "${terceiroGrauCabeca}", "${terceiroGrauPescoco}", "${terceiroGrauTAnt}", "${terceiroGrauTPos}", "${terceiroGrauGenitalia}" , "${terceiroGrauMid}", "${terceiroGrauMie}", "${terceiroGrauMsd}", "${terceiroGrauMse}");
    `;
};

module.exports.SUBMIT16 = (
    localF, lado, face, tipo, IdReport
) => {
    return `
        INSERT INTO localizacao_dos_traumas_llft (Local, Lado, Face, Tipo, fk_identificacao_do_paciente) VALUES ("${localF}", "${lado}", "${face}", "${tipo}", "${IdReport}");
    `;
};

module.exports.SUBMIT3 = (
    tipoOc
) => {
    return `
        INSERT INTO tipo_de_ocorrencia (Tipo_Oc) VALUES ("${tipoOc}");
    `;
};

module.exports.SUBMIT14 = (
    tipo, nome, tamanho, quantidade, idReport
) => {
    return `
        INSERT INTO materiais_utilizados (tipo, material, tamanho, quantidade, fk_identificacao_do_paciente) VALUES ("${tipo}", "${nome}", "${tamanho}", "${quantidade}", "${idReport}");
    `;
};

module.exports.SUBMIT17 = (
    localF, lado, face, tipo, IdReport
) => {
    return `
        INSERT INTO localizacao_dos_traumas_llft (Local, Lado, Face, Tipo, fk_paciente) VALUES ("${localF}", "${lado}", "${face}", "${tipo}", "${IdReport}");
    `;
};

module.exports.SUBMIT1 = (
    nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, vitimaEraValue, sexoPac
) => {
    console.log(typeof idadePac);
    return `
        INSERT INTO identificacao_do_paciente (PacienteNome, PacienteSexo, NomeHospital, PacienteIdade, PacienteRGouCPF, PacienteFone, AcompanhanteNome, AcompanhanteIdade, LocalDaOcorrencia, Vitima_era
        ) VALUES ("${nomePac}", "${sexoPac}", "${nomeHosp}", ${idadePac}, "${docPac}", "${telefonePac}", "${acompanhante}", ${idadeAcom}, "${local}", "${vitimaEraValue}");
    `;
};

module.exports.SUBMIT15 = (obs) => {
    return `
        INSERT INTO observacoes_importantes (Observacoes) VALUES ("${obs}");
    `;
};

module.exports.SUBMIT8 = (
    psico, resp, diabetes, outrosProblemas, partoEmergencial, problemaGestante, hemorragiaExcessiva, aereo, clinico, emergencial, posTrauma, samu, semRemocao, outrosProblemaTransporte
) => {
    return `
        INSERT INTO Problemas_Encontrados_Suspeitos (Psiquiatrico, Parto_Emergencial, Gestante, Hemorragia_Excessiva, Aerio, Clinico, Emergencial, Pos_trauma, SAMU, Sem_Remocao, Transporte_Outros, Outros, Diabetes, Respiratorio) VALUES (${psico}, ${partoEmergencial}, ${problemaGestante}, ${hemorragiaExcessiva}, ${aereo}, ${clinico}, ${emergencial}, ${posTrauma}, ${samu}, ${semRemocao}, "${outrosProblemaTransporte}", "${outrosProblemas}", ${diabetes}, ${resp});
    `;
};

module.exports.SUBMIT10 = (
    Aspiracao, AvalInicial, AvalDirigida, AvalContinuada, ChaveRautek, CanulaGuedel, DesobstrucaoVA, EmpregoDEA, GerenciamentoRiscos, LimpezaFerimento, Curativos, Compressivo, Encravamento, Ocular, Queimadura, Simples, TresPontas, Imobilizacoes, MacaRodas, MacaRigida, Ponte, RetiradoCapacete, Rcp, Rolamento90, Rolamento180, TomadaDecisao, TratadoChoque, UsoCanula, UsoColar, UsoKED, UsoTTF, VentSuporte, Oxigenoterapia, Reanimador, Meios, Auxiliares, OutrosProcedimentos
) => {
    return `
        INSERT INTO procedimentos_efetuados (Aspiracao, Avaliacao_Inicial, Avaliacao_Digerida, Avaliacao_Continuada, Chave_de_Rautek, Canula_de_Guedel, Desobstrucao_de_VA, Emprego_de_DEA, Gerenciamento_de_Riscos, Limpeza_de_Ferimentos, Curativos, Compressivo, Encravamento, Ocular, Queimadura, Simples, 3_Pontas, Imobilizacoes, Membro_Inferior_Direito, Membro_Inferior_Esquerdo, Membro_Superior_Direito, Membro_Superior_Esquerdo, Quadril, Cervical, Maca_sobre_Rodas, Maca_Rigida, Ponte, Retirado_Capacete, RCP, Rolamento_90, Rolamento_180, Tomada_Decisao, Tratado_Choque, Uso_de_Canula, Uso_Colar, Tamanho, USO_KED, USO_TTF, Ventilacao_Suporte, Oxigenoterapia, Oxigenoterapia_LPM, Reanimador, Reanimador_LPM, Celesc, Civil, Militar, PRE, PRF, Defesa_Civil, IGP_ou_PC, SAMU_USA, SAMU_USB, SAMU_Outros, CIT, Outro) 
    VALUE(${Aspiracao}, ${AvalInicial}, ${AvalDirigida}, ${AvalContinuada}, ${ChaveRautek}, ${CanulaGuedel}, ${DesobstrucaoVA}, ${EmpregoDEA}, ${GerenciamentoRiscos}, ${LimpezaFerimento}, ${Curativos}, ${Compressivo}, ${Encravamento}, ${Ocular}, ${Queimadura}, ${Simples}, ${TresPontas}, ${Imobilizacoes}, ${MacaRodas}, ${MacaRigida}, ${Ponte}, ${RetiradoCapacete}, ${Rcp}, ${Rolamento90}, ${Rolamento180}, ${TomadaDecisao}, ${TratadoChoque}, ${UsoCanula}, ${UsoColar}, ${UsoKED}, ${UsoTTF}, ${VentSuporte}, ${Oxigenoterapia}, ${Reanimador}, ${Meios}, ${Auxiliares}, "${OutrosProcedimentos}");`;
};
