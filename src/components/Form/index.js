import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';
import Button from '../Button';

export default function FormLogin(){
    return(
        <View style={styles.Container}>
            <View>
                <TextInput placeholder = 'Email' keyboardType = 'email-address' style={styles.TextInput}/>
            </View>
            
            <View style={styles.SecondSection}>
                <TextInput placeholder = 'Senha' keyboardType='default' style={styles.TextInput}/>
                <View style={styles.SmallText}>
                    <Text >ESQUECEU A SENHA?</Text>
                </View>
            </View>
            
            <Button/>
        </View>
    )
}
