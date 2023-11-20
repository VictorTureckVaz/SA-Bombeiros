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

    const context = useContext(OcorrenciaContext)

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
                                <TouchableOpacity style={[styles.ToggleButton, {backgroundColor: "#D2EBCE", borderColor: "#A4D79C", borderWidth: context.decisao.state == "estavel" ? 3 : 0}]} onPress={ () => context.decisao.setState("estavel") }>  
                                    <Image
                                    style={styles.ToggleButtonIcon}
                                    source={require('../../../../assets/HappyHappy.png')}
                                    />
                                    <Text style={[styles.ToggleButtonText, {color: "#4AAE39"}]}>Estável</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.ToggleButton, {backgroundColor: "#FBE6CD", borderColor: "#F9CE9C", borderWidth: context.decisao.state == "instavel" ? 3 : 0}]} onPress={ () => context.decisao.setState("instavel") }>
                                    <Image
                                    style={styles.ToggleButtonIcon}
                                    source={require('../../../../assets/ConfusedConfused.png')}
                                    />
                                    <Text style={[styles.ToggleButtonText, {color: "#D97600"}]}>Instável</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.ToggleButton, {backgroundColor: "#F9EDCB", borderColor: "#F1D585", borderWidth: context.decisao.state == "potencialmenteinstavel" ? 3 : 0}]} onPress={ () => context.decisao.setState("potencialmenteinstavel") }>
                                    <Image
                                    style={styles.ToggleButtonIcon}
                                    source={require('../../../../assets/NeutralNeutral.png')}
                                    />
                                    <Text style={[styles.ToggleButtonText, {color: "#C59203"}]}>Potencialmente Instável</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.ToggleButton, {backgroundColor: "#F9D0C9", borderColor: "#F3A294", borderWidth: context.decisao.state == "critico" ? 3 : 0}]} onPress={ () => context.decisao.setState("critico") }>
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
                                    optionValue: "Deitada"
                                },
                                {
                                    optionName: "Semi-sentada",
                                    optionValue: "Semisentada"
                                },
                                {
                                    optionName: "Sentada",
                                    optionValue: "Sentada"
                                },
                            ]}
                            selectedOptionName={context.transporteName.state}
                            setSelectedOptionName={context.transporteName.setState}
                            selectedOptionValue={context.transporteValue.state}
                            setSelectedOptionValue={context.transporteValue.setState}
                        />
                    </View>
                    <Text style={styles.Text}>Equipe de Atendimento</Text>
                    <TextInput
                        placeholder = 'Motorista'
                        keyboardType = 'default'
                        style={styles.TextInput}
                        onChangeText={context.motorista.setState}
                        value={context.motorista.state}
                    />
                    <TextInput
                        placeholder = 'Socorrista #1'
                        keyboardType = 'default'
                        style={styles.TextInput}
                        onChangeText={context.socorristaA.setState}
                        value={context.socorristaA.state}
                        />
                    <TextInput
                        placeholder = 'Socorrista #2'
                        keyboardType = 'default'
                        style={styles.TextInput}
                        onChangeText={context.socorristaB.setState}
                        value={context.socorristaB.state}
                    />
                    <TextInput
                        placeholder = 'Socorrista #3'
                        keyboardType = 'default'
                        style={styles.TextInput}
                        onChangeText={context.socorristaC.setState}
                        value={context.socorristaC.state}
                    />
                    <TextInput
                        placeholder = 'Demandante'
                        keyboardType = 'default'
                        style={styles.TextInput}
                        onChangeText={context.demandante.setState}
                        value={context.demandante.state}
                    />
                
                
                
                    <ReturnButton/>
                    
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    )
}
