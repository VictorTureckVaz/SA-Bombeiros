import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import styles from './style'; 
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import SelectList from './../../../components/SelectList'
import RadioButton from '../../../components/RadioButton';
import ReturnButton from '../../../components/ReturnButton';
import ViewBox from '../../../components/ViewBox';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";


export default function MainTeste(){

    const context = useContext(OcorrenciaContext);

    const [material, setMaterial] = useState([]);
    
    
    
    const [faceValue, setFaceValue] = useState("Tipo do Material Utilizado");
    const [faceName, setFaceName] = useState("Tipo do Material Utilizado");
    const [ladoValue, setLadoValue] = useState(null);
    const [ladoName, setLadoName] = useState(null);
    
    const [tipoFerimentoValue, setTipoFerimentoValue] = useState(null);
    const [tipoFerimentoName, setTipoFerimentoName] = useState(null);



    function saveFerimento() {
        context.ferimentos.setState([...context.ferimentos.state, context.ferimento.state]);
    }


    // const addMaterial = () => {
    // const newMaterial = (
    //      <ViewBox key={material.length}>

    //                 <SelectList
    //                     options={[
    //                         {
    //                             optionName: "Esquerdo",
    //                             optionValue: "esquerdo",
    //                         },
    //                         {
    //                             optionName: "Direito",
    //                             optionValue: "direito",
    //                         },
    //                     ]}
    //                     selectedOptionName={ladoName}
    //                     setSelectedOptionName={setLadoName}
    //                     selectedOptionValue={ladoValue}
    //                     setSelectedOptionValue={setLadoValue}
    //                 />
    //      </ViewBox>
    // );
    // setMaterial([...material, newMaterial]);
    // console.log(material)
    // }

    const sizedMaterials = [
        "teste",
        "ttf",
        "ked",
        "talas",
        "colar",
    ];
    



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
                        selectedOptionName={ladoName}
                        setSelectedOptionName={setLadoName}
                        selectedOptionValue={ladoValue}
                        setSelectedOptionValue={setLadoValue}
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
                            selectedOptionName={faceName}
                            setSelectedOptionName={setFaceName}
                            selectedOptionValue={faceValue}
                            setSelectedOptionValue={setFaceValue}
                            
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
                            selectedOptionName={tipoFerimentoName}
                            setSelectedOptionName={setTipoFerimentoName}
                            selectedOptionValue={tipoFerimentoValue}
                            setSelectedOptionValue={setTipoFerimentoValue}
                    />

                    
                        
                    <TouchableOpacity style={[{display: save ? "none" : "flex"}]} onPress={() => saveFerimento(faceValue, ladoValue, tipoFerimentoValue)}>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                    <Text>{JSON.stringify([...ferimentos, ferimento])}</Text>

                    <SelectList
                        options={[
                            {
                                optionName: "Sim",
                                optionValue: "sim",
                            },
                            {
                                optionName: "Não",
                                optionValue: "nao",
                            },
                        ]}
                        selectedOptionName={context.possuiQueimadurasName.state}
                        setSelectedOptionName={context.possuiQueimadurasName.setState}
                        selectedOptionValue={context.possuiQueimadurasValue.state}
                        setSelectedOptionValue={context.possuiQueimadurasValue.setState}
                        title={"Possui Queimadura?"}
                    />

                    <View style={[styles.Table, {display: context.possuiQueimadurasValue.state == "sim" ? "flex" : "none"}]}>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.HeaderCell}>
                                <Text style={{fontSize: 18, color: "white", textAlign: "center"}}>Queimadura</Text>
                            </View>
                            <View style={styles.HeaderCell}>
                                <Text style={{fontSize: 18, color: "white", textAlign: "center"}}>1º grau</Text>
                            </View>
                            <View style={styles.HeaderCell}>
                                <Text style={{fontSize: 18, color: "white", textAlign: "center"}}>2º grau</Text>
                            </View>
                            <View style={styles.HeaderCell}>
                                <Text style={{fontSize: 18, color: "white", textAlign: "center"}}>3º grau</Text>
                            </View>
                        </View>


                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>Cabeça</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauCabeca.state == 1 ? "green" : "white"}]} onPress={() => saveQueimadura("cabeca", "primeiro")}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauCabeca.state == 1 ? "green" : "white"}]} onPress={() => saveQueimadura("cabeca", "segundo")}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauCabeca.state == 1 ? "green" : "white"}]} onPress={() => saveQueimadura("cabeca", "terceiro")}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>Pescoço</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauPescoco.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauPescoco.setState(!context.primeiroGrauPescoco.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauPescoco.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauPescoco.setState(!context.primeiroGrauPescoco.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauPescoco.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauPescoco.setState(!context.primeiroGrauPescoco.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>T. Ant</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauTAnt.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauTAnt.setState(!context.primeiroGrauTAnt.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauTAnt.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauTAnt.setState(!context.primeiroGrauTAnt.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauTAnt.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauTAnt.setState(!context.primeiroGrauTAnt.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>T. Pos</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauTPos.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauTPos.setState(!context.primeiroGrauTPos.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauTPos.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauTPos.setState(!context.primeiroGrauTPos.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauTPos.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauTPos.setState(!context.primeiroGrauTPos.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>Genitália</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauGenitalia.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauGenitalia.setState(!context.primeiroGrauGenitalia.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauGenitalia.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauGenitalia.setState(!context.primeiroGrauGenitalia.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauGenitalia.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauGenitalia.setState(!context.primeiroGrauGenitalia.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>M.I.D</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauMid.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauMid.setState(!context.primeiroGrauMid.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauMid.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauMid.setState(!context.primeiroGrauMid.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauMid.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauMid.setState(!context.primeiroGrauMid.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>M.I.E</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauMie.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauMie.setState(!context.primeiroGrauMie.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauMie.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauMie.setState(!context.primeiroGrauMie.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauMie.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauMie.setState(!context.primeiroGrauMie.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>M.S.D</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauMsd.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauMsd.setState(!context.primeiroGrauMsd.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauMsd.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauMsd.setState(!context.primeiroGrauMsd.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauMsd.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauMsd.setState(!context.primeiroGrauMsd.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.Cell}>
                                <Text style={{fontSize: 18}}>M.S.E</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauMse.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauMse.setState(!context.primeiroGrauMse.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauMse.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauMse.setState(!context.primeiroGrauMse.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauMse.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauMse.setState(!context.primeiroGrauMse.state)}/>
                        </View>


                    </View>
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




