import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import ReturnButton from '../../../components/ReturnButton';


export default function MainInfoAmb(){

    const navigation = useNavigation();

    const [numUsb, setNumUsb] = useState(null);
    const [numOc, setNumOc] = useState(null);
    const [despachante, setDespachante] = useState(null);
    const [kmFinal, setKmFinal] = useState(null);
    const [codSia, setCodSia] = useState(null);
    const [codIr, setCodIr] = useState(null);
    const [codPs, setCodPs] = useState(null);

    return(
        <View style={styles.Container}>
            <Header/>
            <TextInput placeholder = 'Número USB' keyboardType = 'number-pad' style={styles.TextInput} value={numUsb} onChangeText={setNumUsb}/>

            <TextInput placeholder = 'Número da Ocorrência' keyboardType = 'number-pad' style={styles.TextInput} value={numOc} onChangeText={setNumOc}/>

            <TextInput placeholder = 'Despachante' keyboardType = 'default' style={styles.TextInput} value={despachante} onChangeText={setDespachante}/>

            <TextInput placeholder = 'KM Final' keyboardType = 'number-pad' style={styles.TextInput} value={kmFinal} onChangeText={setKmFinal}/>

            <TextInput placeholder = 'COD SIA/SUS' keyboardType = 'number-pad' style={styles.TextInput} value={codSia} onChangeText={setCodSia}/>

            <ReturnButton/>

        </View>
    )
}
