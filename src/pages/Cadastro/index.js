import React, { useState, useEffect, createContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import api from './../../lib/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainCadastro() {
    
    const navigation = useNavigation();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [sobrenome, setSobrenome] = useState(null);
    const [show, setShow] = useState(true);
    const [showB, setShowB] = useState(true);
    const [eye, setEye] = useState(require('../../../assets/show.png'));
    const [eyeB, setEyeB] = useState(require('../../../assets/show.png'));
    const [cadastroError, setCadastroError] = useState(false);
    
    useEffect(() => {
        if(show == true) {
            setEye(require('../../../assets/invisible.png'));
        } else {
            setEye(require('../../../assets/show.png'));
        }
    })

    useEffect(() => {
        if(showB == true) {
            setEyeB(require('../../../assets/invisible.png'));
        } else {
            setEyeB(require('../../../assets/show.png'));
        }
    })

    async function cadastrar() {
        if(password===confirmPassword){
            console.log("boa mlk");
            try {
                console.log("a principio enviou :)");
                navigation.navigate('home');
                const apiReply = await api.post("/cadastro", { nome: nome, sobrenome: sobrenome, pass: password, email: email, cpf: cpf });
            } catch (error) {
                setCadastroError(current => !current);
                console.log("puta fudeu: \n");
                console.error(error);
            }
        }else{//pop-up dizendo q nao deu certo
            setCadastroError(true);
            console.log("deu erro mlk fudeu");
        }
    }

    return(

        <View style={styles.Container}>
            <View>
                <Text style={styles.BigTextTitle}>OLÁ, SEJA</Text>
                <Text style={styles.BigTextTitle}>BEM-VINDO!</Text>
                <Text style={styles.SmallTextTitle}>Faça o cadastro para continuar</Text>
            </View>

            <View>
                <TextInput placeholder = 'Nome' keyboardType = 'text' style={styles.TextInput} value={nome} onChangeText={setNome}/>
            </View>
            <View>
                <TextInput placeholder = 'Sobrenome' keyboardType = 'text' style={styles.TextInput} value={sobrenome} onChangeText={setSobrenome}/>
            </View>
            <View>
                <TextInput placeholder = 'CPF' keyboardType = 'numeric' style={styles.TextInput} value={cpf} onChangeText={setCpf}/>
            </View>
            <View>
                <TextInput placeholder = 'Email' keyboardType = 'email-address' style={styles.TextInput} value={email} onChangeText={setEmail}/>
            </View>
        
            <View
                style={{
                    gap: 12, flexDirection: "row", height: 56,
                    borderColor: "#555555",
                    width: "100%",
                    borderWidth: 2,
                    borderRadius: 10,
                    alignItems: 'center',
                }}
            >
                <TextInput secureTextEntry={show} placeholder = 'Senha' keyboardType='default' style={[styles.TextInput, {borderWidth: 0, width: "80%"}]} value={password} onChangeText={setPassword}/>
                <TouchableOpacity style={{width: 30, height: 30, alignItems: "flex-end"}} onPress={() => setShow(!show)}>
                    <Image
                        style={{width: 30, height: 30}}
                        source={eye}
                    />
                </TouchableOpacity>
            </View>

            <View style={{gap: 12, flexDirection: "row", height: 56,
                borderColor: "#555555",
                width: "100%",
                borderWidth: 2,
                borderRadius: 10,
                alignItems: 'center',
                }}
            >
                <TextInput secureTextEntry={showB} placeholder = 'Confirmar Senha' keyboardType='default' style={[styles.TextInput, {borderWidth: 0, width: "80%"}]} value={confirmPassword} onChangeText={setConfirmPassword}/>
                <TouchableOpacity style={{width: 30, height: 30, alignItems: "flex-end"}} onPress={() => setShowB(!showB)}>
                    <Image
                        style={{width: 30, height: 30}}
                        source={eyeB}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
            style={styles.ButtonContainer}
            onPress={ cadastrar }
            >
                <Text style={styles.ButtonText}>CADASTRAR</Text>
            </TouchableOpacity>

            <View style={[styles.ErrorContainer, {display: cadastroError==true ? 'flex' : 'none'}]}>
                <Text style={styles.ErrorText}>Senha incorreta</Text>
            </View>

        </View>
    )
}