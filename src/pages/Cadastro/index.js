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
    const [error, setError] = useState(null);
    const [nomeError, setNomeError] = useState(false);
    const [sobrenomeError, setSobrenomeError] = useState(false);
    const [cpfError, setCpfError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    
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
        if(nome == null || nome == ""){
            //tem que mostrar que o nome tem valor null e nao pode
            console.log("nome ta null");
            setError("Sem Nome");
            
        }else if(sobrenome == null || sobrenome == ""){
            //tem que mostrar que o sobrenome tem valor null e nao pode
            console.log("sobrenome ta null");
            setError("Sem Sobrenome");

        }else if(typeof cpf !== 'string' || isNaN(cpf) || cpf.length !== 11){
            // tem que mostrar que o cpf tem alguma coisa errada(ou tem caractere, ou é diferente de 11 caracteres)
            console.log("cpf tem caractere diferente de numero, ou nao tem 11 numeros");
            setError("CPF deve ter 11 digitos, somente numeros");
            

        }else if(email == null || email.includes('@') == false || email == ""){
            //o valor é null ou nao tem @, e nao pode isso
            console.log("email ta null ou nao tem @");
            console.log(email);
            setError("Sem @");

        }else if(password == null || password.length < 5){
            //o valor da senha é menor que 5, e nao pode isso
            console.log("senha é menor que 5 caracteres");
            setError("Senha é menor que 5 caracteres");
            
        }else if(password===confirmPassword){
            console.log("boa mlk");
            try {
                console.log("a principio enviou :)");
                navigation.navigate('login');
                const apiReply = await api.post("/cadastro", { nome: nome, sobrenome: sobrenome, pass: password, email: email, cpf: cpf });
            } catch (error) {
                setCadastroError(current => !current);
                console.log("puta fudeu: \n");
                console.error(error);
            }
        }else{//pop-up dizendo q nao deu certo
            setError("Senhas Não Batem");
            console.log("as senhas nao batem");
        }
    }
    

    return(

        <View style={styles.Container}>
            <View>
                <Text style={styles.BigTextTitle}>OLÁ, SEJA</Text>
                <Text style={styles.BigTextTitle}>BEM-VINDO!</Text>
                <Text style={styles.SmallTextTitle}>Realize o cadastro de um novo bombeiro abaixo:</Text>
            </View>

            <View>
                <TextInput placeholder = 'Nome' keyboardType = 'text' style={styles.TextInput} value={nome} onChangeText={setNome}/>
                <View style={{backgroundColor: "#E74428", borderRadius: "5px", display: nomeError == true ? "flex" : "none"}}>
                    <Text>É necessário colocar nome</Text>
                </View>
            </View>
            <View>
                <TextInput placeholder = 'Sobrenome' keyboardType = 'text' style={styles.TextInput} value={sobrenome} onChangeText={setSobrenome}/>
                <View style={{backgroundColor: "#E74428", borderRadius: "5px", display: sobrenomeError == true ? "flex" : "none"}}>
                    <Text>É necessário colocar sobrenome</Text>
                </View>
            </View>
            <View>
                <TextInput placeholder = 'CPF' keyboardType = 'numeric' style={styles.TextInput} value={cpf} onChangeText={setCpf}/>
                <View style={{backgroundColor: "#E74428", borderRadius: "5px", display: cpfError == true ? "flex" : "none"}}>
                    <Text>Deve possuir só digitos, com 11 caracteres</Text>
                </View>        
            </View>
            <View>
                <TextInput placeholder = 'Email' keyboardType = 'email-address' style={styles.TextInput} value={email} onChangeText={setEmail}/>
                <View style={{backgroundColor: "#E74428", borderRadius: "5px",display: emailError == true ? "flex" : "none"}}>
                    <Text>Deve possuir um @</Text>
                </View>
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
            
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
                    <Text style={{fontSize: 16, color: '#313131',}}>Já Possui Cadastro? Clique aqui!</Text>
            </TouchableOpacity>

            <View style={[styles.ErrorContainer, {display: error !== null ? 'flex' : 'none'}]}>
                <Text style={styles.ErrorText}>{error}</Text>
            </View>

        </View>
    )
}