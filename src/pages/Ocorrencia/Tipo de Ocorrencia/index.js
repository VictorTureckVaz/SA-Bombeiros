import React, { useState, useMemo, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
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
 

  return (
    <View style={styles.Body}>
      <Header />
      <ScrollView>
        <View style={styles.Container}>
              <RadioButton
                options={[
                    {
                        optionName: "Causado por Animais",
                        optionValue: "CausadoPorAnimais",
                    },
                    {
                        optionName: "Com Meio de Transporte",
                        optionValue: "ComMeioDeTransporte"
                    },
                    {
                        optionName: "Desmoronamento",
                        optionValue: "Desmoronamento"
                    },
                    {
                        optionName: "Emergência Médica ",
                        optionValue: "EmergênciaMédica "
                    },
                    {
                        optionName: "Queda de Altura 2M",
                        optionValue: "QuedaDeAltura2M"
                    },
                    {
                        optionName: "Tentativa de Suícido",
                        optionValue: "TentativaDeSuicido"
                    },
                    {
                        optionName: "Queda Própria Altura ",
                        optionValue: "QuedaPropriaAltura "
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
                        optionValue: "ChoqueEletrico"
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
                        optionValue: "QuedaDeBicicleta"
                    },
                    {
                        optionName: "Queda de Moto",
                        optionValue: "QuedaDeMoto"
                    },
                    {
                        optionName: "Queda de Nível 2M ",
                        optionValue: "QuedaDeNivel2M"
                    },
                    {
                        optionName: "Queda de Nível Menor que 2M",
                        optionValue: "QuedaDeNivelMenorQue2M"
                    },
                    {
                        optionName: "Trabalho",
                        optionValue: "Trabalho"
                    },
                    {
                        optionName: "Transferência",
                        optionValue: "Transferencia"
                    },
                    {
                        optionName: "Outros",
                        optionValue: "Outros"
                    },
                ]}
                selectedOption={context.tipoOc.state}
                setSelectedOption={context.tipoOc.setState}
              />
          <ReturnButton/>
          <Footer/>
        </View>
      </ScrollView>
    </View>
  );
}
















