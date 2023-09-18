import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../Form';


export default function MainLogin(){
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
