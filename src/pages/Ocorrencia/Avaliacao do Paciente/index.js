import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import RadioButton from '../../../components/RadioButton';
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";


export default function MainAvaliacao(){

    const navigation = useNavigation();
    const context = useContext(OcorrenciaContext)    
    
    const consciencia = context.aberturaOcular.state + context.respostaVerbal.state + context.respostaMotora.state //somatória de consciencia
    
    return(
        <View style={styles.Body}>
      <Header />
      <ScrollView>
        <View style={styles.Container}>
                <View style={styles.ResultContainer}>
                    <Text style={{fontSize: 20}}>Total (GCS): {consciencia}</Text>
                </View>
                <View style={styles.Result}>

                </View>
                <Text style={{fontSize: 20}}>Abertura Ocular</Text>
                <View style={{gap: 23, display: context.idadePac.state >= 5 || context.idadePac.state == null ? "flex" : "none"}}>
                    <RadioButton
                    options={[
                        {
                            optionName: "Espontânea",
                            optionValue: 4
                        },
                        {
                            optionName: "Comando Verbal",
                            optionValue: 3
                        },
                        {
                            optionName: "Estímulo Doloroso",
                            optionValue: 2
                        },
                        {
                            optionName: "Nenhum",
                            optionValue: 1
                        },
                        
                    ]}
                    selectedOption={context.aberturaOcular.state}
                    setSelectedOption={context.aberturaOcular.setState}
                    />
                    <Text style={{fontSize: 20}}>Resposta Verbal</Text>
                    <RadioButton
                    options={[
                        {
                            optionName: "Orientado",
                            optionValue: 5
                        },
                        {
                            optionName: "Confuso",
                            optionValue: 4
                        },
                        {
                            optionName: "Palavras Inapropriadas",
                            optionValue: 3
                        },
                        {
                            optionName: "Palavras Incompreensíveis",
                            optionValue: 2
                        },
                        {
                            optionName: "Nenhum",
                            optionValue: 1
                        },
                        
                    ]}
                    selectedOption={context.respostaVerbal.state}
                    setSelectedOption={context.respostaVerbal.setState}
                    />
                    <Text style={{fontSize: 20}}>Resposta Motora</Text>
                    <RadioButton
                    options={[
                        {
                            optionName: "Obedece Comandos",
                            optionValue: 6
                        },
                        {
                            optionName: "Localiza Dor",
                            optionValue: 5
                        },
                        {
                            optionName: "Movimento de Retirada",
                            optionValue: 4
                        },
                        {
                            optionName: "Flexão Anormal",
                            optionValue: 3
                        },
                        {
                            optionName: "Extensão Anormal",
                            optionValue: 2
                        },
                        {
                            optionName: "Nenhum",
                            optionValue: 1
                        },
                        
                    ]}
                    selectedOption={context.respostaMotora.state}
                    setSelectedOption={context.respostaMotora.setState}
                    />
                </View>

                <View style={{gap: 23, display: context.idadePac.state < 5 && context.idadePac.state !== null ? "flex" : "none"}}>
                    <RadioButton
                    options={[
                        {
                            optionName: "Espontânea",
                            optionValue: 4
                        },
                        {
                            optionName: "Comando Verbal",
                            optionValue: 3
                        },
                        {
                            optionName: "Estímulo Doloroso",
                            optionValue: 2
                        },
                        {
                            optionName: "Nenhum",
                            optionValue: 1
                        },
                        
                    ]}
                    selectedOption={context.aberturaOcular.state}
                    setSelectedOption={context.aberturaOcular.setState}
                    />
                    <Text style={{fontSize: 20}}>Resposta Verbal</Text>
                    <RadioButton
                    options={[
                        {
                            optionName: "Palavras Apropriadas",
                            optionValue: 5
                        },
                        {
                            optionName: "Palavras Inapropriadas",
                            optionValue: 4
                        },
                        {
                            optionName: "Choro Persistente / Gritos Sons Incompreensíveis",
                            optionValue: 3
                        },
                        {
                            optionName: "Sons Incompreensíveis",
                            optionValue: 2
                        },
                        {
                            optionName: "Nenhum",
                            optionValue: 1
                        },
                        
                    ]}
                    selectedOption={context.respostaVerbal.state}
                    setSelectedOption={context.respostaVerbal.setState}
                    />
                    <Text style={{fontSize: 20}}>Resposta Motora</Text>
                    <RadioButton
                    options={[
                        {
                            optionName: "Obedece Prontamente",
                            optionValue: 6
                        },
                        {
                            optionName: "Localiza Dor / Estímulo Tátil",
                            optionValue: 5
                        },
                        {
                            optionName: "Retirada do Seg. Estimulado",
                            optionValue: 4
                        },
                        {
                            optionName: "Flexão Anormal",
                            optionValue: 3
                        },
                        {
                            optionName: "Extensão Anormal",
                            optionValue: 2
                        },
                        {
                            optionName: "Nenhum",
                            optionValue: 1
                        },
                        
                    ]}
                    selectedOption={context.respostaMotora.state}
                    setSelectedOption={context.respostaMotora.setState}
                    />
                </View>




                <ReturnButton/>
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    )
}
