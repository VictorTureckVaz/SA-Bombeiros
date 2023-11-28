import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import SelectList from '../../../components/SelectList';
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";

export default function MainSinaisVitais(){
    
    const navigation = useNavigation();
    const context = useContext(OcorrenciaContext);

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
            
                <View style={styles.Container}>
                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Pressão Arterial: </Text>
                         <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={context.presMax.state} onPress={ () => setPresMax() } onChangeText={context.presMax.setState}/>

                         <Text style={styles.Text}> X </Text>
                         
                         <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={context.presMin.state} onPress={ () => setPresMin() } onChangeText={context.presMin.setState}/>
                         <Text style={[styles.Text, {textAlign: "right", flex: 1}]}> mmHg </Text>
                    </View>

                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Pulso:</Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={context.pulso.state} onPress={ () => setPulso() } onChangeText={context.pulso.setState}/>
                         <Text style={[styles.Text, {textAlign: "right", flex: 1}]}> B.C.P.M. </Text>
                    </View>
                    
                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Respiração:</Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={context.respiracao.state} onPress={ () => setResp() } onChangeText={context.respiracao.setState}/>
                         <Text style={[styles.Text, {textAlign: "right", flex: 1}]}>  M.R.M. </Text>
                    </View>

                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Saturação:</Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={context.sat.state} onChangeText={context.sat.setState}/>
                         <Text style={[styles.Text, {textAlign: "right", flex: 1}]}>%</Text>
                    </View>

                    <View style={styles.TempHGTContainer}>
                         <View style={styles.ReducedBorderContainer}>
                              <Text style={styles.Text}>Temperatura:</Text>
                              <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={context.temperatura.state} onChangeText={context.temperatura.setState}/>
                              <Text style={[styles.Text, {textAlign: "right", flex: 1}]}>ºC</Text>
                         </View>
                         
                         <View style={styles.MiniBorderContainer}>
                              <Text style={styles.Text}>HGT:</Text>
                              <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={context.hgt.state} onChangeText={context.hgt.setState}/>
                         </View>
                    </View>


                    <SelectList
                    options={[
                        {
                            optionName: "> 2 Segundos ( MAIOR )",
                            optionValue: "maiorDoisSegundos"
                        },
                        {
                            optionName: "< 2 segundos ( MENOR )",
                            optionValue: "menorDoisSegundos"
                        },
                    ]}
                    selectedOptionName={context.perfusaoName.state}
                    setSelectedOptionName={context.perfusaoName.setState}
                    selectedOptionValue={context.perfusaoValue.state}
                    setSelectedOptionValue={context.perfusaoValue.setState}
                    title={"Perfusão"}
                    />

                    <View style={[styles.BorderContainer, {justifyContent: "space-around"}]}> 
                        <TouchableOpacity style={{flexDirection: "row", gap: 5, alignItems: "center"}} onPress={ () => context.normalidade.setState("Anormal")}>
                                <View 
                                style={[
                                    styles.CheckBox, 
                                    {backgroundColor: context.normalidade.state == "Anormal" 
                                    ? "green" 
                                    : "transparent"
                                    }]}>
                                </View>
                                <Text style={styles.Text}>Anormal</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={{flexDirection: "row", gap: 5, alignItems: "center"}} onPress={ () => context.normalidade.setState("Normal")}>
                                <View 
                                style={[
                                    styles.CheckBox, 
                                    {backgroundColor: context.normalidade.state == "Normal" 
                                    ? "green" 
                                    : "transparent"
                                    }]}>
                                </View>
                                <Text style={styles.Text}>Normal</Text>
                        </TouchableOpacity>

                    </View>
               
                    
                    
                </View>
                
                
                <ReturnButton/>
                
                <Footer/>
            </ScrollView>
        </View>
    )
}
