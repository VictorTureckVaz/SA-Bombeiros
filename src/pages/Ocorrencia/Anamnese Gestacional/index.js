import React, { useState, useContext } from 'react';    //
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons/faFaceFrownOpen'
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import SelectList from '../../../components/SelectList'
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from '../../../context/ocorrenciaContext';

export default function MainAnamneseGestacional(){

    const navigation = useNavigation();

    //|   O
    //|  /|\
    //|  / \

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
                         selectedOptionName={context.fezPreNatalName.state}
                         setSelectedOptionName={context.fezPreNatalName.setState}
                         selectedOptionValue={context.fezPreNatalValue.state}
                         setSelectedOptionValue={context.fezPreNatalValue.setState}
                         title={'Fez Pré-Natal?'}
                    />

                    <TextInput
                         placeholder = 'Nome do Médico'
                         keyboardType = 'default'
                         style={[styles.TextInput, {display: context.fezPreNatalValue.state == "sim" ? 'flex' : 'none'}]}
                         onChangeText={context.nomeMedico.setState}
                         value={context.nomeMedico.state}
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
                         title={'Possibilidade de Complicações?'}
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
                         title={'Primeiro Filho?'}
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
                         title={'Sente Pressão no Quadril ou Vontade de Evacuar'}
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
