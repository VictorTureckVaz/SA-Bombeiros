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
import { RadioGroup } from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";
import Header from "./../../Header";
import Footer from "./../../Footer";
import { extendTheme, Checkbox } from "native-base";
import RadioButton from "../../../components/RadioButton";
import ReturnButton from '../../../components/ReturnButton';

import { OcorrenciaContext } from "../../../context/ocorrenciaContext";


export default function MainTipoOc() {
  const navigation = useNavigation();

  const { tipoOc, setTipoOc } = useContext(OcorrenciaContext);

  return (
    <View style={styles.Body}>
      <Header />
      <ScrollView>
        <View style={styles.Container}>
          

          <RadioButton
          options={[
            {
              optionName: "Causado por Animais",
              optionValue: "CausadoAnimais"
            },
            {
              optionName: "Com Meio de Transporte",
              optionValue: "ComMeioTransporte"
            },
            {
              optionName: "Desmoronamento",
              optionValue: "Desmoronamento"
            },
            {
              optionName: "Emergência Médica",
              optionValue: "EmergenciaMedica"
            },
            {
              optionName: "Queda de Altura 2M",
              optionValue: "QuedaAltura2M"
            },
            {
              optionName: "Tentativa de Suícido",
              optionValue: "TentativaSuicido"
            },
            {
              optionName: "Queda Própria Altura",
              optionValue: "QuedaPropriaAltura"
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
              optionValue: "Intoxicacao"
            },
            {
              optionName: "Queda de Bicicleta",
              optionValue: "QuedaBicicleta"
            },
            {
              optionName: "Queda de Moto",
              optionValue: "QuedaMoto"
            },
            {
              optionName: "Queda de Nível 2M",
              optionValue: "QuedaNivel2m"
            },
            {
              optionName: "Trabalho",
              optionValue: "Trabalho"
            },
            {
              optionName: "Queda de Nível < 2M",
              optionValue: "QuedaNivelMenor2m"
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
          selectedOption={tipoOc}
          setSelectedOption={setTipoOc}
          />
          <ReturnButton/>
          <Footer/>
        </View>
      </ScrollView>
    </View>
  );
}
