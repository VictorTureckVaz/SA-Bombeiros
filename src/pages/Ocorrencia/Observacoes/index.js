import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import api from './../../../lib/axios';

export default function MainObs(){
    
    const navigation = useNavigation();

    const [obs, setObs] = useState(null);


    

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
               <View style={styles.Container}>
                    <TextInput multiline placeholder = 'Observações Importantes...' numberOfLines={4} keyboardType = 'default' style={styles.TextInput} value={obs} onChangeText={setObs}/>
                    
                    <View style={styles.ButtonContainer}>
                         <TouchableOpacity 
                         style={styles.Button} 
                         onPress={ () => navigation.navigate('ocorrencia') }
                         >
                              <Image
                              style={styles.Icon}
                              source={require('../../../../assets/previous.png')}
                              />
                              <Text style={styles.ButtonText}>VOLTAR AOS INDICADORES DE ETAPA</Text>
                         </TouchableOpacity>
                    </View>
               </View>
            
            </ScrollView>
            <Footer/>

        </View>
    )
}
