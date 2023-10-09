import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';


export default function MainInfoPac(){
    
    return(
        <View style={styles.Container}>
            <View>
                <TextInput placeholder = 'Nome do Paciente' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Nome do Hospital' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'RG/CPF do Paciente' keyboardType = 'number-pad' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Idade do Paciente' keyboardType = 'number-pad' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Telefone do Paciente' keyboardType = 'number-pad' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Local de Ocorrência' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Acompanhante' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Idade do Acompanhante' keyboardType = 'number-pad' style={styles.TextInput}/>
            </View>
            <View>
                <TouchableOpacity style={styles.UsingMenu}>
                    <Text style={styles.Text}>Vítima Era</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button}>
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
