import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { OcorrenciaContext } from '../../context/ocorrenciaContext';
import api from './../../lib/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Footer(){



    async function verifyLogin(page){
        const token = await AsyncStorage.getItem('token');

        try {
             if (token) {
                    console.log("Null sumit footer");
                  console.log('temos o token: ' + token);
                  
                  if(localStorage.getItem('idReport') == null){
                    try {
                         if(page == "ocorrencia" && context.currentPage.state !== "ocorrencia") {

                              const reponse = await api.post("/nullSubmit", {}, {
                                   headers: {
                                        Authorization: `Bearer ${token}`,
                                   },
                              });
                              const id = reponse.data.id;
                              if (!id) throw "Sem id novo"
                              await AsyncStorage.setItem('idReport', id);
                              context.IdReport.setState(id);
                              console.log('Pegamos o id da report nova:', id);
                         }
                         navigation.navigate(page);
                         context.currentPage.setState(page);
                         } catch(e) {
                              console.error(e);
                         }
                    }
                    else{
                         navigation.navigate(page)
                    }
               } else {
                    console.log('neo temos o token');
                    navigation.navigate('login');
               }
          } catch (e) {
             console.error(e)
        }
        
   }


    const navigation = useNavigation();

    const context = useContext(OcorrenciaContext);


    function homePress(){
        navigation.navigate('home');
        context.currentPage.setState('home');
    }












    return(
        <View style={styles.Footer}>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => homePress()}>
               <Image source={require("../../../assets/VectorHouse.png")} style={styles.Icon}/>
               <Text>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => verifyLogin("ocorrencia")}>
               <Image source={require("../../../assets/GroupDocs.png")} style={styles.Icon} />
               <Text>Ocorrência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => verifyLogin("historico")}>
               <Image source={require("../../../assets/VectorHistoric.png")} style={{width: 25, height: 30}}/>
               <Text>Histórico</Text>
            </TouchableOpacity>
        </View>
    );

};