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


export default function MainTipoOc() {
  const navigation = useNavigation();
  const [groupValues, setGroupValues] = React.useState([]);

  return (
    <View style={styles.Body}>
      <Header />
      <ScrollView>
        <View style={styles.Container}>


          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}
