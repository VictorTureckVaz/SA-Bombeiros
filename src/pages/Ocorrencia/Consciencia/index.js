import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';
import ReturnButton from '../../../components/ReturnButton';


export default function MainConsciencia(){

    const navigation = useNavigation();

    const [consciencia, setConsciencia] = useState(0);
    const [check, setCheck] = useState(null);
    const [socorristaB, setSocorristaB] = useState(null);
    const [socorristaC, setSocorristaC] = useState(null);
    const [demandante, setDemandante] = useState(null);

    function select(){
        setCheck(check + 1); 
        setConsciencia(consciencia + value);
    }

    
    return(
        <View style={styles.Container}>
            <Header/>
            <View style={styles.ResultContainer}>
               <Text>Total (GCS): {consciencia}</Text>
            </View>

            <TouchableOpacity style={styles.UsingMenu} onPress={ () => select()}>
                <View style={[styles.CheckBox, {backgroundColor}]}></View>
                <Text style={styles.Text}>Forma de Condução</Text>
            </TouchableOpacity>

            
            
            
            <ReturnButton/>
            

        </View>
    )
}
