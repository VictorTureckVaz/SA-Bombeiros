import React, {useMemo, useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RadioGroup  } from 'react-native-radio-buttons-group';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from './../../Header';
import Footer from './../../Footer';


export default function MainTipoOc(){

     const navigation = useNavigation();

     const radioButtons = useMemo(() => ([
          {
              id: '1', // acts as primary key, should be unique and non-empty string
              label: 'Option 1',
              value: 'option1'
          },
          {
              id: '2',
              label: 'Option 2',
              value: 'option2'
          }
      ]), []);
  
     const [selectedId, setSelectedId] = useState();

     return(
          <View style={styles.Container}>
               <Header/>
               <View style={styles.FilterContainer}>
               <TouchableOpacity style={styles.FilterButton}>
                    <Text style={styles.FilterButtonText}>FILTRAR PESQUISA</Text>
               </TouchableOpacity>
                         
               </View>
                    
               <View>
               <RadioGroup 
                    radioButtons={radioButtons} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
               />
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
     );

};
