import { createContext, useState } from "react";

export const OcorrenciaContext = createContext();

export const OcorrenciaProvider = ({ children }) => {

     const [login, setLogin] = useState(null)
     const [tipoOc, setTipoOc] = useState(null);
     const [decisao, setDecisao] = useState(null);
     const [transporteName, setTransporteName] = useState("Forma de Condução");
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
     const [vitimaEraName, setVitimaEraName] = useState("Vitima Era");
     const [vitimaEraValue, setVitimaEraValue] = useState(null);

     const [aberturaOcular, setAberturaOcular] = useState(0); //seta abertura ocular como 0
     const [respostaVerbal, setRespostaVerbal] = useState(0); //seta resposta verbal como 0
     const [respostaMotora, setRespostaMotora] = useState(0); //seta resposta motora como 0

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

     }
     return (
          <OcorrenciaContext.Provider value={context}>
               {children}
          </OcorrenciaContext.Provider>
     );
}