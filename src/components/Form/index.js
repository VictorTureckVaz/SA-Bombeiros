import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style'

export default function Form(){
    return(
        <View>
            <View>
                <TextInput placeholder = 'Email' keyboardType = 'email-address' style={styles.TextInput}/>
                <TextInput placeholder = 'Senha' keyboardType='default' style={styles.TextInput}/>
                <Button title = 'Entrar'/>
            </View>
        </View>
    )

}
