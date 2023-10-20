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
import MainConsciencia from '../pages/Ocorrencia/Consciencia';
import MainProblemasEncontrados from '../pages/Ocorrencia/Problemas Encontrados';
import MainCinematicaObjetos from '../pages/Ocorrencia/Cinematica e Objetos';
import MainSinaisVitais from '../pages/Ocorrencia/Sinais Vitais';
import MainObs from '../pages/Ocorrencia/Observacoes';

const Stack = createNativeStackNavigator()

export default function Routes(){
     return(
          <Stack.Navigator>
               {/* <Stack.Screen
               name="login"
               component={ MainLogin }
               options={ {headerShown: false}}
               /> */}
               <Stack.Screen
               name="home"
               component={ MainHome }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="ocorrencia"
               component={ MainOcorrencia }
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
               name="ProblemasEncontrados"
               component={ MainProblemasEncontrados }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="CinamaticaObjetos"
               component={ MainCinematicaObjetos }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="SinaisVitais"
               component={ MainSinaisVitais }
               options={ {headerShown: false}}
               />
               <Stack.Screen
               name="Obs"
               component={ MainObs }
               options={ {headerShown: false}}
               />
          </Stack.Navigator>
     )
}