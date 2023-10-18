import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';


export default function MainConsciencia(){

    const navigation = useNavigation();

    const [motorista, setMotorista] = useState(null);
    const [socorristaA, setSocorristaA] = useState(null);
    const [socorristaB, setSocorristaB] = useState(null);
    const [socorristaC, setSocorristaC] = useState(null);
    const [demandante, setDemandante] = useState(null);
    
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
                <TextInput placeholder = 'Motorista' keyboardType = 'default' value='motorista' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Socorrista #1' keyboardType = 'default'  value='socorristaA' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Socorrista #2' keyboardType = 'default'  value='socorristaB' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Socorrista #3' keyboardType = 'default'  value='socorristaC' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Demandante' keyboardType = 'default'  value='demandante' style={styles.TextInput}/>
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
