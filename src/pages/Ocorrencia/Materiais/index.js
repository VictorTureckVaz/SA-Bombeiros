import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import SelectList from './../../../components/SelectList'

export default function MainMateriais(){
    
    const navigation = useNavigation();

    // button  false
    // Abutton true
    // button  false
    // Abutton true
    // button  false

    // ! <---
    // ^

    const [usingMenu, setUsingMenu] = useState(false);
    const [material, setMaterial] = useState("Nenhum");
    const [perfusao, setPerfusao] = useState("Perfusão");

    function UsingMenu(value) {
        setPerfusao(value); // seta o valor da perfusão com o valor dado ao chamar a função
        setUsingMenu(!usingMenu) // aumenta o using menu para considerar como desativado
    }

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
            
                {/* <View style={styles.Container}>



                    <View style={[styles.UsingMenu, {height: usingMenu ? 138 : 56}]}>
                        <TouchableOpacity style={styles.UsingMenuTitle} onPress={ () => setUsingMenu((usingMenu+1)%2)}>
                            <Text style={styles.Text}>{perfusao}</Text>
                            <View style={styles.UsingMenuIconContainer}>
                                <Image
                                style={[styles.UsingMenuIcon, {transform: usingMenu ? [{ rotate: "180deg" }] : [{ rotate: "0deg" }]}]}
                                source={require('../../../../assets/downArrow.png')}
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Maior que 2 Segundos")}>
                            <Text style={styles.Text}>Ataduras</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.UsingMenuTitle, {display: usingMenu ? "flex" : "none"}]} onPress={ () => UsingMenu("Menor que 2 segundos")}>
                            <Text style={[styles.Text]}>Couro</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                         
                    </View>

                    <View style={[styles.BorderContainer, {justifyContent: "space-around"}]}>
                        <TouchableOpacity style={[styles.UsingMenuTitle]} onPress={ () => UsingMenu()}>
                            <Text style={[styles.Text]}>Anormal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.UsingMenuTitle]} onPress={ () => UsingMenu()}>
                            <Text style={[styles.Text]}>Normal</Text>
                        </TouchableOpacity>
                    </View>
               
                    
                    
                </View> */}
                
                
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

                <SelectList
                    options={[
                        {
                            optionName: "Mano",
                            optionValue: "Nota 10"
                        },
                        {
                            optionName: "Mano2",
                            optionValue: "Nota 10 (Tbm)"
                        },
                        {
                            optionName: "Mano3",
                            optionValue: "Nota 5 + 5"
                        },
                    ]}
                    usingMenu={usingMenu}
                    setUsingMenu={setUsingMenu}
                    selectedOption={material}
                    setSelectedOption={setMaterial}
                />
                <Footer/>
            </ScrollView>
        </View>
    )
}
