import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';

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
    const [VitimaEra, setVitimaEra] = useState(null);

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
                 VitimaEra
                });
            if (apiReply.data === "Enviado com sucesso"){
                navigation.navigate('home');
            } else {
                navigation.navigate('home');
            };
            
        } catch (error) {
            console.error(error);
        }
    }
    

    return(
        <View style={styles.Container}>
            <Header/>
                <TextInput placeholder = 'Nome do Paciente' keyboardType = 'default' style={styles.TextInput} value={NomePac} onChangeText={setNomePac}/>
            
                <TextInput placeholder = 'Nome do Hospital' keyboardType = 'default' style={styles.TextInput} value={nomeHosp} onChangeText={setNomeHosp}/>
            
                <TextInput placeholder = 'RG/CPF do Paciente' keyboardType = 'number-pad' style={styles.TextInput} value={docPac} onChangeText={setDocPac}/>
                
                <TextInput placeholder = 'Idade do Paciente' keyboardType = 'number-pad' style={styles.TextInput} value={idadePac} onChangeText={setIdadePac}/>
                
                <TextInput placeholder = 'Telefone do Paciente' keyboardType = 'number-pad' style={styles.TextInput} value={telefonePac} onChangeText={setTelefonePac}/>
                
                <TextInput placeholder = 'Local de Ocorrência' keyboardType = 'default' style={styles.TextInput} value={local} onChangeText={setLocal}/>
                
                <TextInput placeholder = 'Acompanhante' keyboardType = 'default' style={styles.TextInput} value={acompanhante} onChangeText={setAcompanhante}/>
                
                <TextInput placeholder = 'Idade do Acompanhante' keyboardType = 'number-pad' style={styles.TextInput} value={idadeAcom} onChangeText={setIdadeAcom}/>
                
                <TouchableOpacity style={styles.UsingMenu}>
                    <Text style={styles.Text} value={VitimaEra} onChangeText={setVitimaEra}>Vítima Era</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.ButtonContainer}
                    onPress={ submit }
                >
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

        </View>
    )
}
