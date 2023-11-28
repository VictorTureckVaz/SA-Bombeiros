import React, { useState, useContext, useEffect } from 'react';    //
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

    
   
    const onChangeContracoesInicio = (e, selectedDate) => {
          context.dateContracoesInicio.setState(selectedDate);
          context.showContracoesInicio.setState(false);
    }

    const showModeContracoesInicio = (modeToShow) => {
          context.showContracoesInicio.setState(true);
          context.mode.setState(modeToShow);
    }
    const onChangeContracoesDuracao = (e, selectedDate) => {
          context.dateContracoesDuracao.setState(selectedDate);
          context.showContracoesDuracao.setState(false);
    }

    const showModeContracoesDuracao = (modeToShow) => {
          context.showContracoesDuracao.setState(true);
          context.mode.setState(modeToShow);
    }
    const onChangeContracoesIntervalo = (e, selectedDate) => {
          context.dateContracoesIntervalo.setState(selectedDate);
          context.showContracoesIntervalo.setState(false);
    }

    const showModeContracoesIntervalo = (modeToShow) => {
          context.showContracoesIntervalo.setState(true);
          context.mode.setState(modeToShow);
    }

    const onChangeDateNascimento = (e, selectedDate) => {
          context.dateNascimento.setState(selectedDate);
          context.showNascimento.setState(false);
    }

    const showModeDateNascimento = (modeToShow) => {
          context.showNascimento.setState(true);
          context.mode.setState(modeToShow);
    }

    useEffect(() => {
        
          if(context.filhos.state < 1){
               context.filhos.setState(1);
          }
     
     })

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
                         selectedOptionName={context.possibilidadeDeComplicacoesName.state}
                         setSelectedOptionName={context.possibilidadeDeComplicacoesName.setState}
                         selectedOptionValue={context.possibilidadeDeComplicacoesValue.state}
                         setSelectedOptionValue={context.possibilidadeDeComplicacoesValue.setState}
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
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10, display: context.primeiroFilhoValue.state == "nao" ? "flex" : "none"}}>
                        <Text style={{fontSize: 20, width: "50%"}}>Quant. de Filhos:</Text>
                        <View style={styles.counterContainer}>
                            <TouchableOpacity onPress={() => context.filhos.setState(context.filhos.state-1)}>
                                <Text style={{fontSize: 25}}>-</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 25}}>{context.filhos.state}</Text>
                            <TouchableOpacity onPress={() => context.filhos.setState(context.filhos.state+1)}>
                                <Text style={{fontSize: 25}}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {
                         context.showContracoesInicio.state && (
                              <DateTimePicker
                              value={context.dateContracoesInicio.state}
                              mode={context.mode.state}
                              is24Hour={true}
                              onChange={onChangeContracoesInicio}
                              />
                         )
                    }
                    <TouchableOpacity onPress={() => showModeContracoesInicio('time')} style={[styles.TextInput]}>
                         <Text style={{fontSize: 20}}>Horário de Início das Contrações: {context.dateContracoesInicio.state.toLocaleTimeString()}</Text>
                    </TouchableOpacity>
                    {
                         context.showContracoesDuracao.state && (
                              <DateTimePicker
                              value={context.dateContracoesDuracao.state}
                              mode={context.mode.state}
                              is24Hour={true}
                              onChange={onChangeContracoesDuracao}
                              />
                         )
                    }
                    <TouchableOpacity onPress={() => showModeContracoesDuracao('time')} style={[styles.TextInput]}>
                         <Text style={{fontSize: 20}}>Duração das Contrações: {context.dateContracoesDuracao.state.toLocaleTimeString()}</Text>
                    </TouchableOpacity>

                    {
                         context.showContracoesIntervalo.state && (
                              <DateTimePicker
                              value={context.dateContracoesIntervalo.state}
                              mode={context.mode.state}
                              is24Hour={true}
                              onChange={onChangeContracoesIntervalo}
                              />
                         )
                    }
                    <TouchableOpacity onPress={() => showModeContracoesIntervalo('time')} style={[styles.TextInput]}>
                         <Text style={{fontSize: 20}}>Intervalo das Contrações: {context.dateContracoesIntervalo.state.toLocaleTimeString()}</Text>
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
                         selectedOptionName={context.pressaoEvacuarName.state}
                         setSelectedOptionName={context.pressaoEvacuarName.setState}
                         selectedOptionValue={context.pressaoEvacuarValue.state}
                         setSelectedOptionValue={context.pressaoEvacuarValue.setState}
                         title={'Sente Pressão no Quadril ou Vontade de Evacuar'}
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
                         selectedOptionName={context.rupturaBolsaName.state}
                         setSelectedOptionName={context.rupturaBolsaName.setState}
                         selectedOptionValue={context.rupturaBolsaValue.state}
                         setSelectedOptionValue={context.rupturaBolsaValue.setState}
                         title={'Já Houve Ruptura da Bolsa?'}
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
                         selectedOptionName={context.feitoInspecaoName.state}
                         setSelectedOptionName={context.feitoInspecaoName.setState}
                         selectedOptionValue={context.feitoInspecaoValue.state}
                         setSelectedOptionValue={context.feitoInspecaoValue.setState}
                         title={'Foi Feito Inspeção Visual?'}
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
                         selectedOptionName={context.partoRealizadoName.state}
                         setSelectedOptionName={context.partoRealizadoName.setState}
                         selectedOptionValue={context.partoRealizadoValue.state}
                         setSelectedOptionValue={context.partoRealizadoValue.setState}
                         title={'Parto Realizado?'}
                    />

                    <View style={{display: context.partoRealizadoValue.state == "sim" ? "flex" : "none", gap: 23}}>
                         <SelectList
                              options={[
                                   {
                                        optionName: "Feminino",
                                        optionValue: "f"
                                   },
                                   {
                                        optionName: "Masculino",
                                        optionValue: "m"
                                   },
                              ]}
                              selectedOptionName={context.sexoBebeName.state}
                              setSelectedOptionName={context.sexoBebeName.setState}
                              selectedOptionValue={context.sexoBebeValue.state}
                              setSelectedOptionValue={context.sexoBebeValue.setState}
                              title={'Sexo do Bebê'}
                         />
                         <TextInput
                         placeholder = 'Nome do Bebê'
                         keyboardType = 'default'
                         style={[styles.TextInput]}
                         onChangeText={context.nomeBebe.setState}
                         value={context.nomeBebe.state}
                         />
                         <TouchableOpacity onPress={() => showModeDateNascimento('time')} style={[styles.TextInput]}>
                              <Text style={{fontSize: 20}}>Horário de Início das Contrações: {context.dateNascimento.state.toLocaleTimeString()}</Text>
                         </TouchableOpacity>
                         {
                              context.showNascimento.state && (
                                   <DateTimePicker
                                   value={context.dateNascimento.state}
                                   mode={context.mode.state}
                                   is24Hour={true}
                                   onChange={onChangeDateNascimento}
                                   />
                              )
                         }
                    

                    </View>
                
                
                
                    <ReturnButton/>
                    
                </View>
                <Footer/>
            </ScrollView>
        </View>
    )
}



