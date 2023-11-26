import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import SelectList from '../../../components/SelectList';
import ReturnButton from '../../../components/ReturnButton';

export default function MainSinaisVitais(){
    
    const navigation = useNavigation();

    const [presMax, setPresMax] = useState(0);
    const [presMin, setPresMin] = useState(0);
    const [pulso, setPulso] = useState(0);
    const [resp, setResp] = useState(0);
    const [sat, setSat] = useState(0);
    const [usingMenu, setUsingMenu] = useState(0);
    const [perfusaoName, setPerfusaoName] = useState(null);
    const [perfusaoValue, setPerfusaoValue] = useState(null);
    const [normalidade, setNormalidade] = useState(null);

 

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
            
                <View style={styles.Container}>
                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Pressão Arterial: </Text>
                         <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={presMax} onPress={ () => setPresMax() }/>
                         <Text style={styles.Text}> X </Text>
                         <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={presMin} onPress={ () => setPresMin() }/>
                         <Text style={[styles.Text, {textAlign: "right", flex: 1}]}> mmHg </Text>
                    </View>

                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Pulso:               </Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                         <Text style={[styles.Text, {textAlign: "right", flex: 1}]}> B.C.P.M. </Text>
                    </View>
                    
                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Respiração:     </Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                         <Text style={[styles.Text, {textAlign: "right", flex: 1}]}>  M.R.M. </Text>
                    </View>

                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Saturação:       </Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                         <Text style={[styles.Text, {textAlign: "right", flex: 1}]}>%</Text>
                    </View>

                    <View style={styles.TempHGTContainer}>
                         <View style={styles.ReducedBorderContainer}>
                              <Text style={styles.Text}>Temperatura:</Text>
                              <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                              <Text style={[styles.Text, {textAlign: "right", flex: 1}]}>ºC</Text>
                         </View>
                         
                         <View style={styles.MiniBorderContainer}>
                              <Text style={styles.Text}>HGT:</Text>
                              <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
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
                    usingMenu={usingMenu}
                    setUsingMenu={setUsingMenu}
                    selectedOptionName={perfusaoName}
                    setSelectedOptionName={setPerfusaoName}
                    selectedOptionValue={perfusaoValue}
                    setSelectedOptionValue={setPerfusaoValue}
                    title={"Perfusão"}
                    />

                    <View style={[styles.BorderContainer, {justifyContent: "space-around"}]}> 
                        <TouchableOpacity style={{flexDirection: "row", gap: 5, alignItems: "center"}} onPress={ () => setNormalidade("Anormal")}>
                                <View 
                                style={[
                                    styles.CheckBox, 
                                    {backgroundColor: normalidade == "Anormal" 
                                    ? "green" 
                                    : "transparent"
                                    }]}>
                                </View>
                                <Text style={styles.Text}>Anormal</Text>
                        </TouchableOpacity>
            
                        <TouchableOpacity style={{flexDirection: "row", gap: 5, alignItems: "center"}} onPress={ () => setNormalidade("Normal")}>
                                <View 
                                style={[
                                    styles.CheckBox, 
                                    {backgroundColor: normalidade == "Normal" 
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
