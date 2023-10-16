import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import Header from './../../Header';
import Footer from './../../Footer';


export default function MainConsciencia(){

    const navigation = useNavigation();
    
    return(
        <View style={styles.Container}>
            <Header/>
            <View style={styles.ResultContainer}>
               <Text>Total (GCS):</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.UsingMenu}>
                    <Text style={styles.Text}>Forma de Condução</Text>
                </TouchableOpacity>
            </View>
            
            <View>
                <TextInput placeholder = 'Motorista' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Socorrista #1' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Socorrista #2' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Socorrista #3' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Demandante' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button} onPress={ () => navigation.navigate('ocorrencia') }>
                    <Image
                    style={styles.Icon}
                    source={require('../../../../assets/previous.png')}
                    />
                    <Text style={styles.ButtonText}>VOLTAR AOS INDICADORES DE ETAPA</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}
