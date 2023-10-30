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
import { extendTheme, Checkbox} from "native-base";

export default function MainTipoOc() {
  const navigation = useNavigation();
  const [groupValues, setGroupValues] = React.useState([]);

  return (
    <View style={styles.Body}>
      <Header />
      <ScrollView>
        <View style={styles.Container}>
          <Checkbox.Group onChange={setGroupValues} border="black" colorScheme="green" size="md" value={groupValues} accessibilityLabel="choose numbers">
              <Checkbox value="CausadoAnimais">
                Causado por Animais
              </Checkbox>
              <Checkbox value="ComMeioTransporte">
                Com Meio de Transporte
              </Checkbox>
              <Checkbox value="Desmoronamento">
                Desmoronamento
              </Checkbox>
              <Checkbox value="EmergenciaMedica">
                Emergência Médica
              </Checkbox>
              <Checkbox value="QuedaAltura2M">
                Queda de Altura 2M
              </Checkbox>
              <Checkbox value="TentativaSuecido">
                Tentativa de Suícido
              </Checkbox>
              <Checkbox value="QuedaPropriaAltura">
                Queda Própria Altura
              </Checkbox>
              <Checkbox value="Afogamento">
                Afogamento
              </Checkbox>
              <Checkbox value="Agressão">
                Agressão
              </Checkbox>
              <Checkbox value="Atropelamento">
                Atropelamento
              </Checkbox>
              <Checkbox value="ChoqueEletrico">
                Choque Elétrico
              </Checkbox>
              <Checkbox value="Desabamento">
                Desabamento
              </Checkbox>
              <Checkbox value="Domestico">
                Doméstico
              </Checkbox>
              <Checkbox value="Esportivo">
                Esportivo
              </Checkbox>
              <Checkbox value="Intoxicacao">
                Intoxicação
              </Checkbox>
              <Checkbox value="QuedaBicicleta">
                Queda de Bicicleta
              </Checkbox>
              <Checkbox value="QuedaMoto">
                Queda de Moto
              </Checkbox>
              <Checkbox value="QuedaNivel2M">
                Queda de Nível 2M
              </Checkbox>
              <Checkbox value="QuedaNivelMenor2M">
                Queda de Nível Menor que 2M
              </Checkbox>
              <Checkbox value="Trabalho" >
                Trabalho
              </Checkbox>
              <Checkbox value="Transferencia">
                Transferência
              </Checkbox>
              <Checkbox value="Outros">
                Outros
              </Checkbox>
          </Checkbox.Group>
          <Footer/>
        </View>
      </ScrollView>
    </View>
  );
}
