import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { OcorrenciaContext } from '../../context/ocorrenciaContext';
import api from './../../lib/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Footer(){



    async function verifyLogin(page){
        const token = await AsyncStorage.getItem('token');

        try {
             if (token) {
                  console.log('temos o token: ' + token);
                  
                  try {
                    if(page == "ocorrencia" && context.currentPage.state !== "ocorrencia") {

                         const reponse = await api.post("/nullSubmit");
                         const id = reponse.data.id;
                         await AsyncStorage.setItem('idReport', id);
                         context.IdReport.setState(id);
                         console.log('Pegamos o id da report nova:', id);
                    }
                       navigation.navigate(page);
                       context.currentPage.setState(page);
                    } catch(e) {
                         console.error(e);
                    }
               } else {
                    console.log('neo temos o token');
                    navigation.navigate('login');
               }
          } catch (e) {
             console.error(e)
        }
        
   }


    const navigation = useNavigation();

    const context = useContext(OcorrenciaContext);


    function homePress(){
        navigation.navigate('home');
        context.currentPage.setState('home');
        context.tipoOc.setState(null);
        context.decisao.setState(null);
        context.transporteName.setState(null);
        context.transporteValue.setState(null);
        context.socorristaA.setState(null);
        context.socorristaB.setState(null);
        context.socorristaC.setState(null);
        context.motorista.setState(null);
        context.demandante.setState(null);
        context.outroTipoOc.setState(null);
        context.numUsb.setState(null);
        context.numOc.setState(null);
        context.despachante.setState(null);
        context.kmFinal.setState(null);
        context.codSia.setState(null);
        context.codIr.setState(0);
        context.codPs.setState(0);
        context.nomePac.setState(null);
        context.nomeHosp.setState(null);
        context.docPac.setState(null);
        context.idadePac.setState(null);
        context.telefonePac.setState(null);
        context.local.setState(null);
        context.acompanhante.setState(null);
        context.idadeAcom.setState(null);
        context.vitimaEraName.setState(null);
        context.vitimaEraValue.setState(null);
        context.presMax.setState(null);
        context.presMin.setState(null);
        context.pulso.setState(null);
        context.respiracao.setState(null);
        context.sat.setState(null);
        context.perfusaoName.setState(null);
        context.perfusaoValue.setState(null);
        context.normalidade.setState(null);
        context.hgt.setState(null);
        context.temperatura.setState(null);
        context.ferimentos.setState([]);        
        context.ferimento.setState([]);      
        context.possuiQueimadurasValue.setState(null);
        context.possuiQueimadurasName.setState(null);
        context.primeiroGrauCabeca.setState(null);
        context.segundoGrauCabeca.setState(null);
        context.terceiroGrauCabeca.setState(null);
        context.primeiroGrauPescoco.setState(null);
        context.segundoGrauPescoco.setState(null);
        context.terceiroGrauPescoco.setState(null);
        context.primeiroGrauTAnt.setState(null);
        context.segundoGrauTAnt.setState(null);
        context.terceiroGrauTAnt.setState(null);
        context.primeiroGrauTPos.setState(null);
        context.segundoGrauTPos.setState(null);
        context.terceiroGrauTPos.setState(null);
        context.primeiroGrauGenitalia.setState(null);
        context.segundoGrauGenitalia.setState(null);
        context.terceiroGrauGenitalia.setState(null);
        context.primeiroGrauMid.setState(null);
        context.segundoGrauMid.setState(null);
        context.terceiroGrauMid.setState(null);
        context.primeiroGrauMie.setState(null);
        context.segundoGrauMie.setState(null);
        context.terceiroGrauMie.setState(null);
        context.primeiroGrauMsd.setState(null);
        context.segundoGrauMsd.setState(null);
        context.terceiroGrauMsd.setState(null);
        context.primeiroGrauMse.setState(null);
        context.segundoGrauMse.setState(null);
        context.terceiroGrauMse.setState(null);
        context.materials.setState([]);
        context.aberturaOcular.setState(0);
        context.respostaVerbal.setState(0);
        context.respostaMotora.setState(0);
        context.possuiProblemaDeSaudeName.setState(null);
        context.possuiProblemaDeSaudeValue.setState(null);
        context.problemasDeSaude.setState(null);
        context.aconteceuOutrasVezesName.setState(null);
        context.aconteceuOutrasVezesValue.setState(null);
        context.fazUsoDeMedicacoesName.setState(null);
        context.fazUsoDeMedicacoesValue.setState(null);
        context.medicacoes.setState(null);
        context.ehAlergicoName.setState(null);
        context.ehAlergicoValue.setState(null);
        context.alergia.setState(null);
        context.ingeriuAlgoName.setState(null);
        context.ingeriuAlgoValue.setState(null);
        context.nomeMedico.setState(null);
        context.fezPreNatalName.setState(null);
        context.fezPreNatalValue.setState(null);
        context.partoRealizadoName.setState(null);
        context.partoRealizadoValue.setState(null);
        context.nomeBebe.setState(null);
        context.sexoBebeValue.setState(null);
        context.sexoBebeName.setState(null);
        context.filhos.setState(0);
        context.primeiroFilhoName.setState(null);
        context.primeiroFilhoValue.setState(null);
        context.sexoPac.setState(null);
        context.feitoInspecaoName.setState(null);
        context.feitoInspecaoValue.setState(null);
        context.rupturaBolsaName.setState(null);
        context.rupturaBolsaValue.setState(null);
        context.pressaoEvacuarValue.setState(null);
        context.pressaoEvacuarName.setState(null);
        context.possibilidadeDeComplicacoesValue.setState(null);
        context.possibilidadeDeComplicacoesName.setState(null);
        context.abdomen.setState(false);
        context.afundamento.setState(false);
        context.agitacao.setState(false);
        context.amnesia.setState(false);
        context.anginaPeito.setState(false);
        context.apneia.setState(false);
        context.bradicardia.setState(false);
        context.bradipneia.setState(false);
        context.broncoAspirando.setState(false);
        context.cefaleia.setState(false);
        context.convulsao.setState(false);
        context.decorticacao.setState(false);
        context.deformidade.setState(false);
        context.descerebracao.setState(false);
        context.desmaio.setState(false);
        context.desvioTraqueia.setState(false);
        context.dispneia.setState(false);
        context.dorLocal.setState(false);
        context.enfisemaSubcutaneo.setState(false);
        context.extaseJugular.setState(false);
        context.facePalida.setState(false);
        context.hemorragiaInterna.setState(false);
        context.hemorragiaExterna.setState(false);
        context.hipertensao.setState(false);
        context.nauseasVomito.setState(false);
        context.nasoragia.setState(false);
        context.obito.setState(false);
        context.otorreia.setState(false);
        context.ovace.setState(false);
        context.paradaCardiaca.setState(false);
        context.paradaRespiratoria.setState(false);
        context.priapismo.setState(false);
        context.pruridoPele.setState(false);
        context.pupilasAnisocoria.setState(false);
        context.pupilasIsocoria.setState(false);
        context.pupilasMidriase.setState(false);
        context.pupilasMiose.setState(false);
        context.pupilasReagente.setState(false);
        context.pupilasNaoReagente.setState(false);
        context.sinalBattle.setState(false);
        context.sinalGuaxinim.setState(false);
        context.sudorese.setState(false);
        context.taquipneia.setState(false);
        context.taquicardia.setState(false);
        context.tontura.setState(false);
        context.outroSintoma.setState(null);
        context.psico.setState(0);
        context.resp.setState(0);
        context.diabetes.setState(0);
        context.outrosProblemas.setState(null);
        context.partoEmergencial.setState(0);
        context.problemaGestante.setState(0);
        context.hemorragiaExcessiva.setState (0);
        context.aereo.setState(0);
        context.clinico.setState(0);
        context.emergencial.setState(0);
        context.posTrauma.setState(0);
        context.samu.setState(0);
        context.semRemocao.setState(0);
        context.outrosProblemaTransporte.setState(0);
        context.procedimentos.setState(null);
        context.obs.setState(null);
        context.ObjetoRecolhido.setState(null);
        context.EncontradoCapacete.setState(false);
        context.EncontradoCinto.setState(false);
        context.ParaBrisasAvariado.setState(false);
        context.CaminhandoCena.setState(false);
        context.PainelAvariado.setState(false);
        context.VolanteTorcido.setState(false);
        context.Aspiracao.setState(false);
        context.AvalInicial.setState(false);
        context.AvalDirigida.setState(false);
        context.AvalContinuada.setState(false);
        context.ChaveRautek.setState(false);
        context.CanulaGuedel.setState(false);
        context.DesobstrucaoVA.setState(false);
        context.EmpregoDEA.setState(false);
        context.GerenciamentoRiscos.setState(false);
        context.LimpezaFerimento.setState(false);
        context.Curativos.setState(false);
        context.Compressivo.setState(false);
        context.Encravamento.setState(false);
        context.Ocular.setState(false);
        context.Queimadura.setState(false);
        context.Simples.setState(false);
        context.TresPontas.setState(false);
        context.Imobilizacoes.setState(false);
        context.MacaRodas.setState(false);
        context.MacaRigida.setState(false);
        context.Ponte.setState(false);
        context.RetiradoCapacete.setState(false);
        context.Rcp.setState(false);
        context.Rolamento90.setState(false);
        context.Rolamento180.setState(false);
        context.TomadaDecisao.setState(false);
        context.TratadoChoque.setState(false);
        context.UsoCanula.setState(false);
        context.UsoColar.setState(false);
        context.UsoKED.setState(false);
        context.UsoTTF.setState(false);
        context.VentSuporte.setState(false);
        context.Oxigenoterapia.setState(false);
        context.Reanimador.setState(false);
        context.Meios.setState(false);
        context.Auxiliares.setState(false);
        context.OutrosProcedimentos.setState(null);
    }












    return(
        <View style={styles.Footer}>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => homePress()}>
                <Image source={require("../../../assets/VectorHouse.png")} style={styles.Icon}/>
               <Text>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => verifyLogin("ocorrencia")}>
            <Image source={require("../../../assets/GroupDocs.png")} style={styles.Icon} />
               <Text>Ocorrência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => verifyLogin("profile")}>
                <Image source={require("../../../assets/Profile.png")} style={styles.Profile}/>
               <Text>Usuário</Text>
            </TouchableOpacity>
        </View>
    );

};