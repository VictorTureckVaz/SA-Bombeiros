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
                <Image
                style={styles.Image}
                />
                <View style={styles.Line}/>
            </View>
        </View>
    );
};
