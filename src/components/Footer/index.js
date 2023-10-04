import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Footer(){
    return(
        <View style={styles.Footer}>
            <View>
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