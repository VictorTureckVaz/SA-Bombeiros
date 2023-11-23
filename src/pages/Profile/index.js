import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';
import Header from "./../Header";
import Footer from "./../Footer";

export default function MainProfile(){
    return(
        <View style={styles.Container}>
            <Header/>
                <View style={styles.ProfileContainer}>
                    
                </View>
                <View style={styles.InfoContainer}>
                   <View style={styles.TextContainer}>
                        <Text style={styles.Text}>Nome Completo</Text>
                   </View>
                   <View style={styles.TextContainer}>
                        <Text style={styles.Text}>Email/CPF</Text>
                   </View>
                </View>
            <Footer/>
        </View>
    )
}
