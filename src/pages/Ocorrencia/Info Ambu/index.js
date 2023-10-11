import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';


export default function MainInfoAmb(){
    const [numUsb, setNumUsb] = useState(null);
    const [numOc, setNumOc] = useState(null);
    const [despachante, setDespachante] = useState(null);
    const [kmFinal, setKmFinal] = useState(null);
    const [codSia, setCodSia] = useState(null);
    const [codIr, setCodIr] = useState(null);
    const [codPs, setCodPs] = useState(null);

    return(
        <View style={styles.Container}>
            <View>
                <TextInput placeholder = 'Número USB' keyboardType = 'number-pad' style={styles.TextInput} onChangeText={setNomePac}/>
            </View>
            <View>
                <TextInput placeholder = 'Número da Ocorrência' keyboardType = 'number-pad' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'Despachante' keyboardType = 'default' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'KM Final' keyboardType = 'number-pad' style={styles.TextInput}/>
            </View>
            <View>
                <TextInput placeholder = 'COD SIA/SUS' keyboardType = 'number-pad' style={styles.TextInput}/>
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button}>
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
