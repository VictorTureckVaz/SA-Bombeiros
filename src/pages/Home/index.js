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
     console.log(localStorage.getItem('token'));

     //pra quando o cara tiver logado como adm e der refresh na pagina, ele identificar que é adm, e limpar o localstorage e enviar pro login
     if(localStorage.getItem('ADMid') !== null){
          localStorage.removeItem('ADMid');
          localStorage.removeItem('ADMemail');
          localStorage.removeItem('ADMcpf');
          localStorage.removeItem('token');
          navigation.navigate('login');
     }

     async function verifyLogin(){
          // if (buttonDisabled) {
          //   // Se o botão já estiver desativado, não faça nada
          //   return;
          // }
          // setButtonDisabled(true); // Desativar o botão
          const token = await AsyncStorage.getItem('token');
          try {
               if (token) {
                    console.log("Null sumit home");
                    if(localStorage.getItem('idReport') == null){
                         try {
                              const reponse = await api.post("/nullSubmit", {}, {
                                   headers: {
                                        Authorization: `Bearer ${token}`,
                                   },
                              });
                              const id = reponse.data.id;
                              if (!id) throw "Não recebemos o id";
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
          } 
          // finally {
          //      setButtonDisabled(false); // Reativar o botão após a execução da função
          // }
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
                              // disabled={buttonDisabled}
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
