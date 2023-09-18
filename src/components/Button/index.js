import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default function ButtonLogin(){
    return (
        <TouchableOpacity style={styles.Container}>
            <Text style={styles.Title}>Entrar</Text>
        </TouchableOpacity>
    );
}
