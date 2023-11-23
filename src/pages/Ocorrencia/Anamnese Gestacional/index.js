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
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MainAnamneseGestacional(){

    const navigation = useNavigation();

    //|   O
    //|  /|\
    //|  / \

    const context = useContext(OcorrenciaContext);

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
   
    const onChange = (e, selectedDate) => {
          setDate(selectedDate);
          setShow(false);
    }

    const showMode = (modeToShow) => {
          setShow(true);
          setMode(modeToShow);
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
                    <TouchableOpacity onPress={() => showMode('date')}>
                         <Text>teste</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showMode('time')}>
                         <Text>teste</Text>
                    </TouchableOpacity>
                    {
                         show && (
                              <DateTimePicker
                              value={date}
                              mode={mode}
                              is24Hour={true}
                              onChange={onChange}
                              />
                         )
                    }
                    <Text>{date.toLocaleString()}</Text>
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
                         selectedOptionName={context.primeiroFilhoName.state}
                         setSelectedOptionName={context.primeiroFilhoName.setState}
                         selectedOptionValue={context.primeiroFilhoValue.state}
                         setSelectedOptionValue={context.primeiroFilhoValue.setState}
                         title={'Primeiro Filho?'}
                    />
                    <TextInput
                        placeholder = 'Quantos Filhos'
                        keyboardType = 'default'
                        style={[styles.TextInput, {display: context.primeiroFilhoValue.state == "nao" ? "flex" : "none"}]}
                        onChangeText={context.filhos.setState}
                        value={context.filhos.state}
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
