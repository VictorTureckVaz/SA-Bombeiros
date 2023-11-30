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

            const MatUtilizadosPost = await api.post("/anamnesegest", AnamneseGest);
            console.log(MatUtilizadosPost);


        } catch (error) {
            // setnullSubmitError(current => !current);
            console.error(error);
        }

        async function materiais() {
            context.materials.state.forEach(async ({
                tipo,
                nome,
                tamanho,
                quantidade,
                idReport
            }) => {
                try {
                    const apiReply = await api.post("/materiais", {
                        tipo: tipo,
                        material: nome,
                        tamanho: tamanho,
                        quantidade: quantidade,
                        idReport
                    });
                    console.log(apiReply);
                } catch (error) {
                    console.error(error);
                }
            });
        };

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

