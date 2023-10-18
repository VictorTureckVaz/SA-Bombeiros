import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';

export default function MainSinaisVitais(){
    
    const navigation = useNavigation();

    const [presMax, setPresMax] = useState(0);
    const [presMin, setPresMin] = useState(0);
    const [pulso, setPulso] = useState(0);
    const [resp, setResp] = useState(0);
    const [sat, setSat] = useState(null);

    
    

    return(
        <View style={styles.Body}>
            <Header/>
            <ScrollView>
            
                <View style={styles.Container}>
                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Pressão Arterial: </Text>
                         <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={presMax} onPress={ () => setPresMax() }/>
                         <Text style={styles.Text}> X </Text>
                         <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={presMin} onPress={ () => setPresMin() }/>
                         <Text style={styles.Text}> mmHg </Text>
                    </View>

                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Pulso:               </Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                         <Text style={styles.Text}> B.C.P.M. </Text>
                    </View>
                    
                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Respiração:     </Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                         <Text style={styles.Text}>  M.R.M. </Text>
                    </View>

                    <View style={styles.BorderContainer}>
                         <Text style={styles.Text}>Saturação:       </Text>
                         <TextInput style={styles.TextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                         <Text style={styles.Text}>           % </Text>
                    </View>

                    <View style={styles.TempHGTContainer}>
                         <View style={styles.ReducedBorderContainer}>
                              <Text style={styles.Text}>Temperatura:   </Text>
                              <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                              <Text style={styles.Text}> ºC </Text>
                         </View>
                         
                         <View style={styles.MiniBorderContainer}>
                              <Text style={styles.Text}>HGT:   </Text>
                              <TextInput style={styles.MiniTextInput} keyboardType='number-pad' value={pulso} onPress={ () => setPulso() }/>
                         </View>
                    </View>


                    <TouchableOpacity style={styles.UsingMenu}>
                        <Text style={styles.Text}>Perfusão</Text>
                        <View style={styles.UsingMenuIconContainer}>
                            <Image
                            style={styles.UsingMenuIcon}
                            source={require('../../../../assets/downArrow.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.BorderContainer}>
                         
                    </View>
               
                    
                    
                </View>
                
                
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity 
                    style={styles.Button} 
                    onPress={ () => navigation.navigate('ocorrencia') }
                    >
                        <Image
                        style={styles.Icon}
                        source={require('../../../../assets/previous.png')}
                        />
                        <Text style={styles.ButtonText}>VOLTAR AOS INDICADORES DE ETAPA</Text>
                    </TouchableOpacity>
                </View>
                
                <Footer/>
            </ScrollView>
        </View>
    )
}
