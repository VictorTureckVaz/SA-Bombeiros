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
                                    optionValue: "ataduras8"
                                },
                                {
                                    optionName: "Ataduras (12)",
                                    optionValue: "ataduras12"
                                },
                                {
                                    optionName: "Ataduras (20)",
                                    optionValue: "ataduras20"
                                },
                                {
                                    optionName: "Cateter TP. Óculos",
                                    optionValue: "cateterOculos"
                                },
                                {
                                    optionName: "Compressa Comum",
                                    optionValue: "compressaComum"
                                },
                                {
                                    optionName: "KIT H",
                                    optionValue: "kitH"
                                },
                                {
                                    optionName: "KIT P",
                                    optionValue: "kitP"
                                },
                                {
                                    optionName: "KIT Q",
                                    optionValue: "kitQ"
                                },
                                {
                                    optionName: "Luvas",
                                    optionValue: "luvas"
                                },
                                {
                                    optionName: "Máscara",
                                    optionValue: "mascara"
                                },
                                {
                                    optionName: "Manta Aluminizada",
                                    optionValue: "mantaAluminizada"
                                },
                                {
                                    optionName: "Pás do Dea",
                                    optionValue: "pasDea"
                                },
                                {
                                    optionName: "Sonda de Aspiração",
                                    optionValue: "sondaAspiracao"
                                },
                                {
                                    optionName: "Soro Fisiológico",
                                    optionValue: "soroFisiologico"
                                },
                                {
                                    optionName: "Talas Pap.",
                                    optionValue: "talas"
                                },
                                {
                                    optionName: "Outros",
                                    optionValue: "outros"
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
                                    optionValue: "baseEstabilizante"
                                },
                                {
                                    optionName: "Colar",
                                    optionValue: "colar"
                                },
                                {
                                    optionName: "Coxins Estabilizante",
                                    optionValue: "coxinsEstabilizante"
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
                    <View style={{display: isSized == true ? "flex" : "none"}}>
                        <SelectList
                            options={[
                                {
                                    optionName: "P",
                                    optionValue: "p"
                                },
                                {
                                    optionName: "M",
                                    optionValue: "m"
                                },
                                {
                                    optionName: "G",
                                    optionValue: "g"
                                },
                                {
                                    optionName: "GG",
                                    optionValue: "gg"
                                },
                            ]}
                            selectedOptionName={materialSizeName}
                            setSelectedOptionName={setMaterialSizeName}
                            selectedOptionValue={materialSizeValue}
                            setSelectedOptionValue={setMaterialSizeValue}
                        />
                    </View>
                    {material.map((view, index) => (
                        <ViewBox key={index}>

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
                                            optionValue: "Talas"
                                        },
                                        {
                                            optionName: "Outros",
                                            optionValue: "Outros"
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




                            <View style={{display: isSized == true ? "flex" : "none"}}>
                                <SelectList
                                    options={[
                                        {
                                            optionName: "P",
                                            optionValue: "p"
                                        },
                                        {
                                            optionName: "M",
                                            optionValue: "m"
                                        },
                                        {
                                            optionName: "G",
                                            optionValue: "g"
                                        },
                                        {
                                            optionName: "GG",
                                            optionValue: "gg"
                                        },
                                    ]}
                                    selectedOptionName={materialSizeName}
                                    setSelectedOptionName={setMaterialSizeName}
                                    selectedOptionValue={materialSizeValue}
                                    setSelectedOptionValue={setMaterialSizeValue}
                                />
                            </View>
                        </ViewBox>
                    ))}
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Text style={{fontSize: 20, width: "50%"}}>Quant. do Material:</Text>
                        <View style={styles.counterContainer}>
                            <TouchableOpacity style={{}} onPress={() => setMaterialAmount(materialAmount-1)}>
                                <Text style={{fontSize: 25}}>-</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 25}}>{materialAmount}</Text>
                            <TouchableOpacity onPress={() => setMaterialAmount(materialAmount+1)}>
                                <Text style={{fontSize: 25}}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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




