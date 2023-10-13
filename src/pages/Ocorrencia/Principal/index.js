import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function MainOcorrencia(){

    const navigation = useNavigation()

    return(
        <View style={styles.Container}>
            <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('infoPac')}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Info. do Paciente</Text>
            </TouchableOpacity>

        </View>
    )
}
