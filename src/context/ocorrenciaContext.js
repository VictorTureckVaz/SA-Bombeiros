import { createContext, useState } from "react";

export const OcorrenciaContext = createContext();

export const OcorrenciaProvider = ({ children }) => {

     const [tipoOc, setTipoOc] = useState(null);

     return (
          <OcorrenciaContext.Provider value={{tipoOc, setTipoOc}}>
               {children}
          </OcorrenciaContext.Provider>
     );

}