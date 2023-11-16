import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";


export default function MainInfoAmb(){

    const navigation = useNavigation();
    const context = useContext(OcorrenciaContext);

    

    return(
        <View style={styles.Container}>
            <Header/>
            <TextInput placeholder = 'Número USB' keyboardType = 'number-pad' style={styles.TextInput} value={context.numUsb.state} onChangeText={context.numUsb.setState}/>

            <TextInput placeholder = 'Número da Ocorrência' keyboardType = 'number-pad' style={styles.TextInput} value={context.numOc.state} onChangeText={context.numOc.setState}/>

            <TextInput placeholder = 'Despachante' keyboardType = 'default' style={styles.TextInput} value={context.despachante.state} onChangeText={context.despachante.setState}/>

            <TextInput placeholder = 'KM Final' keyboardType = 'number-pad' style={styles.TextInput} value={context.kmFinal.state} onChangeText={context.kmFinal.setState}/>

            <TextInput placeholder = 'COD SIA/SUS' keyboardType = 'number-pad' style={styles.TextInput} value={context.codSia.state} onChangeText={context.codSia.setState}/>

            <ReturnButton/>

        </View>
    )
}
