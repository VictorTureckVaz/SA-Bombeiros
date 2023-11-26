import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Header from "./../../Header";
import Footer from "././../../Footer";
import { extendTheme, Checkbox } from "native-base";
import ReturnButton from './../../../components/ReturnButton';

export default function MainProcedimentosEfetuados (){

    const navigation = useNavigation();

    const [groupValues, setGroupValues] = useState([])

    return(
        <View style={styles.Body}>
        <Header/>
        <ScrollView>
            <View style={styles.Container}>
                <Checkbox.Group onChange={setGroupValues} border="black" colorScheme="green" size="md" value={groupValues} accessibilityLabel="choose numbers">
                    <Checkbox value="Aspiracao">
                        Aspiração
                    </Checkbox>
                    <Checkbox value="AvaliacaoInicial">
                        Avaliação Inicial
                    </Checkbox>
                    <Checkbox value="AvaliacaoDirigida">
                        Avaliação Dirigida
                    </Checkbox>
                    <Checkbox value="AvaliacaoContinuada">
                        Avaliação Continuada
                    </Checkbox>
                    <Checkbox value="ChaveRutek">
                        Chave Rautek
                    </Checkbox>
                    <Checkbox value="CanulaGuedel">
                        Cânula de Guedel
                    </Checkbox>
                    <Checkbox value="DesobstrucaoVA">
                        Desobstrução de VA
                    </Checkbox>
                    <Checkbox value="EmpregoDEA">
                        Emprego do DEA
                    </Checkbox>
                    <Checkbox value="GerenciamentoRiscos">
                        Gerenciamento de Riscos
                    </Checkbox>
                    <Checkbox value="LimpezaFerimento">
                        Limpeza de Ferimento
                    </Checkbox>
                    <Checkbox value="Curativos">
                        Curativos
                    </Checkbox>
                    <Checkbox value="Compressivo">
                        Compressivo
                    </Checkbox>
                    <Checkbox value="Encravamento">
                        Encravamento
                    </Checkbox>
                    <Checkbox value="Ocular">
                        Ocular
                    </Checkbox>
                    <Checkbox value="Queimadura">
                        Queimadura
                    </Checkbox>
                    <Checkbox value="Simples">
                        Simples 
                    </Checkbox>
                    <Checkbox value="3Pontas">
                        3 Pontas 
                    </Checkbox>
                    <Checkbox value="Imobilizacoes">
                        Imobilizações
                    </Checkbox>
                    <Checkbox value="MacaSobreRodas">
                        Maca Sobre Rodas
                    </Checkbox>
                    <Checkbox value="MacaRigida">
                        Maca Rígida
                    </Checkbox>
                    <Checkbox value="Ponte">
                        Ponte
                    </Checkbox>
                    <Checkbox value="RetiradoCapacete">
                        Retirado Capacete
                    </Checkbox>
                    <Checkbox value="RCP">
                        R.C.P.
                    </Checkbox>
                    <Checkbox value="Rolamento90">
                        Rolamento 90°
                    </Checkbox>
                    <Checkbox value="Rolamento180">
                        Rolamento 180°
                    </Checkbox>
                    <Checkbox value="TomadaDecisao">
                        Tomada de Decisão
                    </Checkbox>
                    <Checkbox value="TratadoChoque">
                        Tratado Choque
                    </Checkbox>
                    <Checkbox value="UsoCanula">
                        Uso de Cânula
                    </Checkbox>
                    <Checkbox value="UsoColar">
                        Uso Colar
                    </Checkbox>
                    <Checkbox value="UsoKED">
                        Uso KED
                    </Checkbox>
                    <Checkbox value="UsoTTF">
                        Uso TTF
                    </Checkbox>
                    <Checkbox value="VentilacaoSuporte">
                        Ventilação Suporte
                    </Checkbox>
                    <Checkbox value="Oxigenoterapia ">
                        Oxigenoterapia 
                    </Checkbox>
                    <Checkbox value="Reanimador">
                        Reanimador
                    </Checkbox>
                    <Checkbox value="MeiosAuxiliares">
                        Meios Auxiliares
                    </Checkbox>
                    <Checkbox value="Outros">
                        Outros
                    </Checkbox>
                </Checkbox.Group>
            </View>
            <ReturnButton/>
            <Footer/>
        </ScrollView>
     </View>
    );
}