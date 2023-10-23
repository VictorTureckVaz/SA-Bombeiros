import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import api from './../../../lib/axios';

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
    const [vitimaEra, setVitimaEra] = useState("Vitima Era");
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
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlhdCI6MTY5ODAyMjgzNCwiZXhwIjoxNjk4MDgyODM0fQ.cLIdxNG7O3OZJ2mepOJ7IaPW2Tsja18U2V6VdG2qrAg"
                }
            });

            if (apiReply.data.error) throw apiReply.data.error;

            navigation.navigate('home');
            Console.log("deu certo top!");
        } catch (error) {
            console.error(error);
        }
    }

    function UsingMenu(value) {
        setVitimaEra(value); // seta o valor da perfusão com o valor dado ao chamar a função
        setUsingMenu((usingMenu+1)%2) // aumenta o using menu para considerar como desativado
        
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
                    
                    <View style={[styles.UsingMenu, {height: usingMenu ? 430 : 56}]}>
                        <TouchableOpacity style={styles.UsingMenuTitle} onPress={ () => setUsingMenu((usingMenu+1)%2)}>
                            <Text style={styles.Text}>{vitimaEra}</Text>
                            <View style={styles.UsingMenuIconContainer}>
                                <Image
                                style={[styles.UsingMenuIcon, {transform: usingMenu ? [{ rotate: "180deg" }] : [{ rotate: "0deg" }]}]}
                                source={require('../../../../assets/downArrow.png')}
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Ciclista")}>
                            <Text style={styles.Text}>Ciclista</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Condutor de Moto")}>
                            <Text style={[styles.Text]}>Condutor de Moto</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"} ]} onPress={ () => UsingMenu("Condutor de Carro")}>
                            <Text style={[styles.Text]}>Condutor de Carro</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Clínico")}>
                            <Text style={[styles.Text]}>Clínico</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Gestante")}>
                            <Text style={[styles.Text]}>Gestante</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Pass. Banco da Frente")}>
                            <Text style={[styles.Text]}>Pass. Banco da Frente</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Pass. Banco de Trás")}>
                            <Text style={[styles.Text]}>Pass. Banco de Trás</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Pass. Moto")}>
                            <Text style={[styles.Text]}>Pass. Moto</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Pedestre")}>
                            <Text style={[styles.Text]}>Pedestre</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Trauma")}>
                            <Text style={[styles.Text]}>Trauma</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.ButtonContainer} onPress={submit}>
                        <Text style={styles.ButtonText}>ENVIAR</Text>
                </TouchableOpacity>
                


                <View style={styles.ButtonContainer}>
                    <TouchableOpacity 
                    style={styles.Button} 
                    onPress={ () => navigation.navigate('ocorrencia') }
                    >
                        <Image
                        style={styles.Icon}
                        source={require('../../../../assets/previous.png')}
                        />
                        <Text style={styles.ButtonText}>VOLTAR AOS INDICADORES DE ETAPA</Text>
                    </TouchableOpacity>
                </View>
                <Footer/>
            </ScrollView>
            

        </View>
    )
}
