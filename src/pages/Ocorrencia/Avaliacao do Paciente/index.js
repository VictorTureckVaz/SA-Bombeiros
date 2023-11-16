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
            <Header/>
            <View style={styles.Container}>
                <View style={styles.ResultContainer}>
                    <Text>Total (GCS): {consciencia}</Text>
                </View>
                <View style={styles.Result}>

                </View>

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
                selectedOption={context.respostaVerbal.state}
                setSelectedOption={context.respostaVerbal.setState}
                />

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
                selectedOption={context.respostaMotora.state}
                setSelectedOption={context.respostaMotora.setState}
                />





                <ReturnButton/>
            </View>
           
                

            
            
            
            

        </View>
    )
}
