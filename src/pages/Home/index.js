import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../Header';
import Footer from './../Footer';
import { ScrollView } from 'native-base';

export default function MainHome(){
    const navigation = useNavigation();

    return(
          <View style={styles.Body}>
               <Header/>
               <ScrollView>
                    
                    <View style={styles.Container}>

                    <View style={styles.ImageContainer}/>
                    <View style={styles.ButtonContainer}>
                         <TouchableOpacity 
                         style={styles.Button}
                         onPress={ () => navigation.navigate('ocorrencia')}
                         >
                              <Text style={styles.Title}>PREENCHER OCORRÊNCIA</Text>
                         </TouchableOpacity>
                    </View>

                    
                    </View>
                    <Footer/>
               </ScrollView>
          </View>
    );

};
