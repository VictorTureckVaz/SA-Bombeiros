import React, { useState, useMemo } from "react";
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
import { extendTheme, NativeBaseProvider, Radio } from "native-base";


export default function MainCinematicaObjetos() {
  const navigation = useNavigation();
  const [OR, setOR] = useState(null);
  const [value, setValue] = React.useState("one");

  return (
    <View style={styles.Body}>
      <Header />
      <ScrollView>
        <View style={styles.Container}>
            
          <View>
            <TextInput
              placeholder="Objetos Recolhidos"
              keyboardType="default"
              style={styles.TextInput}
              value={OR}
              onChangeText={setOR}
            />
          </View>
          <NativeBaseProvider>
            <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
                setValue(nextValue);
            }}
            >
            <Radio value="DisturbioComportamento" my={1}>
                Distúrbio de Comportamento
            </Radio>
            <Radio value="EncontradoCapacete" my={1}>
                Encontrado de Capacete 
            </Radio>
            <Radio value="EncontradoCinto" my={1}>
                Encontrado de Cinto
            </Radio>
            <Radio value="ParaBrisasAvariado" my={1}>
                Para-Brisas Avariado
            </Radio>
            <Radio value="CaminhandoCena" my={1}>
                Caminhando na Cena
            </Radio>
            <Radio value="PainelAvariado" my={1}>
                Painel Avariado
            </Radio>
            <Radio value="VolanteTorcido" my={1}>
                Volante Torcido
            </Radio>
            </Radio.Group>
          </NativeBaseProvider>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}
