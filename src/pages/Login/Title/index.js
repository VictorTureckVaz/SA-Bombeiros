import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'

export default function TitleLogin(){
    return(
        <View>
            <Text style={styles.BigTextTitle}>OLÁ, SEJA</Text>
            <Text style={styles.BigTextTitle}>BEM-VINDO!</Text>
            <Text style={styles.SmallTextTitle}>Faça o login para continuar</Text>
        </View>
    )

}
