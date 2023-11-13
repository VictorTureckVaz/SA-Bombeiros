import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainLogin from '../pages/Login';
import Header from '../pages/Header';
import MainHome from '../pages/Home';
import Footer from '../pages/Footer';
import MainProfile from '../pages/Profile/Main';
import MainOcorrencia from '../pages/Ocorrencia/Principal';
import LoadingDots from '../pages/Loading'
import MainInfoPac from '../pages/Ocorrencia/Info Pac';
import MainInfoAmb from '../pages/Ocorrencia/Info Ambu';
import MainTipoOc from '../pages/Ocorrencia/Tipo de Ocorrencia';
import MainTransporte from '../pages/Ocorrencia/Transporte';
import MainProblemasEncontrados from '../pages/Ocorrencia/Problemas Encontrados';
import MainCinematicaObjetos from '../pages/Ocorrencia/Cinematica e Objetos';
import MainSinaisVitais from '../pages/Ocorrencia/Sinais vitais';
import MainObs from '../pages/Ocorrencia/Observacoes';
import MainAvaliacao from '../pages/Ocorrencia/Avaliacao do Paciente';
import MainMateriais from '../pages/Ocorrencia/Materiais';
import MainTeste from '../pages/Ocorrencia/teste';
import MainSinaisSintomas from '../pages/Ocorrencia/Sinais e Sintomas';
import MainProcedimentosEfetuados from '../pages/Ocorrencia/Procedimentos Efetuados';


const Stack = createNativeStackNavigator()

export default function Routes(){


     return(
          <Stack.Navigator>
               <Stack.Screen
               name="home"
               component={ MainHome }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="login"
               component={ MainLogin }
               options={ {headerShown: false}}
               />
               {/* <Stack.Screen
               name="teste"
               component={ MainTeste }
               options={ {headerShown: false}}
               /> */}
               
               <Stack.Screen
               name="ocorrencia"
               component={ MainOcorrencia }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="SS"
               component={ MainSinaisSintomas }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="infoPac"
               component={ MainInfoPac }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="infoTrans"
               component={ MainTransporte }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="infoAmb"
               component={ MainInfoAmb }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="tipoOc"
               component={ MainTipoOc }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="problemasEncontrados"
               component={ MainProblemasEncontrados }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="cinamaticaObjetos"
               component={ MainCinematicaObjetos }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="sinaisVitais"
               component={ MainSinaisVitais }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="obs"
               component={ MainObs }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="avaliacao"
               component={ MainAvaliacao }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="procedimentosefetuados"
               component={ MainProcedimentosEfetuados}
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="materiais"
               component={ MainMateriais }
               options={ {headerShown: false}}
               />
          </Stack.Navigator>
     )
}