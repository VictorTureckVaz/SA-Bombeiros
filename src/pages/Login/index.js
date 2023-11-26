import React, { useState, useEffect, createContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import api from './../../lib/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainLogin() {
    const navigation = useNavigation();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginError, setLoginError] = useState(false);
    const [show, setShow] = useState(true);
    const [eye, setEye] = useState(require('../../../assets/show.png'));

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
    useEffect(() => {
        if(show == true) {
            setEye(require('../../../assets/invisible.png'));
        } else {
            setEye(require('../../../assets/show.png'));
        }
    })
    


    
    return(

        <View style={styles.Container}>
            <View>
                <Text style={styles.BigTextTitle}>OLÁ, SEJA</Text>
                <Text style={styles.BigTextTitle}>BEM-VINDO!</Text>
                <Text style={styles.SmallTextTitle}>Faça o login para continuar</Text>
            </View>

            <View>
                <TextInput placeholder = 'Email' keyboardType = 'email-address' style={styles.TextInput} value={email} onChangeText={setEmail}/>
            </View>
            
            <View style={{
                    gap: 12, flexDirection: "row", height: 56,
                    borderColor: "#555555",
                    width: "100%",
                    borderWidth: 2,
                    borderRadius: 10,
                    alignItems: 'center',
                }}>
                <TextInput secureTextEntry={show} placeholder = 'Senha' keyboardType='default' style={[styles.TextInput, {borderWidth: 0, width: "80%"}]} value={password} onChangeText={setPassword}/>
                <TouchableOpacity style={{width: 30, height: 30, alignItems: "flex-end"}} onPress={() => setShow(!show)}>
                    <Image
                        style={{width: 30, height: 30}}
                        source={eye}
                    />
                </TouchableOpacity>

            </View>
                <TouchableOpacity onPress={() => navigation.navigate("cadastro")}>
                    <Text>Não possui cadastro</Text>
                </TouchableOpacity>
            
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
