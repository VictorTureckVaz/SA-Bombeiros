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
import { extendTheme, Checkbox } from "native-base";
import ReturnButton from '../../../components/ReturnButton';


export default function MainCinematicaObjetos() {
  const navigation = useNavigation();
  const [OR, setOR] = useState(null);
  const [groupValues, setGroupValues] = React.useState([]);

  return (
    <View style={styles.Body}>
      <Header />
      <ScrollView>
        <View style={styles.Container}>
          <View>
            <TextInput
              placeholder="Objetos Recolhidos..."
              keyboardType="default"
              style={styles.TextInput}
              value={OR}
              onChangeText={setOR}
            />
          </View>
          <Checkbox.Group onChange={setGroupValues} border="black" colorScheme="green" size="md" value={groupValues} accessibilityLabel="choose numbers">
            <Checkbox value="DistúrbioComportamento" my={1}>
              Distúrbio de Comportamento
            </Checkbox>
            <Checkbox value="EncontradoCapacete " my={1}> 
              Encontrado de Capacete 
            </Checkbox>
            <Checkbox value="EncontradoCinto " my={1}> 
              Encontrado de Cinto 
            </Checkbox>
            <Checkbox value="ParaBrisasAvariado" my={1}> 
              Para-Brisas Avariado
            </Checkbox>
            <Checkbox value="CaminhandoCena" my={1}> 
              Caminhando na Cena
            </Checkbox>
            <Checkbox value="PainelAvariado" my={1}> 
              Painel Avariado
            </Checkbox>
            <Checkbox value="VolanteTorcido" my={1}> 
              Volante Torcido
            </Checkbox>
          </Checkbox.Group>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}
