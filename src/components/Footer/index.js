import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export default function Footer(){
    return(
        <View style={styles.Footer}>
            <View style={styles.FooterSection}>
                <Image source={require("../../../assets/home.png")}/>
               <Text>Início</Text>
            </View>
            <View>
               <Text>Ocorrência</Text>
            </View>
            <View>
               <Text>Histórico</Text>
            </View>
        </View>
    );

};