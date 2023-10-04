import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Footer(){
    return(
        <View style={styles.Footer}>
            <TouchableOpacity style={styles.FooterSection}>
                <Image source={require("../../../assets/home.png")} style={styles.HomeImage}/>
               <Text>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FooterSection}>
            <Image source={require("../../../assets/home.png")} style={styles.HomeImage}/>
               <Text>Ocorrência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FooterSection}>
                <Image source={require("../../../assets/historic.png")} style={styles.HomeImage}/>
               <Text>Histórico</Text>
            </TouchableOpacity>
        </View>
    );

};