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

export default function MainHistorico(){
    
    const navigation = useNavigation();
    const context = useContext(OcorrenciaContext);

    const [usingMenu, setUsingMenu] = useState(0);
    const [usingMenuB, setUsingMenuB] = useState(0);
    
    

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
            {/* //C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Administrative Tools */}
                <View style={styles.Container}>
                    

                    
                    <View style={styles.UsingMenu}>
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
                    </View>
               
                </View>
            </ScrollView>
          <Footer/>
        </View>
    )
}
