import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Header from "./../../Header";
import Footer from "././../../Footer";
import { extendTheme, Checkbox } from "native-base";
import ReturnButton from './../../../components/ReturnButton';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";

export default function MainProcedimentosEfetuados (){

    const navigation = useNavigation();


    const context = useContext(OcorrenciaContext);


    return(
        <View style={styles.Body}>
        <Header/>
        <ScrollView>
            <View style={styles.Container}>
                <View style={{gap: 5}}>

                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Aspiracao.setState(!context.Aspiracao.state) } value={context.Aspiracao.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Aspiracao.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Aspiração</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.AvalInicial.setState(!context.AvalInicial.state) } value={context.AvalInicial.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.AvalInicial.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Avaliação Inicial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.AvalDirigida.setState(!context.AvalDirigida.state) } value={context.AvalDirigida.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.AvalDirigida.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Avaliação Dirigida</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.AvalContinuada.setState(!context.AvalContinuada.state) } value={context.AvalContinuada.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.AvalContinuada.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Avaliação Continuada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.ChaveRautek.setState(!context.ChaveRautek.state) } value={context.ChaveRautek.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.ChaveRautek.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Chave Rautek</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.CanulaGuedel.setState(!context.CanulaGuedel.state) } value={context.CanulaGuedel.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.CanulaGuedel.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Cânula de Guedel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.DesobstrucaoVA.setState(!context.DesobstrucaoVA.state) } value={context.DesobstrucaoVA.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.DesobstrucaoVA.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Desobstrução de VA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.EmpregoDEA.setState(!context.EmpregoDEA.state) } value={context.EmpregoDEA.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.EmpregoDEA.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Emprego do DEA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.GerenciamentoRiscos.setState(!context.GerenciamentoRiscos.state) } value={context.GerenciamentoRiscos.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.GerenciamentoRiscos.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Gerenciamento de Riscos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.LimpezaFerimento.setState(!context.LimpezaFerimento.state) } value={context.LimpezaFerimento.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.LimpezaFerimento.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Limpeza de Ferimento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Curativos.setState(!context.Curativos.state) } value={context.Curativos.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Curativos.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Curativos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Compressivo.setState(!context.Compressivo.state) } value={context.Compressivo.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Compressivo.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Compressivo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Encravamento.setState(!context.Encravamento.state) } value={context.Encravamento.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Encravamento.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Encravamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Ocular.setState(!context.Ocular.state) } value={context.Ocular.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Ocular.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Ocular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Queimadura.setState(!context.Queimadura.state) } value={context.Queimadura.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Queimadura.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Queimadura</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Simples.setState(!context.Simples.state) } value={context.Simples.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Simples.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Simples</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.TresPontas.setState(!context.TresPontas.state) } value={context.TresPontas.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.TresPontas.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>3 Pontas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Imobilizacoes.setState(!context.Imobilizacoes.state) } value={context.Imobilizacoes.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Imobilizacoes.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Imobilizações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.MacaRodas.setState(!context.MacaRodas.state) } value={context.MacaRodas.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.MacaRodas.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Maca Sobre Rodas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.MacaRigida.setState(!context.MacaRigida.state) } value={context.MacaRigida.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.MacaRigida.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Maca Rígida</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Ponte.setState(!context.Ponte.state) } value={context.Ponte.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Ponte.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Ponte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.RetiradoCapacete.setState(!context.RetiradoCapacete.state) } value={context.RetiradoCapacete.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.RetiradoCapacete.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Retirado Capacete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Rcp.setState(!context.Rcp.state) } value={context.Rcp.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Rcp.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>R.C.P</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Rolamento90.setState(!context.Rolamento90.state) } value={context.Rolamento90.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Rolamento90.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Rolamento 90°</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Rolamento180.setState(!context.Rolamento180.state) } value={context.Rolamento180.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Rolamento180.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Rolamento 180°</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.TomadaDecisao.setState(!context.TomadaDecisao.state) } value={context.TomadaDecisao.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.TomadaDecisao.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Tomada de Decisão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.TratadoChoque.setState(!context.TratadoChoque.state) } value={context.TratadoChoque.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.TratadoChoque.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Tratado Choque</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.UsoCanula.setState(!context.UsoCanula.state) } value={context.UsoCanula.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.UsoCanula.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Uso de Cânula </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.UsoColar.setState(!context.UsoColar.state) } value={context.UsoColar.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.UsoColar.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Uso Colar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.UsoKED.setState(!context.UsoKED.state) } value={context.UsoKED.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.UsoKED.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Uso KED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.UsoTTF.setState(!context.UsoTTF.state) } value={context.UsoTTF.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.UsoTTF.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Uso TTF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.VentSuporte.setState(!context.VentSuporte.state) } value={context.VentSuporte.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.VentSuporte.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Ventilação Suporte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Oxigenoterapia.setState(!context.Oxigenoterapia.state) } value={context.Oxigenoterapia.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Oxigenoterapia.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Oxigenoterapia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.Reanimador.setState(!context.Reanimador.state) } value={context.Reanimador.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Reanimador.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Reanimador</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.policiaMilitar.setState(!context.Meios.state) } value={context.Meios.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Meios.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Policia Militar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.policiaCivil.setState(!context.Auxiliares.state) } value={context.Auxiliares.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Auxiliares.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Policia Civil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.policiaPRE.setState(!context.Meios.state) } value={context.Meios.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Meios.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Policia PRE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.policiaPRF.setState(!context.Auxiliares.state) } value={context.Auxiliares.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Auxiliares.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Policia PRF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.samuUsa.setState(!context.Meios.state) } value={context.Meios.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Meios.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Samu Usa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.samuUsb.setState(!context.Auxiliares.state) } value={context.Auxiliares.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Auxiliares.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Samu Usb</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.celesc.setState(!context.Meios.state) } value={context.Meios.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Meios.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>CELESC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.defesaCivil.setState(!context.Auxiliares.state) } value={context.Auxiliares.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Auxiliares.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Defesa Civil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.igp.setState(!context.Auxiliares.state) } value={context.Auxiliares.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Auxiliares.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>IGP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={ () => context.cit.setState(!context.Auxiliares.state) } value={context.Auxiliares.state}>
                        <View style={[styles.CheckBox, {backgroundColor: context.Auxiliares.state == true ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14, }}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>CIT</Text>
                    </TouchableOpacity>


                    <TextInput
                    placeholder="Outros Procedimento..."
                    keyboardType="default"
                    style={styles.TextInput}
                    value={context.OutrosProcedimentos.state} onChangeText={context.OutrosProcedimentos.setState}
                    />
                </View>
                <ReturnButton/>
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    );
}