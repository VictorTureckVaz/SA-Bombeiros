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
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../lib/axios';


export default function MainTeste(){

    const context = useContext(OcorrenciaContext);

    const [faceValue, setFaceValue] = useState(null);
    const [faceName, setFaceName] = useState(null);
    const [ladoValue, setLadoValue] = useState(null);
    const [ladoName, setLadoName] = useState(null);
    const [localFerimento, setLocalFerimento] = useState(null);
    
    const [tipoFerimentoValue, setTipoFerimentoValue] = useState(null);
    const [tipoFerimentoName, setTipoFerimentoName] = useState(null);

    const saveFerimento = (local, lado, face, tipo) => {
        const ferimento = {
            local,
            lado,
            face,
            tipo,
        }
        // console.log(materials[0].tipo)
        if(local !== null && local !== "" && lado !== null && face !== null && tipo !== null){
            context.ferimentos.setState([...context.ferimentos.state, ferimento]) //separa os elementos do array "materials" e adiciona "material"
        }
        
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

    




    return (
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
                <View style={styles.Container}>
                    <TextInput 
                    placeholder = 'Local do Ferimento' 
                    keyboardType = 'default' 
                    style={styles.TextInput}
                    value={localFerimento} 
                    onChangeText={setLocalFerimento}
                    />
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
                        title={"Lado do Ferimento"}
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
                            title={"Face do Ferimento"}
                            
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
                            title={"Tipo do Ferimento"}
                    />

                    
                        
                    <TouchableOpacity  onPress={() => saveFerimento(localFerimento, faceValue, ladoValue, tipoFerimentoValue)}>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                    <Text>{JSON.stringify([...context.ferimentos.state])}</Text>

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
                            <View style={[styles.HeaderCell, {width: "28%"}]}>
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
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>Cabeça</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauCabeca.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauCabeca.setState(!context.primeiroGrauCabeca.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauCabeca.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauCabeca.setState(!context.segundoGrauCabeca.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauCabeca.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauCabeca.setState(!context.terceiroGrauCabeca.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>Pescoço</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauPescoco.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauPescoco.setState(!context.primeiroGrauPescoco.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauPescoco.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauPescoco.setState(!context.segundoGrauPescoco.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauPescoco.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauPescoco.setState(!context.terceiroGrauPescoco.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>T. Ant</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauTAnt.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauTAnt.setState(!context.primeiroGrauTAnt.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauTAnt.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauTAnt.setState(!context.segundoGrauTAnt.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauTAnt.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauTAnt.setState(!context.terceiroGrauTAnt.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>T. Pos</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauTPos.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauTPos.setState(!context.primeiroGrauTPos.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauTPos.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauTPos.setState(!context.segundoGrauTPos.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauTPos.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauTPos.setState(!context.terceiroGrauTPos.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>Genitália</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauGenitalia.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauGenitalia.setState(!context.primeiroGrauGenitalia.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauGenitalia.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauGenitalia.setState(!context.segundoGrauGenitalia.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauGenitalia.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauGenitalia.setState(!context.terceiroGrauGenitalia.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>M.I.D</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauMid.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauMid.setState(!context.primeiroGrauMid.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauMid.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauMid.setState(!context.segundoGrauMid.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauMid.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauMid.setState(!context.terceiroGrauMid.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>M.I.E</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauMie.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauMie.setState(!context.primeiroGrauMie.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauMie.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauMie.setState(!context.segundoGrauMie.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauMie.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauMie.setState(!context.terceiroGrauMie.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>M.S.D</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauMsd.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauMsd.setState(!context.primeiroGrauMsd.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauMsd.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauMsd.setState(!context.segundoGrauMsd.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauMsd.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauMsd.setState(!context.terceiroGrauMsd.state)}/>
                        </View>
                        <View style={{flexDirection: "row", gap: 2,}}>
                            <View style={styles.TitleCell}>
                                <Text style={{fontSize: 18}}>M.S.E</Text>
                            </View>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.primeiroGrauMse.state == 1 ? "green" : "white"}]} onPress={() => context.primeiroGrauMse.setState(!context.primeiroGrauMse.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.segundoGrauMse.state == 1 ? "green" : "white"}]} onPress={() => context.segundoGrauMse.setState(!context.segundoGrauMse.state)}/>
                            <TouchableOpacity style={[styles.Cell, {backgroundColor: context.terceiroGrauMse.state == 1 ? "green" : "white"}]} onPress={() => context.terceiroGrauMse.setState(!context.terceiroGrauMse.state)}/>
                        </View>


                    </View>
                    <ReturnButton/>
                    <Footer/>
                </View>
            </ScrollView>
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




