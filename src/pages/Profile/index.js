import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'native-base';
import Header from './../Header';
import Footer from './../Footer';

export default function MainProfile(){
    const navigation = useNavigation();

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
                        // style={{}}
                        // source={require('')}
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
                            <Text>logout</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <Footer/>
        </View>
    )
}
