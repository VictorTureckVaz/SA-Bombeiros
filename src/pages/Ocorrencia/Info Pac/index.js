import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import api from './../../../lib/axios';
import ReturnButton from '../../../components/ReturnButton';
import SelectList from '../../../components/SelectList';

export default function MainInfoPac(){
    
    const navigation = useNavigation();

    const [nomePac, setNomePac] = useState(null);
    const [nomeHosp, setNomeHosp] = useState(null);
    const [docPac, setDocPac] = useState(null);
    const [idadePac, setIdadePac] = useState(null);
    const [telefonePac, setTelefonePac] = useState(null);
    const [local, setLocal] = useState(null);
    const [acompanhante, setAcompanhante] = useState(null);
    const [idadeAcom, setIdadeAcom] = useState(null);
    const [vitimaEraName, setVitimaEraName] = useState("Vitima Era");
    const [vitimaEraValue, setVitimaEraValue] = useState(null);
    const [usingMenu, setUsingMenu] = useState(0);

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
                <View style={styles.Container}>
                    <TextInput placeholder = 'Nome do Paciente...' keyboardType = 'default' style={styles.TextInput} value={nomePac} onChangeText={setNomePac}/>
                    
                    <TextInput placeholder = 'Nome do Hospital...' keyboardType = 'default' style={styles.TextInput} value={nomeHosp} onChangeText={setNomeHosp}/>
                
                    <TextInput placeholder = 'RG/CPF do Paciente...' keyboardType = 'number-pad' style={styles.TextInput} value={docPac} onChangeText={setDocPac}/>
                    
                    <TextInput placeholder = 'Idade do Paciente...' keyboardType = 'number-pad' style={styles.TextInput} value={idadePac} onChangeText={setIdadePac}/>
                    
                    <TextInput placeholder = 'Telefone do Paciente...' keyboardType = 'number-pad' style={styles.TextInput} value={telefonePac} onChangeText={setTelefonePac}/>
                    
                    <TextInput placeholder = 'Local de Ocorrência...' keyboardType = 'default' style={styles.TextInput} value={local} onChangeText={setLocal}/>
                    
                    <TextInput placeholder = 'Acompanhante...' keyboardType = 'default' style={styles.TextInput} value={acompanhante} onChangeText={setAcompanhante}/>
                    
                    <TextInput placeholder = 'Idade do Acompanhante...' keyboardType = 'number-pad' style={styles.TextInput} value={idadeAcom} onChangeText={setIdadeAcom}/>
                    
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
                            selectedOptionName={vitimaEraName}
                            setSelectedOptionName={setVitimaEraName}
                            selectedOptionValue={vitimaEraValue}
                            setSelectedOptionValue={setVitimaEraValue}
                        />
                </View>

                <ReturnButton/>
                
                <Footer/>
            </ScrollView>
            

        </View>
    )
}
