import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import api from './../../../lib/axios';
import ReturnButton from '../../../components/ReturnButton';
import SelectList from '../../../components/SelectList';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function MainInfoPac(){
    
    const navigation = useNavigation();

    const context = useContext(OcorrenciaContext)

    const [data, setData] = useState(null)

    async function submit() {
        try {
            const apiReply = await api.post("/submit", {
                nomePac, 
                nomeHosp, 
                docPac, 
                idadePac, 
                telefonePac,
                local, 
                acompanhante, 
                idadeAcom,
                vitimaEra
            }, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlhdCI6MTY5ODA2Njc1OCwiZXhwIjoxNjk4MTI2NzU4fQ.j5YPmYC05ygB9TGmSOWjhfxtASm-UvnoMjxI0jaI8wo"
                }
            });

            if (apiReply.data.error) throw apiReply.data.error;

            navigation.navigate('home');
            Console.log("deu certo top!");
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
                {/* <DateTimePicker mode="time" value={data}/> */}
                <View style={styles.Container}>
                    <TextInput placeholder = 'Nome do Paciente...' keyboardType = 'default' style={styles.TextInput} value={context.nomePac.state} onChangeText={context.nomePac.setState}/>
                    
                    <TextInput placeholder = 'Nome do Hospital...' keyboardType = 'default' style={styles.TextInput} value={context.nomeHosp.state} onChangeText={context.nomeHosp.setState}/>
                
                    <TextInput placeholder = 'RG/CPF do Paciente...' keyboardType = 'number-pad' style={styles.TextInput} value={context.docPac.state} onChangeText={context.docPac.setState}/>
                    
                    <TextInput placeholder = 'Idade do Paciente...' keyboardType = 'number-pad' style={styles.TextInput} value={context.idadePac.state} onChangeText={context.idadePac.setState}/>
                    
                    <TextInput placeholder = 'Telefone do Paciente...' keyboardType = 'number-pad' style={styles.TextInput} value={context.telefonePac.state} onChangeText={context.telefonePac.setState}/>
                    
                    <TextInput placeholder = 'Local de Ocorrência...' keyboardType = 'default' style={styles.TextInput} value={context.local.state} onChangeText={context.local.setState}/>
                    
                    <TextInput placeholder = 'Acompanhante...' keyboardType = 'default' style={styles.TextInput} value={context.acompanhante.state} onChangeText={context.acompanhante.setState}/>
                    
                    <TextInput placeholder = 'Idade do Acompanhante...' keyboardType = 'number-pad' style={styles.TextInput} value={context.idadeAcom.state} onChangeText={context.idadeAcom.setState}/>
                    
                        <SelectList
                            options={[
                                {
                                    optionName: "Ciclista",
                                    optionValue: "ciclista"
                                },
                                {
                                    optionName: "Condutor de Moto",
                                    optionValue: "condutorMoto"
                                },
                                {
                                    optionName: "Condutor de Carro",
                                    optionValue: "condutorCarro"
                                },
                                {
                                    optionName: "Clínico",
                                    optionValue: "clinico"
                                },
                                {
                                    optionName: "Gestante",
                                    optionValue: "gestante"
                                },
                                {
                                    optionName: "Pass. Banco da Frente",
                                    optionValue: "passBancoFrente"
                                },
                                {
                                    optionName: "Pass. Banco de Trás",
                                    optionValue: "passBancoTras"
                                },
                                {
                                    optionName: "Pass. Moto",
                                    optionValue: "passMoto"
                                },
                                {
                                    optionName: "Pedestre",
                                    optionValue: "pedestre"
                                },
                                {
                                    optionName: "Trauma",
                                    optionValue: "trauma"
                                },
                            ]}
                            selectedOptionName={context.vitimaEraName.state}
                            setSelectedOptionName={context.vitimaEraName.setState}
                            selectedOptionValue={context.vitimaEraValue.state}
                            setSelectedOptionValue={context.vitimaEraValue.setState}
                        />
                </View>

                <ReturnButton/>
                
                <Footer/>
            </ScrollView>
            

        </View>
    )
}
