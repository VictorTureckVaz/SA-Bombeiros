import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons/faFaceFrownOpen'
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import SelectList from './../../../components/SelectList'
import ReturnButton from '../../../components/ReturnButton';

export default function MainTransporte(){

    const navigation = useNavigation();

    const [usingMenu, setUsingMenu] = useState(false);
    const [transporteValue, setTransporteValue] = useState(null);
    const [transporteName, setTransporteName] = useState("Forma de Condução");
    const [decisao, setDecisao] = useState(null);
    const [motorista, setMotorista] = useState(false);
    const [socorristaA, setSocorristaA] = useState(null);
    const [socorristaB, setSocorristaB] = useState(null);
    const [socorristaC, setSocorristaC] = useState(null);
    const [demandante, setDemandante] = useState(null);

    function teste(){
        return(
            <TextInput placeholder = 'Motorista' keyboardType = 'default' style={styles.TextInput} onChangeText={setMotorista}/>
        )
    }



    
    return(
        <View style={styles.Body}>
            <Header/>
            
            <ScrollView>
                <View style={styles.Container}>

                    <View style={styles.BorderContainer}>
                    <Text style={styles.TittleText}>Decisão de Transporte:</Text>
                        <View style={styles.ToggleButtonContainer}>
                                <TouchableOpacity style={[styles.ToggleButton, {backgroundColor: "#D2EBCE", borderColor: "#A4D79C", borderWidth: decisao == "estavel" ? 3 : 0}]} onPress={ () => setDecisao("estavel") }>  
                                    <Image
                                    style={styles.ToggleButtonIcon}
                                    source={require('../../../../assets/HappyHappy.png')}
                                    />
                                    <Text style={[styles.ToggleButtonText, {color: "#4AAE39"}]}>Estável</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.ToggleButton, {backgroundColor: "#FBE6CD", borderColor: "#F9CE9C", borderWidth: decisao == "instavel" ? 3 : 0}]} onPress={ () => setDecisao("instavel") }>
                                    <Image
                                    style={styles.ToggleButtonIcon}
                                    source={require('../../../../assets/ConfusedConfused.png')}
                                    />
                                    <Text style={[styles.ToggleButtonText, {color: "#D97600"}]}>Instável</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.ToggleButton, {backgroundColor: "#F9EDCB", borderColor: "#F1D585", borderWidth: decisao == "potencialmenteinstavel" ? 3 : 0}]} onPress={ () => setDecisao("potencialmenteinstavel") }>
                                    <Image
                                    style={styles.ToggleButtonIcon}
                                    source={require('../../../../assets/NeutralNeutral.png')}
                                    />
                                    <Text style={[styles.ToggleButtonText, {color: "#C59203"}]}>Potencialmente Instável</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.ToggleButton, {backgroundColor: "#F9D0C9", borderColor: "#F3A294", borderWidth: decisao == "critico" ? 3 : 0}]} onPress={ () => setDecisao("critico") }>
                                    <Image
                                    style={styles.ToggleButtonIcon}
                                    source={require('../../../../assets/DisappointedDisappointed.png')}
                                    />
                                    <Text style={[styles.ToggleButtonText, {color: "#E74428"}]}>Crítico</Text>
                                </TouchableOpacity>        
                        </View>
                    </View>
                    <View>
                        <SelectList
                            options={[
                                {
                                    optionName: "Deitada",
                                    optionValue: "deitada"
                                },
                                {
                                    optionName: "Semi-sentada",
                                    optionValue: "semisentada"
                                },
                                {
                                    optionName: "Sentada",
                                    optionValue: "sentada"
                                },
                            ]}
                            usingMenu={usingMenu}
                            setUsingMenu={setUsingMenu}
                            selectedOptionName={transporteName}
                            setSelectedOptionName={setTransporteName}
                            selectedOptionValue={transporteValue}
                            setSelectedOptionValue={setTransporteValue}
                        />
                    </View>
                    <Text style={styles.Text}>Equipe de Atendimento</Text>
                    <TextInput placeholder = 'Motorista' keyboardType = 'default' style={styles.TextInput} onChangeText={setMotorista}/>
                    <TextInput placeholder = 'Socorrista #1' keyboardType = 'default' style={styles.TextInput} onChangeText={setSocorristaA}/>
                    <TextInput placeholder = 'Socorrista #2' keyboardType = 'default' style={styles.TextInput} onChangeText={setSocorristaB}/>
                    <TextInput placeholder = 'Socorrista #3' keyboardType = 'default' style={styles.TextInput} onChangeText={setSocorristaC}/>
                    <TextInput placeholder = 'Demandante' keyboardType = 'default' style={styles.TextInput} onChangeText={setDemandante}/>
                
                
                
                    <ReturnButton/>
                    
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    )
}
