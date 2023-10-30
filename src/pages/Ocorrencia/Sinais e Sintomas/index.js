import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Header from "./../../Header";
import Footer from "././../../Footer";
import { extendTheme, Checkbox } from "native-base";
import ReturnButton from './../../../components/ReturnButton';
// "./../../../../server/SavedReports/testes.json";

export default function MainSinaisSintomas() {

    const navigation = useNavigation();
    const [groupValues, setGroupValues] = React.useState([]);
    const [AbdomenSensivelRigido] = useState(null);
    const [AfundamentoCranio] = useState(null);
    const [Agitacao] = useState(null);
    const [Amnesia] = useState(null);
    const [AnginaPeito] = useState(null);
    const [Apneia] = useState(null);
    const [Bradicardia] = useState(null);
    const [Bradipneia] = useState(null);
    const [BroncoAspirando] = useState(null);
    const [Cefaleia] = useState(null);
    const [Convulsao] = useState(null);
    const [Decorticacao] = useState(null);
    const [Deformidade] = useState(null);
    const [Desmaio] = useState(null);
    const [Dispneia] = useState(null);
    const [DorLocal] = useState(null);
    const [EnfisemaSubcutaneo] = useState(null);
    const [ExtaseJugular] = useState(null);
    const [DesvioTraqueia] = useState(null);
    const [Descerebracao] = useState(null);
    const [FacePalida] = useState(null);
    const [HemorragiaInterna] = useState(null);
    const [HemorragiaExterna] = useState(null);
    const [ParadaRespiratoria] = useState(null);
    const [Hipertensao] = useState(null);
    const [NauseasVomito] = useState(null);
    const [Nasoragia] = useState(null);
    const [Obito] = useState(null);
    const [Otorreia] = useState(null);
    const [OVACE] = useState(null);
    const [ParadaCardiaca] = useState(null);
    const [Priapismo] = useState(null);
    const [PruridoPele] = useState(null);
    const [PupilasAnisocoria] = useState(null);
    const [PupilasIsocoria] = useState(null);
    const [PupilasMidriade] = useState(null);
    const [PupilasMiose] = useState(null);
    const [PupilasReagente] = useState(null);
    const [PupilasNaoReagente] = useState(null);
    const [SinalBattle] = useState(null);
    const [SinalGuaxinim] = useState(null);
    const [Sudorese] = useState(null);
    const [Taquipneia] = useState(null);
    const [Taquicardia] = useState(null);
    const [Tontura] = useState(null);
    const [Outros] = useState(null);

    return (
     <View style={styles.Body}>
        <Header/>
        <ScrollView>
            <View style={styles.Container}>
                <Checkbox.Group onChange={setGroupValues} border="black" colorScheme="green" size="md" value={groupValues} accessibilityLabel="choose numbers">
                    <Checkbox value={AbdomenSensivelRigido}>
                        Abdômen Sensível ou Rígido
                    </Checkbox>
                    <Checkbox value={AfundamentoCranio}> 
                        Afundamento de Crânio
                    </Checkbox>
                    <Checkbox value={Agitacao}>
                        Agitação
                    </Checkbox>
                    <Checkbox value={Amnesia}> 
                        Amnésia
                    </Checkbox>
                    <Checkbox value={AnginaPeito}>
                        Angina de Peito
                    </Checkbox>
                    <Checkbox value={Apneia}> 
                        Apneia
                    </Checkbox>
                    <Checkbox value={Bradicardia}>
                        Bradicardia
                    </Checkbox>
                    <Checkbox value={Bradipneia} >
                        Bradipnéia
                    </Checkbox>
                    <Checkbox value={BroncoAspirando} > 
                        Bronco-Aspirando
                    </Checkbox>
                    <Checkbox value={Cefaleia} >
                        Cefaléia
                    </Checkbox>
                    <Checkbox value={Convulsao} > 
                        Convulsão
                    </Checkbox>
                    <Checkbox value={Decorticacao} > 
                        Decorticação
                    </Checkbox>
                    <Checkbox value={Deformidade} > 
                        Deformidade
                    </Checkbox>
                    <Checkbox value={Descerebracao} > 
                        Descerebração
                    </Checkbox>
                    <Checkbox value={Desmaio} > 
                        Desmaio
                    </Checkbox>
                    <Checkbox value={DesvioTraqueia} > 
                        Desvio de Traquéia
                    </Checkbox>
                    <Checkbox value={Dispneia} > 
                        Dispnéia
                    </Checkbox>
                    <Checkbox value={DorLocal} > 
                        Dor Local
                    </Checkbox>
                    <Checkbox value={EnfisemaSubcutaneo} > 
                        Enfisema Subcutâneo
                    </Checkbox>
                    <Checkbox value={ExtaseJugular} > 
                        Êxtase de Jugular
                    </Checkbox>
                    <Checkbox value={FacePalida} > 
                        Face Pálida
                    </Checkbox>
                    <Checkbox value={HemorragiaInterna} > 
                        Hemorragia Interna
                    </Checkbox>
                    <Checkbox value={HemorragiaExterna} > 
                        Hemorragia Externa
                    </Checkbox>
                    <Checkbox value={Hipertensao} > 
                        Hipertensão
                    </Checkbox>
                    <Checkbox value={NauseasVomito} > 
                        Náuseas e Vômito
                    </Checkbox>
                    <Checkbox value={Nasoragia} > 
                        Nasoragia
                    </Checkbox>
                    <Checkbox value={Obito} > 
                        Óbito
                    </Checkbox>
                    <Checkbox value={Otorreia} > 
                        Otorréia
                    </Checkbox>
                    <Checkbox value={OVACE} > 
                        O.V.A.C.E
                    </Checkbox>
                    <Checkbox value={ParadaCardiaca} > 
                        Parada Cardíaca
                    </Checkbox>
                    <Checkbox value={ParadaRespiratoria} > 
                        Parada Respiratória
                    </Checkbox>
                    <Checkbox value={Priapismo} > 
                        Priapismo
                    </Checkbox>
                    <Checkbox value={PruridoPele} >
                        Prurido na Pele
                    </Checkbox>
                    <Checkbox value={PupilasAnisocoria} >
                        Pupilas - Anisocoria
                    </Checkbox>
                    <Checkbox value={PupilasIsocoria} >
                        Pupilas - Isocoria
                    </Checkbox>
                    <Checkbox value={PupilasMidriade} > 
                        Pupilas - Midriade
                    </Checkbox>
                    <Checkbox value={PupilasMiose} >
                        Pupilas - Miose
                    </Checkbox>
                    <Checkbox value={PupilasReagente} > 
                        Pupilas - Reagente
                    </Checkbox>
                    <Checkbox value={PupilasNaoReagente} > 
                        Pupilas - Não Reagente
                    </Checkbox>
                    <Checkbox value={SinalBattle} >
                        Sinal de Battle
                    </Checkbox>
                    <Checkbox value={SinalGuaxinim} > 
                        Sinal de Guaxinim
                    </Checkbox>
                    <Checkbox value={Sudorese} > 
                        Sudorese
                    </Checkbox>
                    <Checkbox value={Taquipneia} > 
                        Taquipnéia
                    </Checkbox>
                    <Checkbox value={Taquicardia} > 
                        Taquicardia
                    </Checkbox>
                    <Checkbox value={Tontura} > 
                        Tontura
                    </Checkbox>
                    <Checkbox value={Outros} > 
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