import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../Header';
import Footer from './../Footer';
import { ScrollView } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainHome(){
    const navigation = useNavigation();
    
    async function verifyLogin(){
         const token = await AsyncStorage.getItem('token');
     try {

          if (token) {
               console.log('temos o token: ' + token);
               navigation.navigate('ocorrencia')
          } else {
               console.log('neo temos o token');
               navigation.navigate('login')
          }

     } catch (e) {
          console.error(e)
     }
    }

    return(
          <View style={styles.Body}>
               <Header/>
               <ScrollView>
                    
                    <View style={styles.Container}>

                    <View style={styles.ImageContainer}>
                         <Text>Rua Guilherme Tiburtius, 38</Text>
                         <Image
                         style={{width: 280, height: 280}}
                         source={require('../../../assets/bombeirosLogo.png')}
                         />
                    </View>
                    <View style={styles.ButtonContainer}>
                         <TouchableOpacity 
                         style={styles.Button}
                         // onPress={ verifyLogin }
                         onPress={() => navigation.navigate('ocorrencia')}
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
