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

     }
     return (
          <OcorrenciaContext.Provider value={context}>
               {children}
          </OcorrenciaContext.Provider>
     );
}
