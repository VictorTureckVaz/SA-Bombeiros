import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export default function Header(){
    return(
        <View style={styles.Container}>
            <View style={styles.Menu}>
                <Image
                source={require('../../../assets/menu.png')}
                style={styles.Image}
                />
                <View style={styles.Line}/>
            </View>
        </View>
    );

};
