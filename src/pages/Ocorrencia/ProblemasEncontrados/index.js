import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';

export default function MainProblemasEncontrados(){
    
    const navigation = useNavigation();
     var psico = 0
//     const [psico, setPsico] = useState(null);
    const [docPac, setDocPac] = useState(null);
    const [idadePac, setIdadePac] = useState(null);
    const [telefonePac, setTelefonePac] = useState(null);
    const [local, setLocal] = useState(null);
    const [acompanhante, setAcompanhante] = useState(null);
    const [idadeAcom, setIdadeAcom] = useState(null);
    const [vitimaEra, setVitimaEra] = useState(null);
    const [messageText, setMessageText] = useState(null);

    function choose(value){
     value = 5
     return console.log(psico);
     
    }

    return(
        <View style={styles.Body}>
            <Header/>
            <View style={styles.Container}>
                <TouchableOpacity style={styles.Checkbox} value={psico} onPress={ (psico) => choose(psico) }>
                    <Text style={styles.Text}>Psiquiátrico</Text>
                </TouchableOpacity>
                <View>
                <TouchableOpacity style={styles.UsingMenu}>
                    <Text style={styles.Text}>Obstétrico</Text>
                    <View style={styles.UsingMenuIconContainer}>
                         <Image
                         style={styles.UsingMenuIcon}
                         source={require('../../../../assets/downArrow.png')}
                         />
                    </View>
                </TouchableOpacity>
            </View>
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
            <Footer/>

        </View>
    )
}
