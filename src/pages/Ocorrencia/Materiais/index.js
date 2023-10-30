import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import SelectList from './../../../components/SelectList'
import RadioButton from '../../../components/RadioButton';
import ReturnButton from '../../../components/ReturnButton';

export default function MainMateriais(){
    
    const navigation = useNavigation();

    // button  false
    // Abutton true
    // button  false
    // Abutton true
    // button  false

    // ! <---
    // ^

    const [materialTypeValue, setMaterialTypeValue] = useState(null);
    const [materialTypeName, setMaterialTypeName] = useState("Tipo do Material Utilizado");
    const [materialValue, setMaterialValue] = useState(null);
    const [materialName, setMaterialName] = useState("Qual foi o Material Utilizado");
    const [materialSizeValue, setMaterialSizeValue] = useState(null);
    const [materialSizeName, setMaterialSizeName] = useState("Tamanho do Material");


    


    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
                <View style={styles.Container}>
                    <SelectList
                        options={[
                            {
                                optionName: "Descartável",
                                optionValue: "descartavel"
                            },
                            {
                                optionName: "Deixado no Hospital",
                                optionValue: "deixadoNoHospital"
                            },
                        ]}
                        selectedOptionName={materialTypeName}
                        setSelectedOptionName={setMaterialTypeName}
                        selectedOptionValue={materialTypeValue}
                        setSelectedOptionValue={setMaterialTypeValue}
                    />

                    
                    <View style={{display: materialTypeValue == "descartavel" ? "flex" : "none"}}>
                        <SelectList
                            options={[
                                {
                                    optionName: "Ataduras (8)",
                                    optionValue: "Ataduras8"
                                },
                                {
                                    optionName: "Ataduras (12)",
                                    optionValue: "Ataduras12"
                                },
                                {
                                    optionName: "Ataduras (20)",
                                    optionValue: "Ataduras20"
                                },
                                {
                                    optionName: "Cateter TP. Óculos",
                                    optionValue: "CateterOculos"
                                },
                                {
                                    optionName: "Compressa Comum",
                                    optionValue: "CompressaComum"
                                },
                                {
                                    optionName: "KIT H",
                                    optionValue: "KitH"
                                },
                                {
                                    optionName: "KIT P",
                                    optionValue: "KitP"
                                },
                                {
                                    optionName: "KIT Q",
                                    optionValue: "KitQ"
                                },
                                {
                                    optionName: "Luvas",
                                    optionValue: "Luvas"
                                },
                                {
                                    optionName: "Máscara",
                                    optionValue: "Mascara"
                                },
                                {
                                    optionName: "Manta Aluminizada",
                                    optionValue: "MantaAluminizada"
                                },
                                {
                                    optionName: "Pás do Dea",
                                    optionValue: "PasDea"
                                },
                                {
                                    optionName: "Sonda de Aspiração",
                                    optionValue: "SondaAspiracao"
                                },
                                {
                                    optionName: "Soro Fisiológico",
                                    optionValue: "SoroFisiologico"
                                },
                                {
                                    optionName: "Talas Pap.",
                                    optionValue: "VALOR"
                                },
                                {
                                    optionName: "Outros",
                                },
                            ]}
                            selectedOptionName={materialName}
                            setSelectedOptionName={setMaterialName}
                            selectedOptionValue={materialValue}
                            setSelectedOptionValue={setMaterialValue}
                            
                        />
                    </View>

                    <View style={{display: materialTypeValue == "deixadoNoHospital" ? "flex" : "none"}}>

                        <SelectList
                            options={[
                                {
                                    optionName: "Base do Estabilizante",
                                    optionValue: "BaseEstabilizante"
                                },
                                {
                                    optionName: "Colar",
                                    optionValue: "colar"
                                },
                                {
                                    optionName: "Coxins Estabilizante",
                                    optionValue: "CoxinsEstabilizante"
                                },
                                {
                                    optionName: "NOME",
                                    optionValue: "VALOR"
                                },
                            ]}
                            selectedOptionName={materialName}
                            setSelectedOptionName={setMaterialName}
                            selectedOptionValue={materialValue}
                            setSelectedOptionValue={setMaterialValue}
                        />
                    </View>




                    <View style={{display: materialValue ? "flex" : "none"}}>
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
                                {
                                    optionName: "NOME MOSTRADO",
                                    optionValue: "VALOR PARA O BANCO"
                                },
                            ]}
                            selectedOptionName={materialSizeName}
                            setSelectedOptionName={setMaterialSizeName}
                            selectedOptionValue={materialSizeValue}
                            setSelectedOptionValue={setMaterialSizeValue}
                        />
                    </View> 
                    <ReturnButton/>
                    
                    <Footer/>
                </View>

                
            </ScrollView>
        </View>
    )
}
