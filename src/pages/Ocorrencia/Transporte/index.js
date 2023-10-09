import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons/faFaceFrownOpen'

export default function MainTransporte(){
    
    return(
        <View style={styles.Container}>
            <View>
               <Text>Decisão de Transporte:</Text>
               <View style={styles.ToggleButtonContainer}>
                    <TouchableOpacity style={styles.GreenToggleButton}>
                        
                        <Image
                        style={styles.ToggleButtonIcon}
                        source={require('../../../../assets/happy.png')}
                        />
                        <Text style={styles.GreenToggleButtonText}>Estável</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.OrangeToggleButton}>
                        <FontAwesomeIcon icon={faFaceFrownOpen} size={68} style={{color: "#e74428",}} />
                        <Text style={styles.OrangeToggleButtonText}>Instável</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.YellowToggleButton}>
                        <View>
                            <Image
                            style={styles.ToggleButtonIcon}
                            source={require('../../../../assets/happy.png')}
                            />
                        </View>
                        <View>
                            <Text style={styles.YellowToggleButtonText}>Potencialmente Instável</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.RedToggleButton}>
                        <Image
                        style={styles.ToggleButtonIcon}
                        source={require('../../../../assets/happy.png')}
                        />
                        <Text style={styles.RedToggleButtonText}>Crítico</Text>
                    </TouchableOpacity>
                        
               </View>
               
            
            </View>
            <View>
                <TouchableOpacity style={styles.UsingMenu}>
                    <Text style={styles.Text}>Forma de Condução</Text>
                    <View style={styles.UsingMenuIconContainer}>
                        <Image
                        style={styles.UsingMenuIcon}
                        source={require('../../../../assets/downArrow.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.Text}>Equipe de Atendimento</Text>
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
