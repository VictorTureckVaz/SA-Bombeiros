import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'native-base';
import api from './../../lib/axios';
import Header from './../Header';
import Footer from './../Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OcorrenciaContext } from "../../context/ocorrenciaContext";


export default function MainProfile(){
    const navigation = useNavigation();
    const context = useContext(OcorrenciaContext);

    const [CadastroError, setCadastroError] = useState(false);

    async function logout(){
        await AsyncStorage.removeItem('token')
        navigation.navigate('login')
    }

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
                <View style={styles.Container}>
            
                    <View style={styles.ProfileContainer}>
                        <Image
                        style={{width: 200, height: 200}}
                        source={require('../../../assets/bombeirosLogo.png')}
                        />
                    </View>

                    <View style={styles.InfoContainer}>
                       <View style={styles.TextContainer}>
                            <Text style={styles.Text}>{context.BombeiroNome.state} {context.BombeiroSobrenome.state}</Text>
                       </View>
                       <View style={styles.TextContainer}>
                            <Text style={styles.Text}>{context.BombeiroEmail.state}</Text>
                       </View>
                        <View style={styles.LogoutContainer}>
                            <TouchableOpacity style={styles.Logout} onPress={logout}>
                                <Text style={{fontSize: 20, fontWeight: "bold", color: "#FFFFFF"}}>SAIR DA CONTA</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </ScrollView>
            <Footer/>
        </View>
    )
}
