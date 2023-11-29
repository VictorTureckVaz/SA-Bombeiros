import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import { RadioGroup } from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";
import Header from "./../../Header";
import Footer from "./../../Footer";
import { extendTheme, Checkbox } from "native-base";
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";


export default function MainCinematicaObjetos() {

  const context = useContext(OcorrenciaContext)
  
  const navigation = useNavigation();
  const [or, setOr] = useState(null);
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
              value={context.ObjetoRecolhido.state} onChangeText={context.ObjetoRecolhido.setState}
            />
          </View>
          <View style={styles.Container}>
              <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.DisturbioComportamento.setState(!context.DisturbioComportamento.state) } value={context.DisturbioComportamento.state}>
                <View style={[styles.CheckBox, {backgroundColor: context.DisturbioComportamento.state == true ? "#16A34A" : "#FFFFFF"}]}>
                    <Image
                      style={{width: 14, height: 14, }}
                      source={require('../../../../assets/check.png')}
                      />
                </View>
                <Text style={styles.Text}>Distúrbio de Comportamento</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.EncontradoCapacete.setState(!context.EncontradoCapacete.state) } value={context.EncontradoCapacete.state}>
                <View style={[styles.CheckBox, {backgroundColor: context.EncontradoCapacete.state == true ? "#16A34A" : "#FFFFFF"}]}>
                    <Image
                      style={{width: 14, height: 14, }}
                      source={require('../../../../assets/check.png')}
                      />
                </View>
                <Text style={styles.Text}>Encontrado de Capacete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.EncontradoCinto.setState(!context.EncontradoCinto.state) } value={context.EncontradoCinto.state}>
                <View style={[styles.CheckBox, {backgroundColor: context.EncontradoCinto.state == true ? "#16A34A" : "#FFFFFF"}]}>
                    <Image
                      style={{width: 14, height: 14, }}
                      source={require('../../../../assets/check.png')}
                      />
                </View>
                <Text style={styles.Text}>Encontrado de Cinto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.ParaBrisasAvariado.setState(!context.ParaBrisasAvariado.state) } value={context.ParaBrisasAvariado.state}>
                <View style={[styles.CheckBox, {backgroundColor: context.ParaBrisasAvariado.state == true ? "#16A34A" : "#FFFFFF"}]}>
                    <Image
                      style={{width: 14, height: 14, }}
                      source={require('../../../../assets/check.png')}
                      />
                </View>
                <Text style={styles.Text}>Para-Brisas Avariado</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.CaminhandoCena.setState(!context.CaminhandoCena.state) } value={context.CaminhandoCena.state}>
                <View style={[styles.CheckBox, {backgroundColor: context.CaminhandoCena.state == true ? "#16A34A" : "#FFFFFF"}]}>
                    <Image
                      style={{width: 14, height: 14, }}
                      source={require('../../../../assets/check.png')}
                      />
                </View>
                <Text style={styles.Text}>Caminhando na Cena</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.PainelAvariado.setState(!context.PainelAvariado.state) } value={context.PainelAvariado.state}>
                <View style={[styles.CheckBox, {backgroundColor: context.PainelAvariado.state == true ? "#16A34A" : "#FFFFFF"}]}>
                    <Image
                      style={{width: 14, height: 14, }}
                      source={require('../../../../assets/check.png')}
                      />
                </View>
                <Text style={styles.Text}>Painel Avariado</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.VolanteTorcido.setState(!context.VolanteTorcido.state) } value={context.VolanteTorcido.state}>
                <View style={[styles.CheckBox, {backgroundColor: context.VolanteTorcido.state == true ? "#16A34A" : "#FFFFFF"}]}>
                    <Image
                      style={{width: 14, height: 14, }}
                      source={require('../../../../assets/check.png')}
                      />
                </View>
                <Text style={styles.Text}>Volante Torcido</Text>
              </TouchableOpacity>
          </View>

          <ReturnButton/>
          <Footer/>
        </View>
      </ScrollView>
    </View>
  );
}
