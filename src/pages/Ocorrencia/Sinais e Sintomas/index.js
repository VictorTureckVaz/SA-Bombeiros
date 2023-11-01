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

    const [groupValues, setGroupValues] = useState("null")


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
    //         res.status(200).send('Dados inseridos com sucesso');
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
                <Checkbox.Group onChange={setGroupValues} border="black" colorScheme="green" size="md" value={groupValues} accessibilityLabel="choose numbers">
                    <Checkbox value="AbdomenSensivelRigido">
                        Abdômen Sensível ou Rígido
                    </Checkbox>
                    <Checkbox value="AfundamentoCranio"> 
                        Afundamento de Crânio
                    </Checkbox>
                    <Checkbox value="Agitacao">
                        Agitação
                    </Checkbox>
                    <Checkbox value="Amnesia"> 
                        Amnésia
                    </Checkbox>
                    <Checkbox value="AnginaPeito">
                        Angina de Peito
                    </Checkbox>
                    <Checkbox value="Apneia"> 
                        Apneia
                    </Checkbox>
                    <Checkbox value="Bradicardia">
                        Bradicardia
                    </Checkbox>
                    <Checkbox value="Bradipneia" >
                        Bradipnéia
                    </Checkbox>
                    <Checkbox value="BroncoAspirando" > 
                        Bronco-Aspirando
                    </Checkbox>
                    <Checkbox value="Cefaleia" >
                        Cefaléia
                    </Checkbox>
                    <Checkbox value="Convulsao" > 
                        Convulsão
                    </Checkbox>
                    <Checkbox value="Decorticacao" > 
                        Decorticação
                    </Checkbox>
                    <Checkbox value="Deformidade" > 
                        Deformidade
                    </Checkbox>
                    <Checkbox value="Descerebracao" > 
                        Descerebração
                    </Checkbox>
                    <Checkbox value="Desmaio" > 
                        Desmaio
                    </Checkbox>
                    <Checkbox value="DesvioTraqueia" > 
                        Desvio de Traquéia
                    </Checkbox>
                    <Checkbox value="Dispneia" > 
                        Dispnéia
                    </Checkbox>
                    <Checkbox value="DorLocal" >
                        Dor Local
                    </Checkbox>
                    <Checkbox value="EnfisemaSubcutaneo" > 
                        Enfisema Subcutâneo
                    </Checkbox>
                    <Checkbox value="ExtaseJugular" > 
                        Êxtase de Jugular
                    </Checkbox>
                    <Checkbox value="FacePalida" > 
                        Face Pálida
                    </Checkbox>
                    <Checkbox value="HemorragiaInterna" > 
                        Hemorragia Interna
                    </Checkbox>
                    <Checkbox value="HemorragiaExterna" > 
                        Hemorragia Externa
                    </Checkbox>
                    <Checkbox value="Hipertensao" > 
                        Hipertensão
                    </Checkbox>
                    <Checkbox value="NauseasVomito" > 
                        Náuseas e Vômito
                    </Checkbox>
                    <Checkbox value="Nasoragia" > 
                        Nasoragia
                    </Checkbox>
                    <Checkbox value="Obito" > 
                        Óbito
                    </Checkbox>
                    <Checkbox value="Otorreia" > 
                        Otorréia
                    </Checkbox>
                    <Checkbox value="OVACE" > 
                        O.V.A.C.E
                    </Checkbox>
                    <Checkbox value="ParadaCardiaca" > 
                        Parada Cardíaca
                    </Checkbox>
                    <Checkbox value="ParadaRespiratoria" > 
                        Parada Respiratória
                    </Checkbox>
                    <Checkbox value="Priapismo" > 
                        Priapismo
                    </Checkbox>
                    <Checkbox value="PruridoPele" >
                        Prurido na Pele
                    </Checkbox>
                    <Checkbox value="PupilasAnisocoria" >
                        Pupilas - Anisocoria
                    </Checkbox>
                    <Checkbox value="PupilasIsocoria" >
                        Pupilas - Isocoria
                    </Checkbox>
                    <Checkbox value="PupilasMidriade" > 
                        Pupilas - Midriade
                    </Checkbox>
                    <Checkbox value="PupilasMiose" >
                        Pupilas - Miose
                    </Checkbox>
                    <Checkbox value="PupilasReagente" > 
                        Pupilas - Reagente
                    </Checkbox>
                    <Checkbox value="PupilasNaoReagente" > 
                        Pupilas - Não Reagente
                    </Checkbox>
                    <Checkbox value="SinalBattle" >
                        Sinal de Battle
                    </Checkbox>
                    <Checkbox value="SinalGuaxinim" > 
                        Sinal de Guaxinim
                    </Checkbox>
                    <Checkbox value="Sudorese" > 
                        Sudorese
                    </Checkbox>
                    <Checkbox value="Taquipneia" > 
                        Taquipnéia
                    </Checkbox>
                    <Checkbox value="Taquicardia" > 
                        Taquicardia
                    </Checkbox>
                    <Checkbox value="Tontura" > 
                        Tontura
                    </Checkbox>
                    <Checkbox value="Outros" > 
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