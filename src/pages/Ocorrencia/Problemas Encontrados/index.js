import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';

export default function MainProblemasEncontrados(){
    
    const navigation = useNavigation();

    const [psico, setPsico] = useState(0);
    const [resp, setResp] = useState(0);
    const [diabetes, setDiabetes] = useState(0);
    const [outros, setOutros] = useState(null);

    
    

    return(
        <View style={styles.Body}>
            <ScrollView>
            <Header/>
            
                <View style={styles.Container}>
                    <TouchableOpacity style={[styles.Checkbox, { backgroundColor: psico ? 'green' : 'transparent', }]} onPress={ () => setPsico((psico + 1)%2) }>
                        <Text style={[styles.Text, { color: psico ? 'white' : 'gray', }]}>Psiquiátrico</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.Checkbox, {backgroundColor: resp ? 'green' : 'transparent', }]} onPress={ () => setResp((resp + 1)%2) }>
                        <Text style={[styles.Text, { color: resp ? 'white' : 'gray', }]}>Respiratório</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={[styles.Checkbox, { backgroundColor: diabetes ? 'green' : 'transparent', }]} value={diabetes} onPress={ () => setDiabetes((diabetes + 1)%2) }>
                        <Text style={[styles.Text, { color: diabetes ? 'white' : 'gray', }]}>Diabetes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.UsingMenu}>
                        <Text style={styles.Text}>Obstétrico</Text>
                        <View style={styles.UsingMenuIconContainer}>
                            <Image
                            style={styles.UsingMenuIcon}
                            source={require('../../../../assets/downArrow.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.UsingMenu}>
                        <Text style={styles.Text}>Transporte</Text>
                        <View style={styles.UsingMenuIconContainer}>
                            <Image
                            style={styles.UsingMenuIcon}
                            source={require('../../../../assets/downArrow.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    
                    <TextInput placeholder = 'Outros...' keyboardType = 'default' style={[styles.TextInput, { backgroundColor: outros ? 'green' : '', color: outros ? 'white' : '', }]} value={outros} onChangeText={setOutros}/>
                    
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
