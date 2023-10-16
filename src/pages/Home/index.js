import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../Header';
import Footer from './../Footer';

export default function MainHome(){
    const navigation = useNavigation();

    return(
          <View>
               <Header/>
               <View style={styles.ImageContainer}/>
               <View style={styles.Container}>
                    <TouchableOpacity 
                    style={styles.Button}
                    onPress={ () => navigation.navigate('ocorrencia')}
                    >
                         <Text style={styles.Title}>PREENCHER OCORRÊNCIA</Text>
                    </TouchableOpacity>
               </View>
               <Footer/>
          </View>
    );

};
