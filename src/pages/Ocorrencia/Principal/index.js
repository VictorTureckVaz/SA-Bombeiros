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
            <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('infoAmb')}>
                <Text style={styles.OcStepText}>Info. da Ambulância</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('tipoOc')}>
                <Text style={styles.OcStepText}>Tipo de Ocorrência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep} onPress={ () => navigation.navigate('infoTrans')}>
                <Text style={styles.OcStepText}>Info. de Condução e Transporte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Avaliação do Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Sinais Vitais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Sinais e Sintomas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Problemas Encontrados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Localização dos Traumas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Procedimentos Efetuados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Anamnese</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Anamnese Gestacional</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Cinemática e Objetos recolhidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Materiais Utilizados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OcStep}>
                <Text style={styles.OcStepText}>Observações Importantes</Text>
            </TouchableOpacity>

        </View>
    )
}
