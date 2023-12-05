import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";
import { Center } from 'native-base';
import api from './../../../lib/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainOcorrencia() {

    const navigation = useNavigation();

    const context = useContext(OcorrenciaContext);
    const [sexoPac, setSexoPac] = useState(null);
    const [modalVisible, setModalVisible] = useState(true);

    function escolhaSexo(){
        context.sexoPac.setState(sexoPac);
    }
    

    useEffect(() => {
        if(context.sexoPac.state !== null){
            setModalVisible(false);
        }
    })
    
    async function transformarEmJson(){
        const jsonString = `{${Object.entries(context).map(([key, value]) => 
        `"${key}":${JSON.stringify(value.state)}`).join(',')}}`;
        console.log(jsonString);
            
        const jsonData = JSON.parse(jsonString);
        const {
            //id do Reporte
            idReport,

            //Info Paciente
            nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, vitimaEraValue, sexoPac,
                
            //Info Ambulancia
            numUsb, numOc, despachante, kmFinal, codIr, codPs, codSia, 
                    
            //Tipo de Ocorrência
            tipoOc, outroTipoOc,
            
            //Info de Condução E Transporte
            decisao, transporteValue, socorristaA, socorristaB, socorristaC, motorista, demandante,
            
            //Avalição do Paciente
            aberturaOcular, respostaVerbal, respostaMotora,

            // //Sinais Vitais
            // presMax, presMin, pulso, respiracao, sat, temperatura, hgt, perfusaoValue, normalidade,

            //Sinais e Sintomas
            abdomen, afundamento, agitacao, anginaPeito, apneia, bradicardia, bradipneia, broncoAspirando, cefaleia, convulsao, decorticacao, deformidade, descerebracao, desmaio, desvioTraqueia, dispneia, dorLocal, enfisemaSubcutaneo, extaseJugular, facePalida, hemorragiaInterna, hemorragiaExterna, hipertensao, nauseasVomito, nasoragia, obito, otorreia, ovace, paradaCardiaca, paradaRespiratoria, priapismo, pruridoPele, pupilasAnisocoria, pupilasIsocoria, pupilasMidriase, pupilasMiose, pupilasReagente, pupilasNaoReagente, sinalBattle, sinalGuaxinim, sudorese, taquipneia, taquicardia, tontura,

            //Problemas Encontrados
            psico, resp, diabetes, outrosProblemas, partoEmergencial, problemaGestante, hemorragiaExcessiva, aereo, clinico, emergencial, posTrauma, samu, semRemocao, outrosProblemaTransporte,

            //Procedimentos Efetuados
            Aspiracao, AvalInicial, AvalDirigida, AvalContinuada, ChaveRautek, CanulaGuedel, DesobstrucaoVA, EmpregoDEA, GerenciamentoRiscos, LimpezaFerimento, Curativos, Compressivo, Encravamento, Ocular, Queimadura, Simples, TresPontas, Imobilizacoes, MacaRodas, MacaRigida, Ponte, RetiradoCapacete, Rcp, Rolamento90, Rolamento180, TomadaDecisao, TratadoChoque, UsoCanula, UsoColar, UsoKED, UsoTTF, VentSuporte, Oxigenoterapia, Reanimador, Meios, Auxiliares, OutrosProcedimentos, policiaMilitar, policiaCivil, policiaPRE, policiaPRF, samuUsa, samuUsb, celesc, defesaCivil, igp, cit,  
            
            //Anamnese
            sinaisSintomasAnamnese, aconteceuOutrasVezesValue, dateAconteceu, possuiProblemaDeSaudeValue, problemasDeSaude, fazUsoDeMedicacoesValue, medicacoes, dateUltimaMedicacao, ehAlergicoValue, alergia, ingeriuAlgoValue, dateIngestao,

            //Anamnese Gestacional
            fezPreNatalValue, nomeMedico, possibilidadeDeComplicacoesValue, primeiroFilhoValue, filhos, dateContracoesInicio, dateContracoesDuracao, dateContracoesIntervalo, pressaoEvacuarValue, rupturaBolsaValue, feitoInspecaoValue, partoRealizadoValue, sexoBebeValue, nomeBebe, dateNascimento, 

            //Cinematica de Objetos Recolhidos
            DisturbioComportamento, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido, ObjetoRecolhido,

            //Materiais Utilizados
            materials,

            //Observações Importantes
            obs,

            //Queimaduras
            primeiroGrauCabeca, segundoGrauCabeca, terceiroGrauCabeca, primeiroGrauPescoco, segundoGrauPescoco, terceiroGrauPescoco, primeiroGrauTAnt, segundoGrauTAnt, terceiroGrauTAnt, primeiroGrauTPos, segundoGrauTPos, terceiroGrauTPos, primeiroGrauGenitalia, segundoGrauGenitalia, terceiroGrauGenitalia, primeiroGrauMid, segundoGrauMid, terceiroGrauMid, primeiroGrauMie, segundoGrauMie, terceiroGrauMie, primeiroGrauMsd, segundoGrauMsd, terceiroGrauMsd, primeiroGrauMse, segundoGrauMse, terceiroGrauMse
        } = jsonData;

        const infPac = {//1
            nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, vitimaEraValue, sexoPac
        };
        const InfAmb = {//2
            numUsb, numOc, despachante, kmFinal, codIr, codPs, codSia
        };
        const TipoOc = {//3
            tipoOc, outroTipoOc
        };
        const InfConETrans = {//4
            decisao, transporteValue, socorristaA, socorristaB, socorristaC, motorista, demandante
        };
        const AvalPac = {//5
            aberturaOcular, respostaVerbal, respostaMotora
        };
        // const SinaisVitais = {//6
        //     presMax, presMin, pulso, respiracao, sat, temperatura, hgt, perfusaoValue, normalidade
        // };
        const SinaisSintomas = {//7
            abdomen, afundamento, agitacao, anginaPeito, apneia, bradicardia, bradipneia, broncoAspirando, cefaleia, convulsao, decorticacao, deformidade, descerebracao, desmaio, desvioTraqueia, dispneia, dorLocal, enfisemaSubcutaneo, extaseJugular, facePalida, hemorragiaInterna, hemorragiaExterna, hipertensao, nauseasVomito, nasoragia, obito, otorreia, ovace, paradaCardiaca, paradaRespiratoria, priapismo, pruridoPele, pupilasAnisocoria, pupilasIsocoria, pupilasMidriase, pupilasMiose, pupilasReagente, pupilasNaoReagente, sinalBattle, sinalGuaxinim, sudorese, taquipneia, taquicardia, tontura

        };
        const ProbEnc = {//8
            psico, resp, diabetes,outrosProblemas, partoEmergencial, problemaGestante, hemorragiaExcessiva, aereo, clinico, emergencial, posTrauma, samu, semRemocao, outrosProblemaTransporte
        };
        const Queimaduras ={//9
            primeiroGrauCabeca, segundoGrauCabeca, terceiroGrauCabeca, primeiroGrauPescoco, segundoGrauPescoco, terceiroGrauPescoco, primeiroGrauTAnt, segundoGrauTAnt, terceiroGrauTAnt, primeiroGrauTPos, segundoGrauTPos, terceiroGrauTPos, primeiroGrauGenitalia, segundoGrauGenitalia, terceiroGrauGenitalia, primeiroGrauMid, segundoGrauMid, terceiroGrauMid, primeiroGrauMie, segundoGrauMie, terceiroGrauMie, primeiroGrauMsd, segundoGrauMsd, terceiroGrauMsd, primeiroGrauMse, segundoGrauMse, terceiroGrauMse,
        };

        
        const ProcEfetuados = {//10
            Aspiracao, AvalInicial, AvalDirigida, AvalContinuada, ChaveRautek, CanulaGuedel, DesobstrucaoVA, EmpregoDEA, GerenciamentoRiscos, LimpezaFerimento, Curativos, Compressivo, Encravamento, Ocular, Queimadura, Simples, TresPontas, Imobilizacoes, MacaRodas, MacaRigida, Ponte, RetiradoCapacete, Rcp, Rolamento90, Rolamento180, TomadaDecisao, TratadoChoque, UsoCanula, UsoColar, UsoKED, UsoTTF, VentSuporte, Oxigenoterapia, Reanimador, Meios, Auxiliares, OutrosProcedimentos, policiaMilitar, policiaCivil, policiaPRE, policiaPRF, samuUsa, samuUsb, celesc, defesaCivil, igp, cit,
        };
        const Anamnese = {//11
            sinaisSintomasAnamnese, aconteceuOutrasVezesValue, dateAconteceu, possuiProblemaDeSaudeValue, problemasDeSaude, fazUsoDeMedicacoesValue, medicacoes, dateUltimaMedicacao, ehAlergicoValue, alergia, ingeriuAlgoValue, dateIngestao,
        };
        const AnamneseGest = {//12
            fezPreNatalValue, nomeMedico, possibilidadeDeComplicacoesValue, primeiroFilhoValue, filhos, dateContracoesInicio, dateContracoesDuracao, dateContracoesIntervalo, pressaoEvacuarValue, rupturaBolsaValue, feitoInspecaoValue, partoRealizadoValue, sexoBebeValue, nomeBebe, dateNascimento
        };
        const CinObjRec = {//13
            DisturbioComportamento, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido, ObjetoRecolhido
        };
        const MatUtilizados = {//14
            materials, idReport
        };
        const Obs = {//15
            obs
        };
        
        console.log(jsonData);

        try {
            const InfPacPost = await api.post("/infpac", infPac);
            console.log(InfPacPost);

            const InfAmbPost = await api.post("/infamb", InfAmb);
            console.log(InfAmbPost);

            const TipoOcPost = await api.post("/tipooc", TipoOc);
            console.log(TipoOcPost);

            const InfConETransPost = await api.post("/infconetrans", InfConETrans);
            console.log(InfConETransPost);

            // const SinaisVitaisPost = await api.post("/sinaisvitais", SinaisVitais);
            // console.log(SinaisVitaisPost);

            const SinaisSintomasPost = await api.post("/sinaissintomas", SinaisSintomas);
            console.log(SinaisSintomasPost);

            const ProbEncPost = await api.post("/probenc", ProbEnc);
            console.log(ProbEncPost);
            
            const ProcEfetuadosPost = await api.post("/procefetuados", ProcEfetuados);
            console.log(ProcEfetuadosPost);

            const AnamnesePost = await api.post("/anamnese", Anamnese);
            console.log(AnamnesePost);

            const CinObjRecPost = await api.post("/cinobjrec", CinObjRec);
            console.log(CinObjRecPost);

            const ObsPost = await api.post("/obs", Obs);
            console.log(ObsPost);

            const AnamneseGestPost = await api.post("/anamnesegest", AnamneseGest);
            console.log(AnamneseGestPost);

            const QueimadurasPost = await api.post("/queimaduras", Queimaduras);
            console.log(QueimadurasPost);


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
            context.IdReport.setState(null);


            localStorage.removeItem('idReport')
            
            context.currentPage.setState('home');
            navigation.navigate('home');



        } catch (error) {
            // setnullSubmitError(current => !current);
            console.error(error);
        }

        // async function materiais() {
        //     context.materials.state.forEach(async ({
        //         tipo,
        //         nome,
        //         tamanho,
        //         quantidade,
        //         idReport
        //     }) => {
        //         try {
        //             const apiReply = await api.post("/materiais", {
        //                 tipo: tipo,
        //                 material: nome,
        //                 tamanho: tamanho,
        //                 quantidade: quantidade,
        //                 idReport
        //             });
        //             console.log(apiReply);
        //         } catch (error) {
        //             console.error(error);
        //         }
        //     });
        // };

        async function ferimentos() {
            context.ferimentos.state.forEach(async ({
                localF,
                lado,
                face,
                tipo,
                IdReport
            }) => {
                try {
                    const LocTrauma = await api.post("/ferimentos", {
                        local: localF,
                        lado: lado,
                        face: face,
                        tipo: tipo,
                        IdReport
                    });
                    console.log(LocTrauma);
                } catch (error) {
                    console.error(error);
                }
            });
        };
    


    }

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.StepContainer}>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('infoPac')}>
                            <Text style={styles.OcStepText}>Info. do Paciente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('infoAmb')}>
                            <Text style={styles.OcStepText}>Info. da Ambulância</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('tipoOc')}>
                            <Text style={styles.OcStepText}>Tipo de Ocorrência</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('infoTrans')}>
                            <Text style={styles.OcStepText}>Info. de Condução e Transporte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('avaliacao')}>
                            <Text style={styles.OcStepText}>Avaliação do Paciente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep}>
                            <Text style={styles.OcStepText} onPress={ () => navigation.navigate('sinaisVitais')}>Sinais Vitais</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('SS')}>
                            <Text style={styles.OcStepText}>Sinais e Sintomas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('problemasEncontrados')}>
                            <Text style={styles.OcStepText}>Problemas Encontrados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('traumas')}>
                            <Text style={styles.OcStepText}>Localização dos Traumas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('procedimentosEfetuados')}>
                            <Text style={styles.OcStepText}>Procedimentos Efetuados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('anamnese')}>
                            <Text style={styles.OcStepText}>Anamnese</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.OcStep, {display: context.sexoPac.state == "f" ? "flex" : "none"}]} onPress={ () => navigation.navigate('anamneseGestacional')}>
                            <Text style={styles.OcStepText}>Anamnese Gestacional</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('cinamaticaObjetos')}>
                            <Text style={styles.OcStepText}>Cinemática e Objetos recolhidos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('materiais')}>
                            <Text style={styles.OcStepText}>Materiais Utilizados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('obs')}>
                            <Text style={styles.OcStepText}>Observações Importantes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Enviar} onPress={transformarEmJson} >
                            <Text style={styles.OcStepText}>
                                ENVIAR OCORRENCIA
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <Footer/>

                <Modal transparent={true} visible={modalVisible}>
                    <View style={styles.PopupContainer}>
                        <View style={styles.Popup}>
                            <View style={{backgroundColor: "#E74428", borderTopStartRadius: 5, borderTopEndRadius: 5, height: 60, justifyContent: "center"}}>
                                <Text style={{fontSize: 25, textAlign: "center", color: "white", fontWeight: "bold"}}>O SEXO DO PACIENTE É:</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-around", padding: 5}}>
                                <TouchableOpacity style={[styles.ModalButton, {backgroundColor: sexoPac == "f" ? "#313131" : "#FFFFFF"}]} onPress={() => setSexoPac("f")}>
                                    <Text style={{fontSize: 21, color: sexoPac == "f" ? "#FFFFFF" : "#313131", fontWeight: "bold"}}>Feminino</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.ModalButton, {backgroundColor: sexoPac == "m" ? "#313131" : "#FFFFFF"}]} onPress={() => setSexoPac("m")}>
                                    <Text style={{fontSize: 21, color: sexoPac == "m" ? "#FFFFFF" : "#313131", fontWeight: "bold"}}>Maculino</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-around", padding: 5}}>
                                <TouchableOpacity style={[styles.ModalButton, {width: 290, backgroundColor: "#4AAE39", borderWidth: 0}]} onPress={() => escolhaSexo(sexoPac)}>
                                    <Text style={{fontSize: 21, color: "white", fontWeight: "bold"}}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>
                            

                        </View>
                    </View>
                </Modal>
            </ScrollView>
           
            

        </View>
    )
}

