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
        <View style={styles.Body}>
            <Header/>
            <View style={styles.Container}>

                <TextInput placeholder = 'Número USB' keyboardType = 'number-pad' style={styles.TextInput} value={context.numUsb.state} onChangeText={context.numUsb.setState}/>

                <TextInput placeholder = 'Número da Ocorrência' keyboardType = 'number-pad' style={styles.TextInput} value={context.numOc.state} onChangeText={context.numOc.setState}/>

                <TextInput placeholder = 'Despachante' keyboardType = 'default' style={styles.TextInput} value={context.despachante.state} onChangeText={context.despachante.setState}/>

                <TextInput placeholder = 'KM Final' keyboardType = 'number-pad' style={styles.TextInput} value={context.kmFinal.state} onChangeText={context.kmFinal.setState}/>

                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.codIr.setState(!context.codIr.state) }>
                    <View style={[styles.CheckBox, {backgroundColor: context.codIr.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14}}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Cód IR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.codPs.setState(!context.codPs.state) }>
                    <View style={[styles.CheckBox, {backgroundColor: context.codPs.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14}}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Cód PS</Text>
                </TouchableOpacity>

                <TextInput placeholder = 'COD SIA/SUS' keyboardType = 'number-pad' style={styles.TextInput} value={context.codSia.state} onChangeText={context.codSia.setState}/>

                
            </View>

            <ReturnButton/>

            <Footer/>

        </View>
    )
}
