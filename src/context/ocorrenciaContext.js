import { createContext, useState } from "react";

export const OcorrenciaContext = createContext();

export const OcorrenciaProvider = ({ children }) => {

     const [tipoOc, setTipoOc] = useState(null);
     const [decisao, setDecisao] = useState(null);
     const [transporteName, setTransporteName] = useState(null);
     const [transporteValue, setTransporteValue] = useState(null);
     const [socorristaA, setSocorristaA] = useState(null);
     const [socorristaB, setSocorristaB] = useState(null);
     const [socorristaC, setSocorristaC] = useState(null);
     const [motorista, setMotorista] = useState(null);
     const [demandante, setDemandante] = useState(null);

     const [numUsb, setNumUsb] = useState(null);
     const [numOc, setNumOc] = useState(null);
     const [despachante, setDespachante] = useState(null);
     const [kmFinal, setKmFinal] = useState(null);
     const [codSia, setCodSia] = useState(null);
     const [codIr, setCodIr] = useState(null);
     const [codPs, setCodPs] = useState(null);

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

     const [aberturaOcular, setAberturaOcular] = useState(0); //seta abertura ocular como 0
     const [respostaVerbal, setRespostaVerbal] = useState(0); //seta resposta verbal como 0
     const [respostaMotora, setRespostaMotora] = useState(0); //seta resposta motora como 0

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

     const [nomeMedico, setNomeMedico] = useState(null);
     const [fezPreNatalName, setFezPreNatalName] = useState(null);
     const [fezPreNatalValue, setFezPreNatalValue] = useState(null);
     const [partoRealizado, setPartoRealizado] = useState(null);
     const [nomeBebe, setNomeBebe] = useState(null);
     const [sexoBebe, setSexoBebe] = useState(null);
     const [filhos, setFilhos] = useState(null);
     const [primeiroFilhoName, setPrimeiroFilhoName] = useState(null);
     const [primeiroFilhoValue, setPrimeiroFilhoValue] = useState(null);
     const [sexoPac, setSexoPac] = useState(null);

     


     const [obs, setObs] = useState(null);
          

     const context = {
          tipoOc: {
               state: tipoOc,
               setState: setTipoOc,          
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
          partoRealizado: {
               state: partoRealizado,
               setState: setPartoRealizado,
          },
          filhos: {
               state: filhos,
               setState: setFilhos,
          },
          nomeBebe: {
               state: nomeBebe,
               setState: setNomeBebe,
          },
          sexoBebe: {
               state: sexoBebe,
               setState: setSexoBebe,
          },
          primeiroFilhoName: {
               state: primeiroFilhoName,
               setState: setPrimeiroFilhoName,
          },
          primeiroFilhoValue: {
               state: primeiroFilhoValue,
               setState: setPrimeiroFilhoValue,
          },

     }
     return (
          <OcorrenciaContext.Provider value={context}>
               {children}
          </OcorrenciaContext.Provider>
     );
}