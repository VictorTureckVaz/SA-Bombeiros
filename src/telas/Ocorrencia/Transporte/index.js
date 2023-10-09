import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';


export default function MainTransporte(){
    
    return(
        <View style={styles.Container}>
            <View style={styles.ToggleButtonContainer}>
               <Text>Decisão de Transporte:</Text>
               
               <TouchableOpacity style={styles.ToggleButton}>
                    <Image
                    style={styles.ToggleButtonIcon}
                    source={require('../../../../assets/happy.png')}
                    />
                    <Text style={styles.ToggleButtonText}>Estável</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.ToggleButton} backgroundColor="red">
                    <Image
                    style={styles.ToggleButtonIcon}
                    source={require('../../../../assets/happy.png')}
                    />
                    <Text style={styles.ToggleButtonText}>Estável</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.ToggleButton}>
                    <Image
                    style={styles.ToggleButtonIcon}
                    source={require('../../../../assets/happy.png')}
                    />
                    <Text style={styles.ToggleButtonText}>Estável</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.ToggleButton}>
                    <Image
                    style={styles.ToggleButtonIcon}
                    source={require('../../../../assets/happy.png')}
                    />
                    <Text style={styles.ToggleButtonText}>Estável</Text>
               </TouchableOpacity>
                
            
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
