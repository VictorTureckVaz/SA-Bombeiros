import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function MainLogin(){
    const navigation = useNavigation();

    return(
        <View style={styles.Container}>
            <View>
                <Text style={styles.BigTextTitle}>OLÁ, SEJA</Text>
                <Text style={styles.BigTextTitle}>BEM-VINDO!</Text>
                <Text style={styles.SmallTextTitle}>Faça o login para continuar</Text>
            </View>

            <View>
                <TextInput placeholder = 'Email' keyboardType = 'email-address' style={styles.TextInput}/>
            </View>
            
            <View style={styles.SecondSection}>
                <TextInput secureTextEntry={true} placeholder = 'Senha' keyboardType='default' style={styles.TextInput}/>
                <View style={styles.SmallText}>
                    <Text >ESQUECEU A SENHA?</Text>
                </View>
            </View>
            
            <TouchableOpacity 
            style={styles.ButtonContainer}
            onPress={ () => navigation.navigate('home')}
            >
                <Text style={styles.ButtonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
