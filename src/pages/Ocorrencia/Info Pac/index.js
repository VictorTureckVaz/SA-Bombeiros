import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';


export default function MainInfoPac(){
    
    const [nomePac, setNomePac] = useState(null);
    const [nomeHosp, setNomeHosp] = useState(null);
    const [docPac, setDocPac] = useState(null);
    const [idadePac, setIdadePac] = useState(null);
    const [telefonePac, setTelefonePac] = useState(null);
    const [local, setLocal] = useState(null);
    const [acompanhante, setAcompanhante] = useState(null);
    const [idadeAcom, setIdadeAcom] = useState(null);
    const [vitimaEra, setVitimaEra] = useState(null);

    function usingMenu(){
        
    }

    return(
        <View style={styles.Container}>
            <View>
                <TextInput placeholder = 'Nome do Paciente' keyboardType = 'default' style={styles.TextInput} onChangeText={setNomePac}/>
            </View>
            <View>
                <TextInput placeholder = 'Nome do Hospital' keyboardType = 'default' style={styles.TextInput} onChangeText={setNomeHosp}/>
            </View>
            <View>
                <TextInput placeholder = 'RG/CPF do Paciente' keyboardType = 'number-pad' style={styles.TextInput} onChangeText={setDocPac}/>
            </View>
            <View>
                <TextInput placeholder = 'Idade do Paciente' keyboardType = 'number-pad' style={styles.TextInput} onChangeText={setIdadePac}/>
            </View>
            <View>
                <TextInput placeholder = 'Telefone do Paciente' keyboardType = 'number-pad' style={styles.TextInput} onChangeText={setTelefonePac}/>
            </View>
            <View>
                <TextInput placeholder = 'Local de Ocorrência' keyboardType = 'default' style={styles.TextInput} onChangeText={setLocal}/>
            </View>
            <View>
                <TextInput placeholder = 'Acompanhante' keyboardType = 'default' style={styles.TextInput} onChangeText={setAcompanhante}/>
            </View>
            <View>
                <TextInput placeholder = 'Idade do Acompanhante' keyboardType = 'number-pad' style={styles.TextInput} onChangeText={setIdadeAcom}/>
            </View>
            <View>
                <TouchableOpacity style={styles.UsingMenu}>
                    <Text style={styles.Text}>Vítima Era</Text>
                </TouchableOpacity>
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
