import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import SelectList from './../../../components/SelectList'
import RadioButton from '../../../components/RadioButton';
import ReturnButton from '../../../components/ReturnButton';
import ViewBox from '../../../components/ViewBox';

export default function MainTeste(){

    const [material, setMaterial] = useState([]);
    
    const [materialTypeValue, setMaterialTypeValue] = useState(null);
    const [oldMaterialTypeValue, setOldMaterialTypeValue] = useState(null);
    
    const [materialTypeName, setMaterialTypeName] = useState("Tipo do Material Utilizado");
    const [materialValue, setMaterialValue] = useState(null);
    
    const [oldMaterialValue, setOldMaterialValue] = useState(null);
    
    const [materialName, setMaterialName] = useState("Qual foi o Material Utilizado");
    const [materialSizeValue, setMaterialSizeValue] = useState(null);
    const [materialSizeName, setMaterialSizeName] = useState("Tamanho do Material");
    const [isSized, setIsSized] = useState(false);
    const [materialAmount, setMaterialAmount] = useState(1);


    
    const [save, setSave] = useState(null);

    const [materials, setMaterials] = useState([

    ]);
    useEffect(() => {
        
        if(oldMaterialTypeValue !== materialTypeValue){
            setMaterialName("Qual foi o Material Utilizado");
            setMaterialValue(null);
            setOldMaterialTypeValue(materialTypeValue);
        } else {
            setOldMaterialTypeValue(materialTypeValue);
        }
    })

    useEffect(() => {
        
        if(oldMaterialValue !== materialValue){
            setMaterialSizeName("Tamanho do Material");
            setMaterialSizeValue(null);
            setOldMaterialValue(materialValue);
            console.log(oldMaterialValue);
        } else {
            setOldMaterialValue(materialValue);
        }
    })





    const saveMaterial = (tipo, nome, tamanho, quantidade) => {
        const material = {
            tipo,
            nome,
            tamanho,
            quantidade,
        }
        setMaterials([...materials, material]) //separa os elementos do array "materials" e adiciona "material"
        console.log(tipo, nome, tamanho)
        console.log([...materials, material])
    }

    const addMaterial = () => {
    const newMaterial = (
         <ViewBox key={material.length}>

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
         </ViewBox>
    );
    setMaterial([...material, newMaterial]);
    console.log(material)
    }

    const sizedMaterials = [
        "teste",
        "ttf",
        "ked",
        "talas",
        "colar",
    ];
    useEffect(() => {
        
        for (var i = 0; i < sizedMaterials.length; i++) {
            if (materialValue == sizedMaterials[i]) {
              setIsSized(true);
              break;
            } else {
              setIsSized(false);
            }

        }
        
    })

    useEffect(() => {
        
        if(materialAmount < 1){
            setMaterialAmount(1);
        }
        
    })



    return (
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
                <View style={styles.Container}>
                    <SelectList
                        options={[
                            {
                                optionName: "Esquerdo",
                                optionValue: "esquerdo",
                            },
                            {
                                optionName: "Direito",
                                optionValue: "direito",
                            },
                        ]}
                        selectedOptionName={materialTypeName}
                        setSelectedOptionName={setMaterialTypeName}
                        selectedOptionValue={materialTypeValue}
                        setSelectedOptionValue={setMaterialTypeValue}
                    />
                    <SelectList
                            options={[
                                {
                                    optionName: "Frente",
                                    optionValue: "frente",
                                },
                                {
                                    optionName: "Costas",
                                    optionValue: "costas",
                                },
                                
                            ]}
                            selectedOptionName={materialName}
                            setSelectedOptionName={setMaterialName}
                            selectedOptionValue={materialValue}
                            setSelectedOptionValue={setMaterialValue}
                            
                    />

                    <SelectList
                            options={[
                                {
                                optionName: "Fraturas/Luxações/Entorses",
                                optionValue: "fraturas",
                                },
                                {
                                optionName: "Ferimentos Diversos",
                                optionValue: "ferimentosDiversos"
                                },
                                {
                                optionName: "Hemorragias",
                                optionValue: "hemorragias",
                                },
                                {
                                optionName: "Esviceração",
                                optionValue: "escviceracao"
                                },
                                {
                                optionName: "F.A.B/F.A.F",
                                optionValue: "ferimentoPorArma"
                                },
                                {
                                optionName: "Amputação",
                                optionValue: "amputacao"
                                },
                            ]}
                            selectedOptionName={materialSizeName}
                            setSelectedOptionName={setMaterialSizeName}
                            selectedOptionValue={materialSizeValue}
                            setSelectedOptionValue={setMaterialSizeValue}
                    />

                    {material.map((view, index) => (
                        <ViewBox key={index}>

                        <SelectList
                                options={[
                                    {
                                        optionName: "Esquerdo",
                                        optionValue: "esquerdo",
                                    },
                                    {
                                        optionName: "Direito",
                                        optionValue: "direito",
                                    },
                                ]}
                                selectedOptionName={materialTypeName}
                                setSelectedOptionName={setMaterialTypeName}
                                selectedOptionValue={materialTypeValue}
                                setSelectedOptionValue={setMaterialTypeValue}
                            />
                        <SelectList
                                options={[
                                    {
                                        optionName: "Frente",
                                        optionValue: "frente",
                                    },
                                    {
                                        optionName: "Costas",
                                        optionValue: "costas",
                                    },
                                    
                                ]}
                                selectedOptionName={materialName}
                                setSelectedOptionName={setMaterialName}
                                selectedOptionValue={materialValue}
                                setSelectedOptionValue={setMaterialValue}
                                
                        />

                        <SelectList
                                options={[
                                    {
                                    optionName: "Fraturas/Luxações/Entorses",
                                    optionValue: "fraturas",
                                    },
                                    {
                                    optionName: "Ferimentos Diversos",
                                    optionValue: "ferimentosDiversos"
                                    },
                                    {
                                    optionName: "Hemorragias",
                                    optionValue: "hemorragias",
                                    },
                                    {
                                    optionName: "Esviceração",
                                    optionValue: "escviceracao"
                                    },
                                    {
                                    optionName: "F.A.B/F.A.F",
                                    optionValue: "ferimentoPorArma"
                                    },
                                    {
                                    optionName: "Amputação",
                                    optionValue: "amputacao"
                                    },
                                ]}
                                selectedOptionName={materialSizeName}
                                setSelectedOptionName={setMaterialSizeName}
                                selectedOptionValue={materialSizeValue}
                                setSelectedOptionValue={setMaterialSizeValue}
                            />
                        </ViewBox>
                    ))}
                    
                    <TouchableOpacity style={[{display: save ? "none" : "flex"}]} onPress={() => saveMaterial(materialTypeValue, materialValue, materialSizeValue, materialAmount)}>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{display: save ? "flex" : "none"}]} onPress={addMaterial}>
                        <Text>Adicionar Material à lista</Text>
                    </TouchableOpacity>
                    <Text>{JSON.stringify([...materials, material])}</Text>
                    <ReturnButton/>
                    </View>
                </ScrollView>
                <Footer/>
        </View>
    );

    // button  false
    // Abutton true
    // button  false
    // Abutton true
    // button  false

    // ! <---
    // ^

    

    // const sizedMaterials = [
    //     "colar",
    //     "ttf",
    //     "ked",
    //     "talas"
    // ]
    


    // return(
    //     <View style={styles.Body}>
    //         <Header/>
    //         <ScrollView>
    //             <View style={styles.Container}>
                    

                    
    

                    
    //                 <ReturnButton/>
                    
    //                 <Footer/>
    //             </View>

                
    //         </ScrollView>
    //     </View>
    // )
}




