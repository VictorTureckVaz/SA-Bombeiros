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
    const [vitimaEra, setVitimaEra] = useState(null);
    const [messageText, setMessageText] = useState(null);

    function message(){
        // return setMessageText(nomePac, nomeHosp, docPac, idadePac, telefonePac, local, acompanhante, idadeAcom);
        return console.log(nomePac);
    }

    return(
        <View style={styles.Container}>
            <Header/>
            <View>
                <TextInput placeholder = 'Nome do Paciente' keyboardType = 'default' style={styles.TextInput} value={nomePac} onChangeText={setNomePac}/>
            </View>
            <View>
                <TextInput placeholder = 'Nome do Hospital' keyboardType = 'default' style={styles.TextInput} value={nomeHosp} onChangeText={setNomeHosp}/>
            </View>
            <View>
                <TextInput placeholder = 'RG/CPF do Paciente' keyboardType = 'number-pad' style={styles.TextInput} value={docPac} onChangeText={setDocPac}/>
            </View>
            <View>
                <TextInput placeholder = 'Idade do Paciente' keyboardType = 'number-pad' style={styles.TextInput} value={idadePac} onChangeText={setIdadePac}/>
            </View>
            <View>
                <TextInput placeholder = 'Telefone do Paciente' keyboardType = 'number-pad' style={styles.TextInput} value={telefonePac} onChangeText={setTelefonePac}/>
            </View>
            <View>
                <TextInput placeholder = 'Local de Ocorrência' keyboardType = 'default' style={styles.TextInput} value={local} onChangeText={setLocal}/>
            </View>
            <View>
                <TextInput placeholder = 'Acompanhante' keyboardType = 'default' style={styles.TextInput} value={acompanhante} onChangeText={setAcompanhante}/>
            </View>
            <View>
                <TextInput placeholder = 'Idade do Acompanhante' keyboardType = 'number-pad' style={styles.TextInput} value={idadeAcom} onChangeText={setIdadeAcom}/>
            </View>
            <View>
                <TouchableOpacity style={styles.UsingMenu}>
                    <Text style={styles.Text}>Vítima Era</Text>
                </TouchableOpacity>
            </View>
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
            

        </View>
    )
}
