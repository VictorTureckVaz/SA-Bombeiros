import React, { useState, useMemo, useContext, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Header from "./../../Header";
import Footer from "./../../Footer";
import ReturnButton from "../../../components/ReturnButton";
import RadioButton from "../../../components/RadioButton";
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";

export default function MainTipoOc() {
  const navigation = useNavigation();
  const [groupValues, setGroupValues] = React.useState([]);
  const context = useContext(OcorrenciaContext)
 
//   function setOutro() {
//       context.tipoOc.setState(context.outroTipoOc.state)
//   }
    useEffect(() => {
        if(context.outroTipoOc.state !== null){
            context.tipoOc.setState(context.outroTipoOc.state);
            console.log(context.outroTipoOc.state)
            console.log(context.tipoOc.state)
        }
        // if(context.tipoOc.state == context.outroTipoOc.state && context.tipoOc.state !== null){
        //     context.outroTipoOc.setState(null)
        // }
    })

    useEffect(() => {
        if(context.outroTipoOc.state == context.tipoOc.state){
            console.log("eh igual")
        }else{
            console.log("eh diferente")
        }
        // if(context.tipoOc.state == context.outroTipoOc.state && context.tipoOc.state !== null){
        //     context.outroTipoOc.setState(null)
        // }
    })
    

  return (
    <View style={styles.Body}>
      <Header />
      <ScrollView>
        <View style={styles.Container}>
              <RadioButton
                options={[
                    {
                        optionName: "Causado por Animais",
                        optionValue: "Causado Por Animais",
                    },
                    {
                        optionName: "Com Meio de Transporte",
                        optionValue: "Com Meio De Transporte"
                    },
                    {
                        optionName: "Desmoronamento",
                        optionValue: "Desmoronamento"
                    },
                    {
                        optionName: "Emergência Médica ",
                        optionValue: "Emergencia Médica "
                    },
                    {
                        optionName: "Queda de Altura 2M",
                        optionValue: "Queda De Altura 2M"
                    },
                    {
                        optionName: "Tentativa de Suícido",
                        optionValue: "Tentativa De Suicido"
                    },
                    {
                        optionName: "Queda Própria Altura ",
                        optionValue: "Queda Propria Altura "
                    },
                    {
                        optionName: "Afogamento",
                        optionValue: "Afogamento"
                    },
                    {
                        optionName: "Agressão",
                        optionValue: "Agressao"
                    },
                    {
                        optionName: "Atropelamento",
                        optionValue: "Atropelamento"
                    },
                    {
                        optionName: "Choque Elétrico",
                        optionValue: "Choque Eletrico"
                    },
                    {
                        optionName: "Desabamento",
                        optionValue: "Desabamento"
                    },
                    {
                        optionName: "Doméstico",
                        optionValue: "Domestico"
                    },
                    {
                        optionName: "Esportivo",
                        optionValue: "Esportivo"
                    },
                    {
                        optionName: "Intoxicação",
                        optionValue: "Intoxicacaoo"
                    },
                    {
                        optionName: "Queda de Bicicleta",
                        optionValue: "Queda De Bicicleta"
                    },
                    {
                        optionName: "Queda de Moto",
                        optionValue: "Queda De Moto"
                    },
                    {
                        optionName: "Queda de Nível 2M ",
                        optionValue: "Queda De Nivel 2M"
                    },
                    {
                        optionName: "Queda de Nível Menor que 2M",
                        optionValue: "Queda De Nivel Menor Que 2M"
                    },
                    {
                        optionName: "Trabalho",
                        optionValue: "Trabalho"
                    },
                    {
                        optionName: "Transferência",
                        optionValue: "Transferencia"
                    },

                ]}
                selectedOption={context.tipoOc.state}
                setSelectedOption={context.tipoOc.setState}
              />
              <TextInput placeholder = 'Outros...' keyboardType = 'default' style={styles.TextInput} value={context.outroTipoOc.state} onChangeText={context.outroTipoOc.setState}/>
              <ReturnButton/>
                    <Footer/>
                </View>
            </ScrollView>
        </View>
  );
}
















