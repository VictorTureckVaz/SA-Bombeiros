import React, { useState, useContext } from 'react';
import { CheckBox } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Header from "./../../Header";
import Footer from "././../../Footer";
import { extendTheme } from "native-base";
import ReturnButton from './../../../components/ReturnButton';
// "./../../../../server/SavedReports/testes.json";
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";


export default function MainSinaisSintomas() {

    const [groupValues, setGroupValues] = useState([]);

    const context = useContext(OcorrenciaContext);

    // app.use(express.json());

    // // Rota para receber os dados do aplicativo
    // app.post('/api/inserir-dados', (req, res) => {
    //     const { data } = req.body;

    //   // Execute a consulta SQL para inserir os dados na tabela do banco de dados
    //     const query = 'INSERT INTO sua_tabela (campo1, campo2, campo3) VALUES (?, ?, ?, ...)';

    //     connection.query(query, [AbdomenSensivelRigido, AfundamentoCranio, Agitacao, AnginaPeito, Apneia, Bradicardia, Bradipneia, BroncoAspirando, Cefaleia, Convulsao, Decorticacao, Deformidade, Descerebracao, Desmaio, DesvioTraqueia, Dispneia, DorLocal, EnfisemaSubcutaneo ], (error, results) => {
    //     if (error) {
    //         console.error('Erro ao inserir dados no banco de dados: ' + error);
    //         res.status(500).send('Erro interno do servidor');
    //     } else {
    //         console.log('Dados inseridos com sucesso');
    //         res.status(140).send('Dados inseridos com sucesso');
    //     }
    //     });
    // });

    // app.listen(port, () => {
    //     console.log(`Servidor em execução na porta ${port}`);
    // });



    return (
     <View style={styles.Body}>
        <Header/>
        <ScrollView>
            <View style={styles.Container}>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.abdomen.setState(!context.abdomen.state) } value={context.abdomen.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.abdomen.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Abdômen Sensível ou Rígido</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.afundamento.setState(!context.afundamento.state) } value={context.afundamento.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.afundamento.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Afundamento de Crânio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.agitacao.setState(!context.agitacao.state) } value={context.agitacao.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.agitacao.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Agitação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.amnesia.setState(!context.amnesia.state) } value={context.amnesia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.amnesia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Amnésia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.anginaPeito.setState(!context.anginaPeito.state) } value={context.anginaPeito.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.anginaPeito.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Angina de Peito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.apneia.setState(!context.apneia.state) } value={context.apneia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.apneia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Apneia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.bradicardia.setState(!context.bradicardia.state) } value={context.bradicardia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.bradicardia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Bradicardia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.bradipneia.setState(!context.bradipneia.state) } value={context.bradipneia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.bradipneia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Bradipnéia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.broncoAspirando.setState(!context.broncoAspirando.state) } value={context.broncoAspirando.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.broncoAspirando.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Bronco-Aspirando</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.cefaleia.setState(!context.cefaleia.state) } value={context.cefaleia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.cefaleia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Cefaléia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.convulsao.setState(!context.convulsao.state) } value={context.convulsao.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.convulsao.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Convulsão</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.decorticacao.setState(!context.decorticacao.state) } value={context.decorticacao.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.decorticacao.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Decorticação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.deformidade.setState(!context.deformidade.state) } value={context.deformidade.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.deformidade.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Deformidade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.descerebracao.setState(!context.descerebracao.state) } value={context.descerebracao.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.descerebracao.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Descerebração</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.desmaio.setState(!context.desmaio.state) } value={context.desmaio.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.desmaio.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Desmaio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.desvioTraqueia.setState(!context.desvioTraqueia.state) } value={context.desvioTraqueia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.desvioTraqueia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Desvio de Traquéia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.dispneia.setState(!context.dispneia.state) } value={context.dispneia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.dispneia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Dispnéia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.dorLocal.setState(!context.dorLocal.state) } value={context.dorLocal.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.dorLocal.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Dor Local</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.enfisemaSubcutaneo.setState(!context.enfisemaSubcutaneo.state) } value={context.enfisemaSubcutaneo.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.enfisemaSubcutaneo.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Enfisema Subcutâneo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.extaseJugular.setState(!context.extaseJugular.state) } value={context.extaseJugular.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.extaseJugular.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Êxtase de Jugular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.facePalida.setState(!context.facePalida.state) } value={context.facePalida.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.facePalida.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Face Pálida</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.hemorragiaInterna.setState(!context.hemorragiaInterna.state) } value={context.hemorragiaInterna.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.hemorragiaInterna.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Hemorragia Interna</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.hemorragiaExterna.setState(!context.hemorragiaExterna.state) } value={context.hemorragiaExterna.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.hemorragiaExterna.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Hemorragia Externa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.hipertensao.setState(!context.hipertensao.state) } value={context.hipertensao.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.hipertensao.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Hipertensão</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.nauseasVomito.setState(!context.nauseasVomito.state) } value={context.nauseasVomito.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.nauseasVomito.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Náuseas e Vômito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.nasoragia.setState(!context.nasoragia.state) } value={context.nasoragia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.nasoragia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Nasoragia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.obito.setState(!context.obito.state) } value={context.obito.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.obito.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Óbito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.otorreia.setState(!context.otorreia.state) } value={context.otorreia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.otorreia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Otorréia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.ovace.setState(!context.ovace.state) } value={context.ovace.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.ovace.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>O.V.A.C.E</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.paradaCardiaca.setState(!context.paradaCardiaca.state) } value={context.paradaCardiaca.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.paradaCardiaca.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Parada Cardíaca</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.paradaRespiratoria.setState(!context.paradaRespiratoria.state) } value={context.paradaRespiratoria.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.paradaRespiratoria.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Parada Respiratória</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.priapismo.setState(!context.priapismo.state) } value={context.priapismo.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.priapismo.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Priapismo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.pruridoPele.setState(!context.pruridoPele.state) } value={context.pruridoPele.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.pruridoPele.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Prurido na Pele</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.pupilasAnisocori.setState(!context.pupilasAnisocori.state) } value={context.pupilasAnisocori.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.pupilasAnisocori.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Pupilas - Anisocoria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.pupilasIsocoria.setState(!context.pupilasIsocoria.state) } value={context.pupilasIsocoria.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.pupilasIsocoria.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Pupilas - Isocoria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.pupilasMidriase.setState(!context.pupilasMidriase.state) } value={context.pupilasMidriase.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.pupilasMidriase.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Pupilas - Midriase</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.pupilasMiose.setState(!context.pupilasMiose.state) } value={context.pupilasMiose.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.pupilasMiose.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Pupilas - Miose</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.pupilasReagente.setState(!context.pupilasReagente.state) } value={context.pupilasReagente.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.pupilasReagente.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Pupilas - Reagente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.pupilasNaoReagente.setState(!context.pupilasNaoReagente.state) } value={context.pupilasNaoReagente.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.pupilasNaoReagente.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Pupilas - Não Reagente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.sinalBattle.setState(!context.sinalBattle.state) } value={context.sinalBattle.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.sinalBattle.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Sinal de Battle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.sinalGuaxinim.setState(!context.sinalGuaxinim.state) } value={context.sinalGuaxinim.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.sinalGuaxinim.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Sinal de Guaxinim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.sudorese.setState(!context.sudorese.state) } value={context.sudorese.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.sudorese.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Sudorese</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.taquipneia.setState(!context.taquipneia.state) } value={context.taquipneia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.taquipneia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Taquipnéia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.taquicardia.setState(!context.taquicardia.state) } value={context.taquicardia.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.taquicardia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Taquicardia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.tontura.setState(!context.tontura.state) } value={context.tontura.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.tontura.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Tontura</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.outroSintoma.setState(!context.outroSintoma.state) } value={context.outroSintoma.state}>
                    <View style={[styles.CheckBox, {backgroundColor: context.outroSintoma.state == true ? "#16A34A" : "#FFFFFF"}]}>
                        <Image
                         style={{width: 14, height: 14, }}
                         source={require('../../../../assets/check.png')}
                         />
                    </View>
                    <Text style={styles.Text}>Outro</Text>
                </TouchableOpacity>
            </View>

            <ReturnButton/>
            <Footer/>
        </ScrollView>
     </View>

    );
}