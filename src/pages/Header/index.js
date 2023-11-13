import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Header(){

    const navigation = useNavigation();

    async function logout(){
        await AsyncStorage.removeItem('token')
        navigation.navigate('login')
    }

    return(
        <View style={styles.Container}>
            <View style={styles.Menu}>
                <Image
                source={require('../../../assets/menu.png')}
                style={styles.Image}
                />
                <View style={styles.Line}/>
            </View>
            <TouchableOpacity onPress={logout}>
                <Text>logout</Text>
            </TouchableOpacity>
        </View>
    );

};
