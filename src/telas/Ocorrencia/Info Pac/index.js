import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';
import SelectDropdown from 'react-native-select-dropdown';


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
                // vitima era
            </View>
            

        </View>
    )
}
