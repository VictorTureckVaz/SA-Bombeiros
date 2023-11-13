import React, { useState, useEffect, createContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import api from './../../lib/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainLogin() {
    const navigation = useNavigation();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginError, setLoginError] = useState(false);

    async function login() {
        try {
            const apiReply = await api.post("/login", { user: email, pass: password });
            
            if (apiReply.data.error) throw apiReply.data.error;
            
            const token = apiReply.data.token;
            
            await AsyncStorage.setItem('token', token);
            console.log(await AsyncStorage.getItem('token'));

            // const apiReply = await api.post("/submit", { dados }, { headers: { authorization: `Bearer ${token}` } });
            // Salvar o token no useContext OU no React Redux

            navigation.navigate('home');
        } catch (error) {
            setLoginError(current => !current)
            console.error(error);
        }
    }
    
    return(

        <View style={styles.Container}>
            <View>
                <Text style={styles.BigTextTitle}>OLÁ, SEJA</Text>
                <Text style={styles.BigTextTitle}>BEM-VINDO!</Text>
                <Text style={styles.SmallTextTitle}>Faça o login para continuar</Text>
            </View>

            <View>
                <TextInput placeholder = 'Email/CPF' keyboardType = 'email-address' style={styles.TextInput} value={email} onChangeText={setEmail}/>
            </View>
            
            <View style={styles.SecondSection}>
                <TextInput secureTextEntry={true} placeholder = 'Senha' keyboardType='default' style={styles.TextInput} value={password} onChangeText={setPassword}/>
                
            </View>
            
            <TouchableOpacity 
            style={styles.ButtonContainer}
            onPress={ login }
            >
                <Text style={styles.ButtonText}>ENTRAR</Text>
            </TouchableOpacity>

            <View style={[styles.ErrorContainer, {display: loginError ? 'flex' : 'none'}]}>
                <Text style={styles.ErrorText}>Email ou Senha incorretos</Text>
            </View>
            
        </View>
    )
}
