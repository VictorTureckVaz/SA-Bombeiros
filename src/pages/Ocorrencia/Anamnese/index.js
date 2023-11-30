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
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MainAnamnese(){

    const navigation = useNavigation();

    const context = useContext(OcorrenciaContext);
   
    const onChangeIngestao = (e, selectedDate) => {
          context.dateIngestao.setState(selectedDate);
          context.showIngestao.setState(false);
    }

    const showModeIngestao = (modeToShow) => {
          context.showIngestao.setState(true);

          context.mode.setState(modeToShow);
    }

    const onChangeAconteceu = (e, selectedDate) => {
          context.dateAconteceu.setState(selectedDate);
          context.showAconteceu.setState(false);
    }

    const showModeAconteceu = (modeToShow) => {
          context.showAconteceu.setState(true);

          context.mode.setState(modeToShow);
    }

    const onChangeUltimaMedicacao = (e, selectedDate) => {
          context.dateUltimaMedicacao.setState(selectedDate);
          context.showUltimaMedicacao.setState(false);
    }

    const showModeUltimaMedicacao = (modeToShow) => {
          context.showUltimaMedicacao.setState(true);

          context.mode.setState(modeToShow);
    }

     
     


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
                        onChangeText={context.sinaisSintomasAnamnese.setState}
                        value={context.sinaisSintomasAnamnese.state}
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

                    <TouchableOpacity style={[styles.TextInput, {display: context.aconteceuOutrasVezesValue.state ? "flex" : "none"}]} onPress={() => showModeAconteceu('date')}>
                         <Text style={{fontSize: 20}}>Há Quanto Tempo Aconteceu? {context.dateAconteceu.state.toLocaleDateString()}</Text>
                         {
                              context.showIngestao.state && (
                                   <DateTimePicker
                                   value={context.dateAconteceu.state}
                                   mode={context.mode.state}
                                   is24Hour={true}
                                   onChange={onChangeAconteceu}
                                   />
                              )
                         }
                    </TouchableOpacity>

                    
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

                    <TouchableOpacity style={[styles.TextInput, {display: context.fazUsoDeMedicacoesValue.state == "sim" ? "flex" : "none",}]} onPress={() => showModeUltimaMedicacao('time')}>
                         <Text style={{fontSize: 20}}>Horário da Última Medicação: {context.dateUltimaMedicacao.state.toLocaleTimeString()}</Text>
                         {
                         context.showUltimaMedicacao.state && (
                              <DateTimePicker
                              value={context.dateUltimaMedicacao.state}
                              mode={context.mode.state}
                              is24Hour={true}
                              onChange={onChangeUltimaMedicacao}
                              />
                         )
                         }

                    </TouchableOpacity>
                

                    
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
                    <TouchableOpacity style={[styles.TextInput, {display: context.ingeriuAlgoValue.state == "sim" ? "flex" : "none",}]} onPress={() => showModeIngestao('time')}>
                         <Text style={{fontSize: 20}}>Horário da Última Ingestão: {context.dateIngestao.state.toLocaleTimeString()}</Text>
                         {
                         context.showIngestao.state && (
                              <DateTimePicker
                              value={context.dateIngestao.state}
                              mode={context.mode.state}
                              is24Hour={true}
                              onChange={onChangeIngestao}
                              />
                         )
                         }

                    </TouchableOpacity>
                
                
                
                    <ReturnButton/>
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    )
}
