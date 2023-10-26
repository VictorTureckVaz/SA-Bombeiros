import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Header from "./../../Header";
import Footer from "./../../Footer";
import { extendTheme, Checkbox } from "native-base";
import ReturnButton from '../../../components/ReturnButton';

export default function MainSinaisSintomas() {

    const navigation = useNavigation();
    const [groupValues, setGroupValues] = React.useState([]);

    return (
     <View style={styles.Body}>
        <Header/>
        <ScrollView>
            <View style={styles.Container}>
                <Checkbox.Group onChange={setGroupValues} border="black" colorScheme="green" size="md" value={groupValues} accessibilityLabel="choose numbers">
                    <Checkbox value=" " my={1}>
                        Abdômen Sensível ou Rígido
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Afundamento de Crânio
                    </Checkbox>
                    <Checkbox value=" " my={1}>
                        Agitação
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Amnésia
                    </Checkbox>
                    <Checkbox value=" " my={1}>
                        Angina de Peito
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Apneia
                    </Checkbox>
                    <Checkbox value=" " my={1}>
                        Bradicardia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                      texto
                    </Checkbox>
                    <Checkbox value=" " my={1}>
                        Bradipnéia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Bronco-Aspirando
                    </Checkbox>
                    <Checkbox value=" " my={1}>
                        Cefaléia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Convulsão
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Decorticação
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Deformidade
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Descerebração
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Desmaio
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Desvio de Traquéia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Dispnéia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Dor Local
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Enfisema Subcutâneo
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Êxtase de Jugular
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Face Pálida
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Hemorragia Interna
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Hemorragia Externa
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Hipertensão
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Náuseas e Vômito
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Nasoragia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Óbito
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Otorréia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        O.V.A.C.E
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Parada Cardíaca
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        texto
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Parada Respiratória
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Priapismo
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Prurido na Pele
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Pupilas
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Pupilas - Anisocoria
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Pupilas - Isocoria
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Pupilas - Midriade
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Pupilas - Miose
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Pupilas - Reagente
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Pupilas - Não Reagente
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Sinal de Battle
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Sinal de Guaxinim
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Sudorese
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Taquipnéia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Taquicardia
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Tontura
                    </Checkbox>
                    <Checkbox value=" " my={1}> 
                        Outros
                    </Checkbox>
                </Checkbox.Group>
            </View>
            <ReturnButton/>
            <Footer/>
        </ScrollView>
     </View>

    );
}