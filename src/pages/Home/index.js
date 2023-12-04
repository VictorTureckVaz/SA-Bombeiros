import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../Header';
import Footer from './../Footer';
import { ScrollView } from 'native-base';
import api from './../../lib/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { OcorrenciaContext } from './../../context/ocorrenciaContext'

export default function MainHome(){
     const navigation = useNavigation();
     const context = useContext(OcorrenciaContext);
     const [buttonDisabled, setButtonDisabled] = useState(false); // Estado para controlar se o botão está desativado
    
     console.log('Pegamos o id do bombeiro no Home: ', localStorage.getItem('BombeiroId'));
     console.log(localStorage.getItem('token'));

     async function verifyLogin(){
          if (buttonDisabled) {
            // Se o botão já estiver desativado, não faça nada
            return;
          }
          setButtonDisabled(true); // Desativar o botão
          const token = await AsyncStorage.getItem('token');

          try {
               if (token) {
                    console.log('temos o token: ' + token);
                    console.log('id do report: ', localStorage.getItem('idReport'));
                    if(localStorage.getItem('idReport') == null){
                         console.log('id do report dnv: ', localStorage.getItem('idReport'));
                         try {
                              const reponse = await api.post("/nullSubmit");
                              const id = reponse.data.id;
                              await AsyncStorage.setItem('idReport', id);
                              context.IdReport.setState(id);
                              console.log('Pegamos o id da report nova:', id);
                              navigation.navigate('ocorrencia');
                         } catch(e) {
                              console.error(e);
                         }
                    }else{
                         navigation.navigate('ocorrencia');
                    }
               } else {
                    console.log('neo temos o token');
                    navigation.navigate('login')
               }
          } catch (e) {
               console.error(e)
          } finally {
               setButtonDisabled(false); // Reativar o botão após a execução da função
          }
     }
     return(
          <View style={styles.Body}>
               <Header/>
               <ScrollView>
                    
                    <View style={styles.Container}>

                    <View style={styles.ImageContainer}>
                         <Image
                         style={{width: 280, height: 280}}
                         source={require('../../../assets/bombeirosLogo.png')}
                         />
                    </View>
                    <View style={styles.ButtonContainer}>
                         <TouchableOpacity 
                         style={[styles.Button, { opacity: buttonDisabled ? 0.5 : 1 }]}
                         onPress={ verifyLogin }
                         disabled={buttonDisabled}
                         >
                              <Text style={styles.Title}>PREENCHER OCORRÊNCIA</Text>
                         </TouchableOpacity>
                    </View>
    
                    </View>
               </ScrollView>
               <Footer/>
          </View>
    );

};
