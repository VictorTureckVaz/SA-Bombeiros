import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../Header';
import Footer from './../Footer';
import { ScrollView } from 'native-base';
import api from './../../lib/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { OcorrenciaContext } from './../../context/ocorrenciaContext'
import { useEffect } from 'react';

export default function MainHistorico(){
    
    const navigation = useNavigation();
    const context = useContext(OcorrenciaContext);

    const [usingMenu, setUsingMenu] = useState(0);
    const [usingMenuB, setUsingMenuB] = useState(0);
    const [ocorrencias, setOcorrencias] = useState([]);
    
    useEffect(() => {
     const getHistorico = async () => {
          const token = await AsyncStorage.getItem("token");
          const ocorrenciasApi = await api.get("http://localhost:15600/historico", {
               headers: { Authorization: "Bearer " + token},
          })

          setOcorrencias(ocorrenciasApi.data)
          console.log(ocorrenciasApi.data)
     }

     getHistorico()
    }, [])
    

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
            {/* //C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Administrative Tools */}
                <View style={styles.Container}>
                    

                    
                    {ocorrencias.map((ocorrencia, i) => (
                         <View key={i} style={styles.UsingMenu}>
                         <TouchableOpacity style={styles.UsingMenuTitle} onPress={ () => setUsingMenu(!usingMenu)}>
                             <Text style={{fontSize: 17}}>Nº da Ocorrência {ocorrencia.idIdentificacao_do_paciente}</Text>
                             <View style={styles.UsingMenuIconContainer}>
                                 <Image
                                     style={[
                                         styles.UsingMenuIcon,
                                         {
                                             transform: usingMenu
                                                 ? [{ rotate: "180deg" }]
                                                 : [{ rotate: "0deg" }]
                                         }
                                     ]}
                                     source={require('../../../assets/downArrow.png')}
                                 />
                             </View>
                         </TouchableOpacity>
                         <View style={{display: usingMenu ? "flex" : "none", gap: 5}}>
 
                             <View style={styles.BorderContainer}>
                                    <Text style={{fontSize: 15}}>Vitima Era {ocorrencia.Vitima_era}</Text>
                             </View>
                             <View style={styles.BorderContainer}>
                                    <Text style={{fontSize: 15}}>Tipo de Ocorrência {ocorrencia.tipo_de_ocorrencia}</Text>
                             </View>
                             <View style={{gap: 5, flexDirection: "row"}}>
                                    <View style={styles.BorderContainer}>
                                         <Text style={{fontSize: 15}}>Idade {ocorrencia.PacienteIdade}</Text>
                                    </View>
                                    <View style={styles.BorderContainer}>
                                         <Text style={{fontSize: 15}}>Sexo {ocorrencia.PacienteSexo === "m" ? "Masculino" : ocorrencia.PacienteSexo === "f" ? "Feminino" : "N/A"}</Text>
                                    </View>
                             </View>
 
                         </View>
                     </View>
                    ))}

                    {/* <View style={styles.UsingMenu}>
                        <TouchableOpacity style={styles.UsingMenuTitle} onPress={ () => setUsingMenu(!usingMenu)}>
                            <Text style={{fontSize: 17}}>Nº da Ocorrência</Text>
                            <View style={styles.UsingMenuIconContainer}>
                                <Image
                                    style={[
                                        styles.UsingMenuIcon,
                                        {
                                            transform: usingMenu
                                                ? [{ rotate: "180deg" }]
                                                : [{ rotate: "0deg" }]
                                        }
                                    ]}
                                    source={require('../../../assets/downArrow.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{display: usingMenu ? "flex" : "none", gap: 5}}>

                            <View style={styles.BorderContainer}>
                                   <Text style={{fontSize: 15}}>Vitima Era</Text>
                            </View>
                            <View style={styles.BorderContainer}>
                                   <Text style={{fontSize: 15}}>Tipo de Ocorrência</Text>
                            </View>
                            <View style={{gap: 5, flexDirection: "row"}}>
                                   <View style={styles.BorderContainer}>
                                        <Text style={{fontSize: 15}}>Idade</Text>
                                   </View>
                                   <View style={styles.BorderContainer}>
                                        <Text style={{fontSize: 15}}>Sexo</Text>
                                   </View>
                            </View>

                        </View>
                    </View> */}
               
                </View>
            </ScrollView>
          <Footer/>
        </View>
    )
}
