import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../Form';
import Button from '../Button'

export default function Main(){
    return(
        <View style={styles.Container}>
            <Form/>
        </View>
    )

}

const styles = StyleSheet.create({
    Container: {
        gap: 10,
    },

});
