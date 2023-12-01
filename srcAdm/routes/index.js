import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainLogin from '../pages/Login';
import Header from '../pages/Header';
import MainHome from '../pages/Home';
import Footer from '../pages/Footer';
import MainProfile from '../pages/Profile';
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
import MainAnamnese from '../pages/Ocorrencia/Anamnese';
import MainAnamneseGestacional from '../pages/Ocorrencia/Anamnese Gestacional';
import MainTraumas from '../pages/Ocorrencia/Localizacao dos Traumas';
import MainCadastro from '../pages/Cadastro';


const Stack = createNativeStackNavigator()

export default function Routes(){


     return(
          <Stack.Navigator>
               <Stack.Screen
               name="home"
               component={ MainHome }
               options={ {headerShown: false}}
               />
          </Stack.Navigator>
     )
}