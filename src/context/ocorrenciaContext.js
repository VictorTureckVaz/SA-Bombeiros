import { createContext, useEffect, useState } from "react";

export const OcorrenciaContext = createContext();

export const OcorrenciaProvider = ({ children }) => {

     const [idReport, setIdReport] = useState(null);
     const [ehAdm, setEhAdm] = useState(false);
     const [homePage, setHomePage] = useState(null);
     
     const [currentPage, setCurrentPage] = useState("home");

     const [tipoOc, setTipoOc] = useState(null);
     const [decisao, setDecisao] = useState(null);
     const [transporteName, setTransporteName] = useState(null);
     const [transporteValue, setTransporteValue] = useState(null);
     const [socorristaA, setSocorristaA] = useState(null);
     const [socorristaB, setSocorristaB] = useState(null);
     const [socorristaC, setSocorristaC] = useState(null);
     const [motorista, setMotorista] = useState(null);
     const [demandante, setDemandante] = useState(null);
     const [outroTipoOc, setOutroTipoOc] = useState(null);

     const [numUsb, setNumUsb] = useState(null);
     const [numOc, setNumOc] = useState(null);
     const [despachante, setDespachante] = useState(null);
     const [kmFinal, setKmFinal] = useState(null);
     const [codSia, setCodSia] = useState(null);
     const [codIr, setCodIr] = useState(0);
     const [codPs, setCodPs] = useState(0);

     const [nomePac, setNomePac] = useState(null);
     const [nomeHosp, setNomeHosp] = useState(null);
     const [docPac, setDocPac] = useState(null);
     const [idadePac, setIdadePac] = useState(null);
     const [telefonePac, setTelefonePac] = useState(null);
     const [local, setLocal] = useState(null);
     const [acompanhante, setAcompanhante] = useState(null);
     const [idadeAcom, setIdadeAcom] = useState(null);
     const [vitimaEraName, setVitimaEraName] = useState(null);
     const [vitimaEraValue, setVitimaEraValue] = useState(null);

     const [presMax, setPresMax] = useState(null);
     const [presMin, setPresMin] = useState(null);
     const [pulso, setPulso] = useState(null);
     const [respiracao, setRespiracao] = useState(null);
     const [sat, setSat] = useState(null);
     const [perfusaoName, setPerfusaoName] = useState(null);
     const [perfusaoValue, setPerfusaoValue] = useState(null);
     const [normalidade, setNormalidade] = useState(null);
     const [hgt, setHgt] = useState(null);
     const [temperatura, setTemperatura] = useState(null);

     const [ferimentos, setFerimentos] = useState([
          
     ]);
     const [ferimento, setFerimento] = useState([
          
     ]);

     const [possuiQueimadurasValue, setPossuiQueimadurasValue] = useState(null);
     const [possuiQueimadurasName, setPossuiQueimadurasName] = useState(null);

     const [primeiroGrauCabeca, setPrimeiroGrauCabeca] = useState(null);
     const [segundoGrauCabeca, setSegundoGrauCabeca] = useState(null);
     const [terceiroGrauCabeca, setTerceiroGrauCabeca] = useState(null);
     const [primeiroGrauPescoco, setPrimeiroGrauPescoco] = useState(null);
     const [segundoGrauPescoco, setSegundoGrauPescoco] = useState(null);
     const [terceiroGrauPescoco, setTerceiroGrauPescoco] = useState(null);
     const [primeiroGrauTAnt, setPrimeiroGrauTAnt] = useState(null);
     const [segundoGrauTAnt, setSegundoGrauTAnt] = useState(null);
     const [terceiroGrauTAnt, setTerceiroGrauTAnt] = useState(null);
     const [primeiroGrauTPos, setPrimeiroGrauTPos] = useState(null);
     const [segundoGrauTPos, setSegundoGrauTPos] = useState(null);
     const [terceiroGrauTPos, setTerceiroGrauTPos] = useState(null);
     const [primeiroGrauGenitalia, setPrimeiroGrauGenitalia] = useState(null);
     const [segundoGrauGenitalia, setSegundoGrauGenitalia] = useState(null);
     const [terceiroGrauGenitalia, setTerceiroGrauGenitalia] = useState(null);
     const [primeiroGrauMid, setPrimeiroGrauMid] = useState(null);
     const [segundoGrauMid, setSegundoGrauMid] = useState(null);
     const [terceiroGrauMid, setTerceiroGrauMid] = useState(null);
     const [primeiroGrauMie, setPrimeiroGrauMie] = useState(null);
     const [segundoGrauMie, setSegundoGrauMie] = useState(null);
     const [terceiroGrauMie, setTerceiroGrauMie] = useState(null);
     const [primeiroGrauMsd, setPrimeiroGrauMsd] = useState(null);
     const [segundoGrauMsd, setSegundoGrauMsd] = useState(null);
     const [terceiroGrauMsd, setTerceiroGrauMsd] = useState(null);
     const [primeiroGrauMse, setPrimeiroGrauMse] = useState(null);
     const [segundoGrauMse, setSegundoGrauMse] = useState(null);
     const [terceiroGrauMse, setTerceiroGrauMse] = useState(null);

     const [materials, setMaterials] = useState([]);


     const [aberturaOcular, setAberturaOcular] = useState(0);
     const [respostaVerbal, setRespostaVerbal] = useState(0); 
     const [respostaMotora, setRespostaMotora] = useState(0); 

     const [possuiProblemaDeSaudeName, setPossuiProblemaDeSaudeName] = useState(null);
     const [possuiProblemaDeSaudeValue, setPossuiProblemaDeSaudeValue] = useState(null);
     const [problemasDeSaude, setProblemasDeSaude] = useState(null);
     const [aconteceuOutrasVezesName, setAconteceuOutrasVezesName] = useState(null);
     const [aconteceuOutrasVezesValue, setAconteceuOutrasVezesValue] = useState(null);
     const [fazUsoDeMedicacoesName, setFazUsoDeMedicacoesName] = useState(null);
     const [fazUsoDeMedicacoesValue, setFazUsoDeMedicacoesValue] = useState(null);
     const [medicacoes, setMedicacoes] = useState(null);
     const [ehAlergicoName, setEhAlergicoName] = useState(null);
     const [ehAlergicoValue, setEhAlergicoValue] = useState(null);
     const [alergia, setAlergia] = useState(null);
     const [ingeriuAlgoName, setIngeriuAlgoName] = useState(null);
     const [ingeriuAlgoValue, setIngeriuAlgoValue] = useState(null);
     const [dateIngestao, setDateIngestao] = useState(new Date());
     const [showIngestao, setShowIngestao] = useState(false);
     const [dateAconteceu, setDateAconteceu] = useState(new Date());
     const [showAconteceu, setShowAconteceu] = useState(false);
     const [dateUltimaMedicacao, setDateUltimaMedicacao] = useState(new Date());
     const [showUltimaMedicacao, setShowUltimaMedicacao] = useState(false);
     const [sinaisSintomasAnamnese, setSinaisSintomasAnamnese] = useState(null);
     const [DisturbioComportamento, setDisturbioComportamento] = useState(null);
     


     const [nomeMedico, setNomeMedico] = useState(null);
     const [fezPreNatalName, setFezPreNatalName] = useState(null);
     const [fezPreNatalValue, setFezPreNatalValue] = useState(null);
     const [partoRealizadoName, setPartoRealizadoName] = useState(null);
     const [partoRealizadoValue, setPartoRealizadoValue] = useState(null);
     const [nomeBebe, setNomeBebe] = useState(null);
     const [sexoBebeValue, setSexoBebeValue] = useState(null);
     const [sexoBebeName, setSexoBebeName] = useState(null);
     const [filhos, setFilhos] = useState(0);
     const [primeiroFilhoName, setPrimeiroFilhoName] = useState(null);
     const [primeiroFilhoValue, setPrimeiroFilhoValue] = useState(null);
     const [sexoPac, setSexoPac] = useState(null);
     const [feitoInspecaoName, setFeitoInspecaoName] = useState(null);
     const [feitoInspecaoValue, setFeitoInspecaoValue] = useState(null);
     const [rupturaBolsaName, setRupturaBolsaName] = useState(null);
     const [rupturaBolsaValue, setRupturaBolsaValue] = useState(null);
     const [dateContracoesInicio, setDateContracoesInicio] = useState(new Date());
     const [showContracoesInicio, setShowContracoesInicio] = useState(false);
     const [dateContracoesDuracao, setDateContracoesDuracao] = useState(new Date());
     const [showContracoesDuracao, setShowContracoesDuracao] = useState(false);
     const [dateContracoesIntervalo, setDateContracoesIntervalo] = useState(new Date());
     const [showContracoesIntervalo, setShowContracoesIntervalo] = useState(false);
     const [dateNascimento, setDateNascimento] = useState(new Date());
     const [showNascimento, setShowNascimento] = useState(false);
     const [mode, setMode] = useState('date');



     const [pressaoEvacuarValue, setPressaoEvacuarValue] = useState(null);
     const [pressaoEvacuarName, setPressaoEvacuarName] = useState(null);
     const [possibilidadeDeComplicacoesValue, setPossibilidadeDeComplicacoesValue] = useState(null);
     const [possibilidadeDeComplicacoesName, setPossibilidadeDeComplicacoesName] = useState(null); 

     const [abdomen, setAbdomen] = useState(false);
     const [afundamento, setAfundamento] = useState(false);
     const [agitacao, setAgitacao] = useState(false);
     const [amnesia, setAmnesia] = useState(false);
     const [anginaPeito, setAnginaPeito] = useState(false);
     const [apneia, setApneia] = useState(false);
     const [bradicardia, setBradicardia] = useState(false);
     const [bradipneia, setBradipneia] = useState(false);
     const [broncoAspirando, setBroncoAspirando] = useState(false);
     const [cefaleia, setCefaleia] = useState(false);
     const [convulsao, setConvulsao] = useState(false);
     const [decorticacao, setDecorticacao] = useState(false);
     const [deformidade, setDeformidade] = useState(false);
     const [descerebracao, setDescerebracao] = useState(false);
     const [desmaio, setDesmaio] = useState(false);
     const [desvioTraqueia, setDesvioTraqueia] = useState(false);
     const [dispneia, setDispneia] = useState(false);
     const [dorLocal, setDorLocal] = useState(false);
     const [enfisemaSubcutaneo, setEnfisemaSubcutaneo] = useState(false);
     const [extaseJugular, setExtaseJugular] = useState(false);
     const [facePalida, setFacePalida] = useState(false);
     const [hemorragiaInterna, setHemorragiaInterna] = useState(false);
     const [hemorragiaExterna, setHemorragiaExterna] = useState(false);
     const [hipertensao, setHipertensao] = useState(false);
     const [nauseasVomito, setNauseasVomito] = useState(false);
     const [nasoragia, setNasoragia] = useState(false);
     const [obito, setObito] = useState(false);
     const [otorreia, setOtorreia] = useState(false);
     const [ovace, setOvace] = useState(false);
     const [paradaCardiaca, setParadaCardiaca] = useState(false);
     const [paradaRespiratoria, setParadaRespiratoria] = useState(false);
     const [priapismo, setPriapismo] = useState(false);
     const [pruridoPele, setPruridoPele] = useState(false);
     const [pupilasAnisocoria, setPupilasAnisocoria] = useState(false);
     const [pupilasIsocoria, setPupilasIsocoria] = useState(false);
     const [pupilasMidriase, setPupilasMidriase] = useState(false);
     const [pupilasMiose, setPupilasMiose] = useState(false);
     const [pupilasReagente, setPupilasReagente] = useState(false);
     const [pupilasNaoReagente, setPupilasNaoReagente] = useState(false);
     const [sinalBattle, setSinalBattle] = useState(false);
     const [sinalGuaxinim, setSinalGuaxinim] = useState(false);
     const [sudorese, setSudorese] = useState(false);
     const [taquipneia, setTaquipneia] = useState(false);
     const [taquicardia, setTaquicardia] = useState(false);
     const [tontura, setTontura] = useState(false);
     const [outroSintoma, setOutroSintoma] = useState(null);

     const [psico, setPsico] = useState(0);
     const [resp, setResp] = useState(0);
     const [diabetes, setDiabetes] = useState(0);
     const [outrosProblemas, setOutrosProblemas] = useState(null);
     const [partoEmergencial, setPartoEmergencial] = useState(0);
     const [problemaGestante, setProblemaGestante] = useState(0);
     const [hemorragiaExcessiva, setHemorragiaExcessiva ] = useState(0);
     const [aereo, setAereo] = useState(0);
     const [clinico, setClinico] = useState(0);
     const [emergencial, setEmergencial] = useState(0);
     const [posTrauma, setPosTrauma] = useState(0);
     const [samu, setSamu] = useState(0);
     const [semRemocao, setSemRemocao] = useState(0);
     const [outrosProblemaTransporte, setOutrosProblemaTransporte] = useState(null);

     



     const [procedimentos, setProcedimentos] = useState(null);

     const [obs, setObs] = useState(null);

     const [ObjetoRecolhido, setObjetoRecolhido] = useState(null);
     const [EncontradoCapacete, setEncontradoCapacete] = useState(false);
     const [EncontradoCinto, setEncontradoCinto] = useState(false);
     const [ParaBrisasAvariado, setParaBrisasAvariado] = useState(false);
     const [CaminhandoCena, setCaminhandoCena] = useState(false);
     const [PainelAvariado, setPainelAvariado] = useState(false);
     const [VolanteTorcido, setVolanteTorcido] = useState(false);



     
     const [Aspiracao, setAspiracao] = useState(false);
     const [AvalInicial, setAvalInicial] = useState(false);
     const [AvalDirigida, setAvalDirigida] = useState(false);
     const [AvalContinuada, setAvalContinuada] = useState(false);
     const [ChaveRautek, setChaveRautek] = useState(false);
     const [CanulaGuedel, setCanulaGuedel] = useState(false);
     const [DesobstrucaoVA, setDesobstrucaoVA] = useState(false);
     const [EmpregoDEA, setEmpregoDEA] = useState(false);
     const [GerenciamentoRiscos, setGerenciamentoRiscos] = useState(false);
     const [LimpezaFerimento, setLimpezaFerimento] = useState(false);
     const [Curativos, setCurativos] = useState(false);
     const [Compressivo, setCompressivo] = useState(false);
     const [Encravamento, setEncravamento] = useState(false);
     const [Ocular, setOcular] = useState(false);
     const [Queimadura, setQueimadura] = useState(false);
     const [Simples, setSimples] = useState(false);
     const [TresPontas, setTresPontas] = useState(false);
     const [Imobilizacoes, setImobilizacoes] = useState(false);
     const [MacaRodas, setMacaRodas] = useState(false);
     const [MacaRigida, setMacaRigida] = useState(false);
     const [Ponte, setPonte] = useState(false);
     const [RetiradoCapacete, setRetiradoCapacete] = useState(false);
     const [Rcp, setRcp] = useState(false);
     const [Rolamento90, setRolamento90] = useState(false);
     const [Rolamento180, setRolamento180] = useState(false);
     const [TomadaDecisao, setTomadaDecisao] = useState(false);
     const [TratadoChoque, setTratadoChoque] = useState(false);
     const [UsoCanula, setUsoCanula] = useState(false);
     const [UsoColar, setUsoColar] = useState(false);
     const [UsoKED, setUsoKED] = useState(false);
     const [UsoTTF, setUsoTTF] = useState(false);
     const [VentSuporte, setVentSuporte] = useState(false);
     const [Oxigenoterapia, setOxigenoterapia] = useState(false);
     const [Reanimador, setReanimador] = useState(false);

     const [Meios, setMeios] = useState(false);
     const [Auxiliares, setAuxiliares] = useState(false);
     
     const [policiaMilitar, setPoliciaMilitar] = useState(false);
     const [policiaCivil, setPoliciaCivil] = useState(false);
     const [policiaPRE, setPoliciaPRE] = useState(false);
     const [policiaPRF, setPoliciaPRF] = useState(false);
     const [samuUsa, setSamuUsa] = useState(false);
     const [samuUsb, setSamuUsb] = useState(false);
     const [celesc, setCelesc] = useState(false);
     const [defesaCivil, setDefesaCivil] = useState(false);
     const [igp, setIgp] = useState(false);
     const [cit, setCit] = useState(false);

     const [OutrosProcedimentos, setOutrosProcedimentos] = useState(null);

          

     const context = {
          currentPage: {
               state: currentPage,
               setState: setCurrentPage,
          },

          IdReport: {
               state: idReport,
               setState: setIdReport
          },

          homePage: {
               state: homePage,
               setState: setHomePage,
          },

          ehAdm: {
               state: ehAdm,
               setState: setEhAdm,
          },

          Aspiracao: {
               state: Aspiracao,
               setState: setAspiracao
          },
          AvalInicial: {
               state: AvalInicial,
               setState: setAvalInicial
          },
          AvalDirigida: {
               state: AvalDirigida,
               setState: setAvalDirigida
          },
          AvalContinuada: {
               state: AvalContinuada,
               setState: setAvalContinuada
          },
          ChaveRautek: {
               state: ChaveRautek,
               setState: setChaveRautek
          },
          CanulaGuedel: {
               state: CanulaGuedel,
               setState: setCanulaGuedel
          },
          DesobstrucaoVA: {
               state: DesobstrucaoVA,
               setState: setDesobstrucaoVA
          },
          EmpregoDEA: {
               state: EmpregoDEA,
               setState: setEmpregoDEA
          },
          GerenciamentoRiscos: {
               state: GerenciamentoRiscos,
               setState: setGerenciamentoRiscos
          },
          LimpezaFerimento: {
               state: LimpezaFerimento,
               setState: setLimpezaFerimento
          },
          Curativos: {
               state: Curativos,
               setState: setCurativos
          },
          Compressivo: {
               state: Compressivo,
               setState: setCompressivo
          },
          Encravamento: {
               state: Encravamento,
               setState: setEncravamento
          },
          Ocular: {
               state: Ocular,
               setState: setOcular
          },
          Queimadura: {
               state: Queimadura,
               setState: setQueimadura
          },
          Simples: {
               state: Simples,
               setState: setSimples
          },
          TresPontas: {
               state: TresPontas,
               setState: setTresPontas
          },
          Imobilizacoes: {
               state: Imobilizacoes,
               setState: setImobilizacoes
          },
          MacaRodas: {
               state: MacaRodas,
               setState: setMacaRodas
          },
          MacaRigida: {
               state: MacaRigida,
               setState: setMacaRigida
          },
          Ponte: {
               state: Ponte,
               setState: setPonte
          },
          RetiradoCapacete: {
               state: RetiradoCapacete,
               setState: setRetiradoCapacete
          },
          Rcp: {
               state: Rcp,
               setState: setRcp
          },
          Rolamento90: {
               state: Rolamento90,
               setState: setRolamento90
          },
          Rolamento180: {
               state: Rolamento180,
               setState: setRolamento180
          },
          TomadaDecisao: {
               state: TomadaDecisao,
               setState: setTomadaDecisao
          },
          TratadoChoque: {
               state: TratadoChoque,
               setState: setTratadoChoque
          },
          UsoCanula: {
               state: UsoCanula,
               setState: setUsoCanula
          },
          UsoColar: {
               state: UsoColar,
               setState: setUsoColar
          },
          UsoKED: {
               state: UsoKED,
               setState: setUsoKED
          },
          UsoTTF: {
               state: UsoTTF,
               setState: setUsoTTF
          },
          VentSuporte: {
               state: VentSuporte,
               setState: setVentSuporte
          },
          Oxigenoterapia: {
               state: Oxigenoterapia,
               setState: setOxigenoterapia
          },
          Reanimador: {
               state: Reanimador,
               setState: setReanimador
          },
          Meios: {
               state: Meios,
               setState: setMeios
          },
          Auxiliares: {
               state: Auxiliares,
               setState: setAuxiliares
          },
          OutrosProcedimentos: {
               state: OutrosProcedimentos,
               setState: setOutrosProcedimentos
          },


          policiaMilitar: {
               state: policiaMilitar,
               setState: setPoliciaMilitar,
          },
          policiaCivil: {
               state: policiaCivil,
               setState: setPoliciaCivil,
          },
          policiaPRE: {
               state: policiaPRE,
               setState: setPoliciaPRE,
          },
          policiaPRF: {
               state: policiaPRF,
               setState: setPoliciaPRF,
          },
          samuUsa: {
               state: samuUsa,
               setState: setSamuUsa,
          },
          samuUsb: {
               state: samuUsb,
               setState: setSamuUsb,
          },
          celesc: {
               state: celesc,
               setState: setCelesc,
          },
          defesaCivil: {
               state: defesaCivil,
               setState: setDefesaCivil,
          },
          igp: {
               state: igp,
               setState: setIgp,
          },
          cit: {
               state: cit,
               setState: setCit,
          },


          //Materiais
          materials: {
               state: materials,
               setState: setMaterials,
          },








          tipoOc: {
               state: tipoOc,
               setState: setTipoOc,          
          },
          outroTipoOc: {
               state: outroTipoOc,
               setState: setOutroTipoOc,          
          },
          decisao: {
               state: decisao,
               setState: setDecisao,
          },
          transporteName: {
               state: transporteName,
               setState: setTransporteName,
          },
          transporteValue: {
               state: transporteValue,
               setState: setTransporteValue,
          },
          socorristaA: {
               state: socorristaA,
               setState: setSocorristaA,
          },
          socorristaB: {
               state: socorristaB,
               setState: setSocorristaB,
          },
          socorristaC: {
               state: socorristaC,
               setState: setSocorristaC,
          },
          motorista: {
               state: motorista,
               setState: setMotorista,
          },
          demandante: {
               state: demandante,
               setState: setDemandante,
          },

          sexoPac: {
               state: sexoPac,
               setState: setSexoPac,
          },


// Problemas encontrados
          psico: {
               state: psico,
               setState: setPsico,
          },
          resp: {
               state: resp,
               setState: setResp,
          },
          diabetes: {
               state: diabetes,
               setState: setDiabetes,
          },
          outrosProblemas: {
               state: outrosProblemas,
               setState: setOutrosProblemas,
          },

          partoEmergencial: {
               state: partoEmergencial,
               setState: setPartoEmergencial,
          },
          problemaGestante: {
               state: problemaGestante,
               setState: setProblemaGestante,
          },
          hemorragiaExcessiva: {
               state: hemorragiaExcessiva,
               setState: setHemorragiaExcessiva,
          },


          aereo: {
               state: aereo,
               setState: setAereo,
          },
          clinico: {
               state: clinico,
               setState: setClinico,
          },
          emergencial: {
               state: emergencial,
               setState: setEmergencial,
          },
          posTrauma: {
               state: posTrauma,
               setState: setPosTrauma,
          },
          samu: {
               state: samu,
               setState: setSamu,
          },
          semRemocao: {
               state: semRemocao,
               setState: setSemRemocao,
          },
          outrosProblemaTransporte: {
               state: outrosProblemaTransporte,
               setState: setOutrosProblemaTransporte,
          },






          
          
          

// Info Ambulância
          numUsb: {
               state: numUsb,
               setState: setNumUsb,
          },
          numOc: {
               state: numOc,
               setState: setNumOc,
          },
          despachante: {
               state: despachante,
               setState: setDespachante,
          },
          kmFinal: {
               state: kmFinal,
               setState: setKmFinal,
          },
          codSia: {
               state: codSia,
               setState: setCodSia,
          },
          codIr: {
               state: codIr,
               setState: setCodIr,
          },
          codPs: {
               state: codPs,
               setState: setCodPs,
          },

// Info Paciente

          nomePac: {
               state: nomePac,
               setState: setNomePac,
          },
          nomeHosp: {
               state: nomeHosp,
               setState: setNomeHosp,
          },
          docPac: {
               state: docPac,
               setState: setDocPac,
          },
          idadePac: {
               state: idadePac,
               setState: setIdadePac,
          },
          telefonePac: {
               state: telefonePac,
               setState: setTelefonePac,
          },
          local: {
               state: local,
               setState: setLocal,
          },
          acompanhante: {
               state: acompanhante,
               setState: setAcompanhante,
          },
          idadeAcom: {
               state: idadeAcom,
               setState: setIdadeAcom,
          },
          vitimaEraName: {
               state: vitimaEraName,
               setState: setVitimaEraName,
          },
          vitimaEraValue: {
               state: vitimaEraValue,
               setState: setVitimaEraValue,
          },
          obs: {
               state: obs,
               setState: setObs,
          },

//Avaliação do Paciente

          aberturaOcular: {
               state: aberturaOcular,
               setState: setAberturaOcular,
          },
          respostaVerbal: {
               state: respostaVerbal,
               setState: setRespostaVerbal,
          },
          respostaMotora: {
               state: respostaMotora,
               setState: setRespostaMotora,
          },


//Anamnese
          possuiProblemaDeSaudeName: {
               state: possuiProblemaDeSaudeName,
               setState: setPossuiProblemaDeSaudeName,
          },
          possuiProblemaDeSaudeValue: {
               state: possuiProblemaDeSaudeValue,
               setState: setPossuiProblemaDeSaudeValue,
          },
          aconteceuOutrasVezesName: {
               state: aconteceuOutrasVezesName,
               setState: setAconteceuOutrasVezesName,
          },
          aconteceuOutrasVezesValue: {
               state: aconteceuOutrasVezesValue,
               setState: setAconteceuOutrasVezesValue,
          },
          problemasDeSaude: {
               state: problemasDeSaude,
               setState: setProblemasDeSaude,
          },
          


          fazUsoDeMedicacoesValue: {
               state: fazUsoDeMedicacoesValue,
               setState: setFazUsoDeMedicacoesValue,
          },
          fazUsoDeMedicacoesName: {
               state: fazUsoDeMedicacoesName,
               setState: setFazUsoDeMedicacoesName,
          },
          medicacoes: {
               state: medicacoes,
               setState: setMedicacoes,
          },


          ehAlergicoName: {
               state: ehAlergicoName,
               setState: setEhAlergicoName,
          },
          ehAlergicoValue: {
               state: ehAlergicoValue,
               setState: setEhAlergicoValue,
          },
          alergia: {
               state: alergia,
               setState: setAlergia,
          },

          ingeriuAlgoName: {
               state: ingeriuAlgoName,
               setState: setIngeriuAlgoName,
          },
          ingeriuAlgoValue: {
               state: ingeriuAlgoValue,
               setState: setIngeriuAlgoValue,
          },


          dateIngestao: {
               state: dateIngestao,
               setState: setDateIngestao,
          },
          showIngestao: {
               state: showIngestao,
               setState: setShowIngestao,
          },
          dateAconteceu: {
               state: dateAconteceu,
               setState: setDateAconteceu,
          },
          showAconteceu: {
               state: showAconteceu,
               setState: setShowAconteceu,
          },
          sinaisSintomasAnamnese: {
               state: sinaisSintomasAnamnese,
               setState: setSinaisSintomasAnamnese,
          },
          dateUltimaMedicacao: {
               state: dateUltimaMedicacao,
               setState: setDateUltimaMedicacao,
          },
          showUltimaMedicacao: {
               state: showUltimaMedicacao,
               setState: setShowUltimaMedicacao,
          },


          

//Anamnese Gestacional
          fezPreNatalName: {
               state: fezPreNatalName,
               setState: setFezPreNatalName,
          },
          fezPreNatalValue: {
               state: fezPreNatalValue,
               setState: setFezPreNatalValue,
          },
          nomeMedico: {
               state: nomeMedico,
               setState: setNomeMedico,
          },
          partoRealizadoName: {
               state: partoRealizadoName,
               setState: setPartoRealizadoName,
          },
          partoRealizadoValue: {
               state: partoRealizadoValue,
               setState: setPartoRealizadoValue,
          },
          filhos: {
               state: filhos,
               setState: setFilhos,
          },
          nomeBebe: {
               state: nomeBebe,
               setState: setNomeBebe,
          },
          sexoBebeValue: {
               state: sexoBebeValue,
               setState: setSexoBebeValue,
          },
          sexoBebeName: {
               state: sexoBebeName,
               setState: setSexoBebeName,
          },
          primeiroFilhoName: {
               state: primeiroFilhoName,
               setState: setPrimeiroFilhoName,
          },
          primeiroFilhoValue: {
               state: primeiroFilhoValue,
               setState: setPrimeiroFilhoValue,
          },
          pressaoEvacuarName: {
               state: pressaoEvacuarName,
               setState: setPressaoEvacuarName,
          },
          pressaoEvacuarValue: {
               state: pressaoEvacuarValue,
               setState: setPressaoEvacuarValue,
          },
          possibilidadeDeComplicacoesName: {
               state: possibilidadeDeComplicacoesName,
               setState: setPossibilidadeDeComplicacoesName,
          },
          possibilidadeDeComplicacoesValue: {
               state: possibilidadeDeComplicacoesValue,
               setState: setPossibilidadeDeComplicacoesValue,
          },
          feitoInspecaoName: {
               state: feitoInspecaoName,
               setState: setFeitoInspecaoName,
          },
          feitoInspecaoValue: {
               state: feitoInspecaoValue,
               setState: setFeitoInspecaoValue,
          },
          rupturaBolsaName: {
               state: rupturaBolsaName,
               setState: setRupturaBolsaName,
          },
          rupturaBolsaValue: {
               state: rupturaBolsaValue,
               setState: setRupturaBolsaValue,
          },

          
          dateContracoesInicio: {
               state: dateContracoesInicio,
               setState: setDateContracoesInicio,
          },
          showContracoesInicio: {
               state: showContracoesInicio,
               setState: setShowContracoesInicio,
          },
          dateContracoesDuracao: {
               state: dateContracoesDuracao,
               setState: setDateContracoesDuracao,
          },
          showContracoesDuracao: {
               state: showContracoesDuracao,
               setState: setShowContracoesDuracao,
          },
          dateContracoesIntervalo: {
               state: dateContracoesIntervalo,
               setState: setDateContracoesIntervalo,
          },
          showContracoesIntervalo: {
               state: showContracoesIntervalo,
               setState: setShowContracoesIntervalo,
          },
          dateNascimento: {
               state: dateNascimento,
               setState: setDateNascimento,
          },
          showNascimento: {
               state: showNascimento,
               setState: setShowNascimento,
          },
          mode: {
               state: mode,
               setState: setMode,
          },





//Sinais Vitais
          presMax: {
               state: presMax,
               setState: setPresMax,
          },
          presMin: {
               state: presMin,
               setState: setPresMin,
          },
          pulso: {
               state: pulso,
               setState: setPulso,
          },
          respiracao: {
               state: respiracao,
               setState: setRespiracao,
          },
          sat: {
               state: sat,
               setState: setSat,
          },
          perfusaoName: {
               state: perfusaoName,
               setState: setPerfusaoName,
          },
          perfusaoValue: {
               state: perfusaoValue,
               setState: setPerfusaoValue,
          },
          normalidade: {
               state: normalidade,
               setState: setNormalidade,
          },
          hgt: {
               state: hgt,
               setState: setHgt,
          },
          temperatura: {
               state: temperatura,
               setState: setTemperatura,
          },

          procedimentos: {
               state: procedimentos,
               setState: setProcedimentos,
          },

          // Sinais e Sintomas
          
          abdomen: {
               state: abdomen,
               setState: setAbdomen,
          },


          afundamento: {
               state: afundamento,
               setState: setAfundamento,
          },
          agitacao: {
               state: agitacao,
               setState: setAgitacao,
          },
          amnesia: {
               state: amnesia,
               setState: setAmnesia,
          },
          anginaPeito: {
               state: anginaPeito,
               setState: setAnginaPeito,
          },
          apneia: {
               state: apneia,
               setState: setApneia,
          },
          bradicardia: {
               state: bradicardia,
               setState: setBradicardia,
          },
          bradipneia: {
               state: bradipneia,
               setState: setBradipneia,
          },
          broncoAspirando: {
               state: broncoAspirando,
               setState: setBroncoAspirando,
          },
          cefaleia: {
               state: cefaleia,
               setState: setCefaleia,
          },
          convulsao: {
               state: convulsao,
               setState: setConvulsao,
          },
          decorticacao: {
               state: decorticacao,
               setState: setDecorticacao,
          },
          deformidade: {
               state: deformidade,
               setState: setDeformidade,
          },
          descerebracao: {
               state: descerebracao,
               setState: setDescerebracao,
          },
          desmaio: {
               state: desmaio,
               setState: setDesmaio,
          },
          desvioTraqueia: {
               state: desvioTraqueia,
               setState: setDesvioTraqueia,
          },
          dispneia: {
               state: dispneia,
               setState: setDispneia,
          },
          dorLocal: {
               state: dorLocal,
               setState: setDorLocal,
          },
          enfisemaSubcutaneo: {
               state: enfisemaSubcutaneo,
               setState: setEnfisemaSubcutaneo,
          },
          extaseJugular: {
               state: extaseJugular,
               setState: setExtaseJugular,
          },
          facePalida: {
               state: facePalida,
               setState: setFacePalida,
          },
          hemorragiaInterna: {
               state: hemorragiaInterna,
               setState: setHemorragiaInterna,
          },
          hemorragiaExterna: {
               state: hemorragiaExterna,
               setState: setHemorragiaExterna,
          },
          hipertensao: {
               state: hipertensao,
               setState: setHipertensao,
          },
          nauseasVomito: {
               state: nauseasVomito,
               setState: setNauseasVomito,
          },
          nasoragia: {
               state: nasoragia,
               setState: setNasoragia,
          },
          obito: {
               state: obito,
               setState: setObito,
          },
          otorreia: {
               state: otorreia,
               setState: setOtorreia,
          },
          ovace: {
               state: ovace,
               setState: setOvace,
          },
          paradaCardiaca: {
               state: paradaCardiaca,
               setState: setParadaCardiaca,
          },
          paradaRespiratoria: {
               state: paradaRespiratoria,
               setState: setParadaRespiratoria,
          },
          priapismo: {
               state: priapismo,
               setState: setPriapismo,
          },
          pruridoPele: {
               state: pruridoPele,
               setState: setPruridoPele,
          },
          pupilasAnisocoria: {
               state: pupilasAnisocoria,
               setState: setPupilasAnisocoria,
          },
          pupilasIsocoria: {
               state: pupilasIsocoria,
               setState: setPupilasIsocoria,
          },
          pupilasMidriase: {
               state: pupilasMidriase,
               setState: setPupilasMidriase,
          },
          pupilasMiose: {
               state: pupilasMiose,
               setState: setPupilasMiose,
          },
          pupilasReagente: {
               state: pupilasReagente,
               setState: setPupilasReagente,
          },
          pupilasNaoReagente: {
               state: pupilasNaoReagente,
               setState: setPupilasNaoReagente,
          },
          sinalBattle: {
               state: sinalBattle,
               setState: setSinalBattle,
          },
          sinalGuaxinim: {
               state: sinalGuaxinim,
               setState: setSinalGuaxinim,
          },
          sudorese: {
               state: sudorese,
               setState: setSudorese,
          },
          taquipneia: {
               state: taquipneia,
               setState: setTaquipneia,
          },
          taquicardia: {
               state: taquicardia,
               setState: setTaquicardia,
          },
          tontura: {
               state: tontura,
               setState: setTontura,
          },
          outroSintoma: {
               state: outroSintoma,
               setState: setOutroSintoma,
          },

          
          ObjetoRecolhido: {
               state: ObjetoRecolhido,
               setState: setObjetoRecolhido
          },
          DisturbioComportamento: {
               state: DisturbioComportamento,
               setState: setDisturbioComportamento,
          },
          EncontradoCapacete: {
               state: EncontradoCapacete,
               setState: setEncontradoCapacete
          },
          EncontradoCinto: {
               state: EncontradoCinto,
               setState: setEncontradoCinto
          },
          ParaBrisasAvariado: {
               state: ParaBrisasAvariado,
               setState: setParaBrisasAvariado
          },
          CaminhandoCena: {
               state: CaminhandoCena,
               setState: setCaminhandoCena
          },
          PainelAvariado: {
               state: PainelAvariado,
               setState: setPainelAvariado
          },
          VolanteTorcido: {
               state: VolanteTorcido,
               setState: setVolanteTorcido
          },


          //Localização dos Traumas
          primeiroGrauCabeca: {
               state: primeiroGrauCabeca,
               setState: setPrimeiroGrauCabeca
          },
          segundoGrauCabeca: {
               state: segundoGrauCabeca,
               setState: setSegundoGrauCabeca
          },
          terceiroGrauCabeca: {
               state: terceiroGrauCabeca,
               setState: setTerceiroGrauCabeca
          },
          primeiroGrauPescoco: {
               state: primeiroGrauPescoco,
               setState: setPrimeiroGrauPescoco
          },
          segundoGrauPescoco: {
               state: segundoGrauPescoco,
               setState: setSegundoGrauPescoco
          },
          terceiroGrauPescoco: {
               state: terceiroGrauPescoco,
               setState: setTerceiroGrauPescoco
          },
          primeiroGrauTAnt: {
               state: primeiroGrauTAnt,
               setState: setPrimeiroGrauTAnt
          },
          segundoGrauTAnt: {
               state: segundoGrauTAnt,
               setState: setSegundoGrauTAnt
          },
          terceiroGrauTAnt: {
               state: terceiroGrauTAnt,
               setState: setTerceiroGrauTAnt
          },
          primeiroGrauTPos: {
               state: primeiroGrauTPos,
               setState: setPrimeiroGrauTPos
          },
          segundoGrauTPos: {
               state: segundoGrauTPos,
               setState: setSegundoGrauTPos
          },
          terceiroGrauTPos: {
               state: terceiroGrauTPos,
               setState: setTerceiroGrauTPos
          },
          primeiroGrauGenitalia: {
               state: primeiroGrauGenitalia,
               setState: setPrimeiroGrauGenitalia
          },
          segundoGrauGenitalia: {
               state: segundoGrauGenitalia,
               setState: setSegundoGrauGenitalia
          },
          terceiroGrauGenitalia: {
               state: terceiroGrauGenitalia,
               setState: setTerceiroGrauGenitalia
          },
          primeiroGrauMid: {
               state: primeiroGrauMid,
               setState: setPrimeiroGrauMid
          },
          segundoGrauMid: {
               state: segundoGrauMid,
               setState: setSegundoGrauMid
          },
          terceiroGrauMid: {
               state: terceiroGrauMid,
               setState: setTerceiroGrauMid
          },
          primeiroGrauMie: {
               state: primeiroGrauMie,
               setState: setPrimeiroGrauMie
          },
          segundoGrauMie: {
               state: segundoGrauMie,
               setState: setSegundoGrauMie
          },
          terceiroGrauMie: {
               state: terceiroGrauMie,
               setState: setTerceiroGrauMie
          },
          primeiroGrauMsd: {
               state: primeiroGrauMsd,
               setState: setPrimeiroGrauMsd
          },
          segundoGrauMsd: {
               state: segundoGrauMsd,
               setState: setSegundoGrauMsd
          },
          terceiroGrauMsd: {
               state: terceiroGrauMsd,
               setState: setTerceiroGrauMsd
          },
          primeiroGrauMse: {
               state: primeiroGrauMse,
               setState: setPrimeiroGrauMse
          },
          segundoGrauMse: {
               state: segundoGrauMse,
               setState: setSegundoGrauMse
          },
          terceiroGrauMse: {
               state: terceiroGrauMse,
               setState: setTerceiroGrauMse
          },
          possuiQueimadurasValue: {
               state: possuiQueimadurasValue,
               setState: setPossuiQueimadurasValue,
          },
          possuiQueimadurasName: {
               state: possuiQueimadurasName,
               setState: setPossuiQueimadurasName,
          },
          ferimentos: {
               state: ferimentos,
               setState: setFerimentos,
          },
          ferimento: {
               state: ferimento,
               setState: setFerimento,
          },
          


     }
     return (
          <OcorrenciaContext.Provider value={context}>
               {children}
          </OcorrenciaContext.Provider>
     );
}