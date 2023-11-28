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

export default function MainOcorrencia(){

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
            //Principal(aqui)
            sexoPac,
            
            //Info Paciente
            nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, vitimaEraValue,
                
            //Info Ambulancia
            numUsb, numOc, despachante, kmFinal, codIr, codPs, codSia, 
                    
            //Tipo de Ocorrência
            tipoOc,
            
            //Info de Condução E Transporte
            decisao, transporteValue, socorristaA, socorristaB, socorristaC, motorista, demandante,
            
            //Avalição do Paciente
            aberturaOcular, respostaVerbal, respostaMotora,

            //Sinais Vitais
            presMax, presMin, pulso, respiracao, sat, temperatura, hgt, perfusaoValue, normalidade,

            //Sinais e Sintomas
            abdomen, afundamento, agitacao, amnesia, anginaPeito, apneia, bradicardia, bradipneia, broncoAspirando, cefaleia, convulsao, decorticacao, deformidade, descerebracao, desmaio, desvioTraqueia, dispneia, dorLocal, enfisemaSubcutaneo, extaseJugular, facePalida, hemorragiaInterna, hemorragiaExterna, hipertensão, nauseasVomito, nasoragia, obito, otorreia, ovace, paradaCardiaca, paradaRespiratoria, priapismo, pruridoPele, pupilasAnisocori, pupilasIsocoria, pupilasMidriase, pupilasMiose, pupilasReagente, pupilasNaoReagente, sinalBattle, sinalGuaxinim, sudorese, taquipneia, taquicardia, tontura, outros,

            //Problemas Encontrados
            psico, resp, diabetes, outrosProblemas,

            //Procedimentos Efetuados
            Aspiracao, AvalInicial, AvalDirigida, AvalContinuada, ChaveRautek, CanulaGuedel, DesobstrucaoVA, EmpregoDEA, GerenciamentoRiscos, LimpezaFerimento, Curativos, Compressivo, Encravamento, Ocular, Queimadura, Simples, TresPontas, Imobilizacoes, MacaRodas, MacaRigida, Ponte, RetiradoCapacete, Rcp, Rolamento90, Rolamento180, TomadaDecisao, TratadoChoque, UsoCanula, UsoColar, UsoKED, UsoTTF, VentSuporte, Oxigenoterapia, Reanimador, Meios, Auxiliares, OutrosProcedimentos,

            //Anamnese
            aconteceuOutrasVezesValue, dateAconteceu, possuiProblemaDeSaudeValue, problemasDeSaude, fazUsoDeMedicacoesValue, medicacoes, ehAlergicoValue, alergia, ingeriuAlgoValue, dateIngestao,

            //Anamnese Gestacional
            fezPreNatalValue, nomeMedico, possibilidadeDeComplicacoesValue, primeiroFilhoValue, filhos, dateContracoesInicio, dateContracoesDuracao, dateContracoesIntervalo, pressaoEvacuarValue, rupturaBolsaValue, feitoInspecaoValue, partoRealizadoValue, sexoBebeValue, nomeBebe, dateNascimento, 

            //Cinematica de Objetos Recolhidos
            ObjetoRecolhido, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido, 

            //Materiais Utilizados
            materialTypeValue, materialValue, materialSizeValue, materialAmount,

            //Observações Importantes
            obs,
        } = jsonData;

        const infPac = {
            nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom, vitimaEraValue
        };
        const InfAmb = {
            numUsb, numOc, despachante, kmFinal, codIr, codPs, codSia
        };
        const TipoOc = {//tenho que fazer
            tipoOc, outroTipoOc
        };
        const InfConETrans = {
            decisao, transporteValue, socorristaA, socorristaB, socorristaC, motorista, demandante
        };
        const AvalPac = {
            aberturaOcular, respostaVerbal, respostaMotora
        };
        const SinaisVitais = {
            presMax, presMin, pulso, respiracao, sat, temperatura, hgt, perfusaoValue, normalidade
        };
        const SinaisSintomas = {
            abdomen, afundamento, agitacao, amnesia, anginaPeito, apneia, bradicardia, bradipneia, broncoAspirando, cefaleia, convulsao, decorticacao, deformidade, descerebracao, desmaio, desvioTraqueia, dispneia, dorLocal, enfisemaSubcutaneo, extaseJugular, facePalida, hemorragiaInterna, hemorragiaExterna, hipertensão, nauseasVomito, nasoragia, obito, otorreia, ovace, paradaCardiaca, paradaRespiratoria, priapismo, pruridoPele, pupilasAnisocori, pupilasIsocoria, pupilasMidriase, pupilasMiose, pupilasReagente, pupilasNaoReagente, sinalBattle, sinalGuaxinim, sudorese, taquipneia, taquicardia, tontura, outros

        };
        const ProbEnc = {
            psico, resp, diabetes, outrosProblemas
        };
        const LocTrauma ={
            
        };
        const ProcEfetuados = {
            Aspiracao, AvalInicial, AvalDirigida, AvalContinuada, ChaveRautek, CanulaGuedel, DesobstrucaoVA, EmpregoDEA, GerenciamentoRiscos, LimpezaFerimento, Curativos, Compressivo, Encravamento, Ocular, Queimadura, Simples, TresPontas, Imobilizacoes, MacaRodas, MacaRigida, Ponte, RetiradoCapacete, Rcp, Rolamento90, Rolamento180, TomadaDecisao, TratadoChoque, UsoCanula, UsoColar, UsoKED, UsoTTF, VentSuporte, Oxigenoterapia, Reanimador, Meios, Auxiliares, OutrosProcedimentos
        };
        const Anamnese = {
            aconteceuOutrasVezesValue, dateAconteceu, possuiProblemaDeSaudeValue, problemasDeSaude, fazUsoDeMedicacoesValue, medicacoes, ehAlergicoValue, alergia, ingeriuAlgoValue, dateIngestao
        };
        const AnamneseGest = {
            fezPreNatalValue, nomeMedico, possibilidadeDeComplicacoesValue, primeiroFilhoValue, filhos, dateContracoesInicio, dateContracoesDuracao, dateContracoesIntervalo, pressaoEvacuarValue, rupturaBolsaValue, feitoInspecaoValue, partoRealizadoValue, sexoBebeValue, nomeBebe, dateNascimento
        };
        const CinObjRec = {
            ObjetoRecolhido, EncontradoCapacete, EncontradoCinto, ParaBrisasAvariado, CaminhandoCena, PainelAvariado, VolanteTorcido
        };
        const MatUtilizados = {//tem q ver como essa pagina vai funcionar depois
            materialTypeValue, materialValue, materialSizeValue, materialAmount
        };
        const Obs = {
            obs
        };
        
        console.log(jsonString);

        // try {
        //     const apiReply1 = await api.post("/submit", JSON.parse(jsonString));
        //     console.log("deu certo:\n"+jsonString);
        // } catch (error) {
        //     setSubmitError(current => !current);
        //     console.error(error);
        // }
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
                        <TouchableOpacity style={styles.OcStep} >
                            <TouchableOpacity onPress={transformarEmJson}>
                                <Text>
                                    ENVIAR OCORRENCIA
                                </Text>
                            </TouchableOpacity>
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

