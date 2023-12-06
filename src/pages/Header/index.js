import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Header(){

    const navigation = useNavigation();

    return(
        <View style={styles.Container}>
            <View style={styles.Menu}>
                <TouchableOpacity onPress={ () => navigation.navigate("profile") }>
                    <Image
                    style={styles.Image}
                    source={require('../../../assets/profile.png')}
                    />
                </TouchableOpacity>
                <View style={styles.Line}/>
            </View>
        </View>
    );
};
