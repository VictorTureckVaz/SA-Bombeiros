import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";
import { Center } from 'native-base';


export default function MainOcorrencia(){

    const navigation = useNavigation();

    const context = useContext(OcorrenciaContext);

    const [sexoPac, setSexoPac] = useState(null);
    const [modalVisible, setModalVisible] = useState(true);

    function escolhaSexo(){
        context.sexoPac.setState(sexoPac);
        setModalVisible(false);
    }
    
    function transformarEmJson(){
        const jsonString = `{${Object.entries(context)
            .map(([key, value]) => `${key}:${JSON.stringify(value.state)}`)
            .join(',\n')}}`;

            console.log(jsonString);
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
                        <TouchableOpacity style={styles.OcStep}>
                            <Text style={styles.OcStepText}>Localização dos Traumas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('procedimentosEfetuados')}>
                            <Text style={styles.OcStepText}>Procedimentos Efetuados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('anamnese')}>
                            <Text style={styles.OcStepText}>Anamnese</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.OcStep, {display: context.sexoPac.state == "feminino" ? "flex" : "none"}]} onPress={ () => navigation.navigate('anamneseGestacional')}>
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

                <Modal animationType='fade' transparent={true} visible={modalVisible}>
                    <View style={styles.PopupContainer}>
                        <View style={styles.Popup}>
                            <View style={{backgroundColor: "#E74428", borderTopStartRadius: 5, borderTopEndRadius: 5, height: 60, justifyContent: "center"}}>
                                <Text style={{fontSize: 25, textAlign: "center", color: "white", fontWeight: "bold"}}>O SEXO DO PACIENTE É:</Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-around", padding: 5}}>
                                <TouchableOpacity style={[styles.ModalButton, {backgroundColor: "#313131"}]} onPress={() => setSexoPac("feminino")}>
                                    <Text style={{fontSize: 21, color: "white", fontWeight: "bold"}}>Feminino</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.ModalButton, {backgroundColor: "#313131"}]} onPress={() => setSexoPac("masculino")}>
                                    <Text style={{fontSize: 21, color: "white", fontWeight: "bold"}}>Maculino</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-around", padding: 5}}>
                                <TouchableOpacity style={[styles.ModalButton, {width: 290, backgroundColor: "#4AAE39"}]} onPress={() => escolhaSexo(sexoPac)}>
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

