import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function MainHome(){
    const navigation = useNavigation();

    return(
          <View>
               <View style={styles.ImageContainer}/>
               <View style={styles.Container}>
                    <TouchableOpacity 
                    style={styles.Button}
                    onPress={ () => navigation.navigate('ocorrencia')}
                    >
                         <Text style={styles.Title}>PREENCHER OCORRÊNCIA</Text>
                    </TouchableOpacity>
               </View>
               
          </View>
    );

};
