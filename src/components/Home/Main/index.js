import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function mainHome(){
    return(
          <View>
               <View style={styles.ImageContainer}/>
               <View style={styles.Container}>
                    <TouchableOpacity style={styles.Button}>
                         <Text style={styles.Title}>PREENCHER OCORRÊNCIA</Text>
                    </TouchableOpacity>
               </View>
               
          </View>
    );

};
