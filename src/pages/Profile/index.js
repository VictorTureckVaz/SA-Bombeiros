import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'native-base';
import Header from './../Header';
import Footer from './../Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OcorrenciaContext } from "../../context/ocorrenciaContext";


export default function MainProfile(){
    const navigation = useNavigation();
    const context = useContext(OcorrenciaContext);

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
                        style={{width: 160, height: 160}}
                        source={require('../../../assets/ProfilePicture.png')}
                        />
                    </View>

                    <View style={styles.InfoContainer}>
                       <View style={styles.TextContainer}>
                            <Text style={styles.Text}>Nome Completo</Text>
                       </View>
                       <View style={styles.TextContainer}>
                            <Text style={styles.Text}>Email</Text>
                       </View>
                    </View>

                    <View style={styles.LogoutContainer}>
                        <TouchableOpacity style={styles.Logout} onPress={logout}>
                            <Text>SAIR</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <Footer/>
        </View>
    )
}
