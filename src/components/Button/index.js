import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button(){
    return (
        <TouchableOpacity style={styles.Container}>
            <Text style={styles.Title}>Entrar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Container: {
        padding: 7.5,
        backgroundColor: "#E74428",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Title: {
        color: "white",
        fontSize: 27,
        fontWeight: "bold",
    },
});