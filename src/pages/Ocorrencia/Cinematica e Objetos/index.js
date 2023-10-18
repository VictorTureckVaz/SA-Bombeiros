import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { RadioGroup  } from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';

export default function MainCinematicaObjetos(){

    const navigation = useNavigation();
    const [OR, setOR] = useState(null);
    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'Distúrbio de Comportamento',
            value: 'Distúrbio de Comportamento',
        },
        {
            id: '2',
            label: 'Encontrado de Capacete ',
            value: 'Encontrado de Capacete ',
        },
        {
            id: '3',
            label: 'Encontrado de Cinto',
            value: 'Encontrado de Cinto',
        },
        {
            id: '4',
            label: 'Para-Brisas Avariado',
            value: 'Para-Brisas Avariado',
        },
        {
            id: '5',
            label: 'Caminhando na Cena',
            value: 'Caminhando na Cena',
        },
        {
            id: '6',
            label: 'Painel Avariado',
            value: 'Painel Avariado',
        },
        {
            id: '7',
            label: 'Volante Torcido',
            value: 'Volante Torcido',
        },

    ]), []);

    const [selectedId, setSelectedId] = useState();

    return(
        <View style={styles.Container}>
            <ScrollView>
            <Header/>
        
            <View>
                <TextInput placeholder = 'Objetos Recolhidos' keyboardType = 'default'  style={styles.TextInput} value={OR} onChangeText={setOR}/>
            </View>
            
            <View style={styles.Buttons}>
                   <RadioGroup
                        radioButtons={radioButtons} 
                        onPress={setSelectedId}
                        selectedId={selectedId}
                   />
            </View>
    
            <Footer/>
            </ScrollView>
        </View>
    );
};