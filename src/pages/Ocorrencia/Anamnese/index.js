import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons/faFaceFrownOpen'
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import SelectList from './../../../components/SelectList'
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from '../../../context/ocorrenciaContext';

export default function MainAnamnese(){

    const navigation = useNavigation();

    

    const context = useContext(OcorrenciaContext)

    

    if(context.possuiProblemaDeSaudeValue.state == "nao"){
        context.problemasDeSaude.setState(null);
    }
    if(context.fazUsoDeMedicacoesValue.state == "nao"){
        context.medicacoes.setState(null);
    }
    if(context.ehAlergicoValue.state == "nao"){
        context.alergia.setState(null);
    }

    
    return(
        <View style={styles.Body}>
            <Header/>
            
            <ScrollView>
                <View style={styles.Container}>
                    <TextInput
                        placeholder = 'Sinais e Sintomas'
                        keyboardType = 'default'
                        style={styles.TextInput}
                        onChangeText={context.motorista.setState}
                        value={context.motorista.state}
                    />
                    <SelectList
                         options={[
                              {
                                   optionName: "Sim",
                                   optionValue: "sim"
                              },
                              {
                                   optionName: "Não",
                                   optionValue: "nao"
                              },
                         ]}
                         selectedOptionName={context.aconteceuOutrasVezesName.state}
                         setSelectedOptionName={context.aconteceuOutrasVezesName.setState}
                         selectedOptionValue={context.aconteceuOutrasVezesValue.state}
                         setSelectedOptionValue={context.aconteceuOutrasVezesValue.setState}
                         title={'Aconteceu Outras Vezes?'}
                    />

                    
                    <SelectList
                         options={[
                              {
                                   optionName: "Sim",
                                   optionValue: "sim"
                              },
                              {
                                   optionName: "Não",
                                   optionValue: "nao"
                              },
                         ]}
                         selectedOptionName={context.possuiProblemaDeSaudeName.state}
                         setSelectedOptionName={context.possuiProblemaDeSaudeName.setState}
                         selectedOptionValue={context.possuiProblemaDeSaudeValue.state}
                         setSelectedOptionValue={context.possuiProblemaDeSaudeValue.setState}
                         title={'Possui Problemas de Saúde?'}
                    />
                    <TextInput
                        placeholder = 'Quais Problemas?'
                        keyboardType = 'default'
                        style={[styles.TextInput, {display: context.possuiProblemaDeSaudeValue.state == "sim" ? "flex" : "none"}]}
                        onChangeText={context.problemasDeSaude.setState}
                        value={context.problemasDeSaude.state}
                    />
                

                    
                    <SelectList
                         options={[
                              {
                                   optionName: "Sim",
                                   optionValue: "sim"
                              },
                              {
                                   optionName: "Não",
                                   optionValue: "nao"
                              },
                         ]}
                         selectedOptionName={context.fazUsoDeMedicacoesName.state}
                         setSelectedOptionName={context.fazUsoDeMedicacoesName.setState}
                         selectedOptionValue={context.fazUsoDeMedicacoesValue.state}
                         setSelectedOptionValue={context.fazUsoDeMedicacoesValue.setState}
                         title={'Faz Uso de Medicações?'}
                    />
                    <TextInput
                        placeholder = 'Quais Medicações?'
                        keyboardType = 'default'
                        style={[styles.TextInput, {display: context.fazUsoDeMedicacoesValue.state == "sim" ? "flex" : "none"}]}
                        onChangeText={context.medicacoes.setState}
                        value={context.medicacoes.state}
                    />
                

                    
                    <SelectList
                         options={[
                              {
                                   optionName: "Sim",
                                   optionValue: "sim"
                              },
                              {
                                   optionName: "Não",
                                   optionValue: "nao"
                              },
                         ]}
                         selectedOptionName={context.ehAlergicoName.state}
                         setSelectedOptionName={context.ehAlergicoName.setState}
                         selectedOptionValue={context.ehAlergicoValue.state}
                         setSelectedOptionValue={context.ehAlergicoValue.setState}
                         title={'Alergico a Alguma Coisa?'}
                    />
                    <TextInput
                        placeholder = 'Especifique a Alergia'
                        keyboardType = 'default'
                        style={[styles.TextInput, {display: context.ehAlergicoValue.state == "sim" ? "flex" : "none"}]}
                        onChangeText={context.alergia.setState}
                        value={context.alergia.state}
                    />

                    <SelectList
                         options={[
                              {
                                   optionName: "Sim",
                                   optionValue: "sim"
                              },
                              {
                                   optionName: "Não",
                                   optionValue: "nao"
                              },
                         ]}
                         selectedOptionName={context.ingeriuAlgoName.state}
                         setSelectedOptionName={context.ingeriuAlgoName.setState}
                         selectedOptionValue={context.ingeriuAlgoValue.state}
                         setSelectedOptionValue={context.ingeriuAlgoValue.setState}
                         title={'Ingeriu Alimento / Líquido ≥ 6H'}
                    />
                
                
                
                    <ReturnButton/>
                    
                </View>
                <Footer/>
            </ScrollView>
        </View>
    )
}
