import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { OcorrenciaContext } from '../../context/ocorrenciaContext';

export default function Footer(){

    const navigation = useNavigation();

    const context = useContext(OcorrenciaContext);

    

    function homePress(){
        context.children = null;
        navigation.navigate('home');
    }

    return(
        <View style={styles.Footer}>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => homePress()}>
                <Image source={require("../../../assets/VectorHouse.png")} style={styles.Icon}/>
               <Text>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => navigation.navigate('ocorrencia')}>
            <Image source={require("../../../assets/GroupDocs.png")} style={styles.Icon} />
               <Text>Ocorrência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FooterSection} onPress={ () => navigation.navigate('profile')}>
                <Image source={require("../../../assets/historic.png")} style={styles.Icon}/>
               <Text>Histórico</Text>
            </TouchableOpacity>
        </View>
    );

};