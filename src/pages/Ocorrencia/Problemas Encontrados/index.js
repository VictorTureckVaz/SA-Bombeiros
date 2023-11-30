import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import ReturnButton from '../../../components/ReturnButton';
import { OcorrenciaContext } from "../../../context/ocorrenciaContext";
import SelectList from '../../../components/SelectList';

export default function MainProblemasEncontrados(){
    
    const navigation = useNavigation();
    const context = useContext(OcorrenciaContext);

    const [usingMenu, setUsingMenu] = useState(0);
    const [usingMenuB, setUsingMenuB] = useState(0);
    
    

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
            {/* //C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Administrative Tools */}
                <View style={styles.Container}>
                    

                    
                    <View style={styles.UsingMenu}>
                        <TouchableOpacity style={styles.UsingMenuTitle} onPress={ () => setUsingMenu(!usingMenu)}>
                            <Text style={styles.Text}>Obstétrico</Text>
                            <View style={styles.UsingMenuIconContainer}>
                                <Image
                                    style={[
                                        styles.UsingMenuIcon,
                                        {
                                            transform: usingMenu
                                                ? [{ rotate: "180deg" }]
                                                : [{ rotate: "0deg" }]
                                        }
                                    ]}
                                    source={require('../../../../assets/downArrow.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{display: usingMenu ? "flex" : "none"}}>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.partoEmergencial.setState(!context.partoEmergencial.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.partoEmergencial.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    />
                                </View>
                                <Text style={styles.Text}>Parto Emergencial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.problemaGestante.setState(!context.problemaGestante.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.problemaGestante.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    />
                                </View>
                                <Text style={styles.Text}>Gestante</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.hemorragiaExcessiva.setState(!context.hemorragiaExcessiva.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.hemorragiaExcessiva.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    />
                                </View>
                                <Text style={styles.Text}>Parto Emergencial</Text>
                            </TouchableOpacity>

                        </View>
                    </View>




                    <View style={styles.UsingMenu}>
                        <TouchableOpacity style={styles.UsingMenuTitle} onPress={ () => setUsingMenuB(!usingMenuB)}>
                            <Text style={styles.Text}>Transporte</Text>
                            <View style={styles.UsingMenuIconContainer}>
                                <Image
                                    style={[
                                        styles.UsingMenuIcon,
                                        {
                                            transform: usingMenu
                                                ? [{ rotate: "180deg" }]
                                                : [{ rotate: "0deg" }]
                                        }
                                    ]}
                                    source={require('../../../../assets/downArrow.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{display: usingMenuB ? "flex" : "none"}}>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.aereo.setState(!context.aereo.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.aereo.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    onPress={() => context.aereo.setState(!context.aereo.state)}
                                    />
                                </View>
                                <Text style={styles.Text}>Aéreo</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.clinico.setState(!context.clinico.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.clinico.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    onPress={() => context.clinico.setState(!context.clinico.state)}
                                    />
                                </View>
                                <Text style={styles.Text}>Clínico</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.emergencial.setState(!context.emergencial.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.emergencial.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    onPress={() => context.emergencial.setState(!context.emergencial.state)}
                                    />
                                </View>
                                <Text style={styles.Text}>Emergencial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.posTrauma.setState(!context.posTrauma.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.posTrauma.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    onPress={() => context.posTrauma.setState(!context.posTrauma.state)}
                                    />
                                </View>
                                <Text style={styles.Text}>Pós-Trauma</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.samu.setState(!context.samu.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.samu.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    onPress={() => context.samu.setState(!context.samu.state)}
                                    />
                                </View>
                                <Text style={styles.Text}>SAMU</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.outrosProblemaTransporte.setState(!context.outrosProblemaTransporte.state)}>
                                <View style={[styles.CheckBox, {backgroundColor: context.outrosProblemaTransporte.state ? "#16A34A" : "#FFFFFF"}]}>
                                    <Image
                                    style={{width: 14, height: 14,}}
                                    source={require('../../../../assets/check.png')}
                                    onPress={() => context.outrosProblemaTransporte.setState(!context.outrosProblemaTransporte.state)}
                                    />
                                </View>
                                <Text style={styles.Text}>Sem Remoção</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                    <TextInput placeholder = 'Outros...' keyboardType = 'default' style={styles.TextInput} value={context.outrosProblemas.state} onChangeText={context.outrosProblemas.setState}/>
                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.psico.setState(!context.psico.state)}>
                        <View style={[styles.CheckBox, {backgroundColor: context.psico.state ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14,}}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Psiquiátrico</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.resp.setState(!context.resp.state)}>
                        <View style={[styles.CheckBox, {backgroundColor: context.resp.state ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14,}}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Respiratório</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{flexDirection: "row", gap: 5}} onPress={() => context.diabetes.setState(!context.diabetes.state)}>
                        <View style={[styles.CheckBox, {backgroundColor: context.diabetes.state ? "#16A34A" : "#FFFFFF"}]}>
                            <Image
                            style={{width: 14, height: 14,}}
                            source={require('../../../../assets/check.png')}
                            />
                        </View>
                        <Text style={styles.Text}>Diabetes</Text>
                    </TouchableOpacity>
                
                
                    <ReturnButton/>
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    )
}
