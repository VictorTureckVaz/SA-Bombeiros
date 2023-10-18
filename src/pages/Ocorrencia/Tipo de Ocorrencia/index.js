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
              label: 'Causado por animais',
              value: 'Causado por animais',
          },
          {
              id: '2',
              label: 'Com Meio de Transporte',
              value: 'Com Meio de Transporte',
          },
          {
              id: '3',
              label: 'Desmoronamento',
              value: 'Desmoronamento',
          },
          {
              id: '4',
              label: 'Emergência Médica',
              value: 'Emergência Médica',
          },
          {
              id: '5',
              label: 'Queda de Altura 2M',
              value: 'Queda de Altura 2M',
          },
          {
              id: '6',
              label: 'Tentativa de Suícido',
              value: 'Tentativa de Suícido',
          },
          {
              id: '7',
              label: 'Queda Própria Altura',
              value: 'Queda Própria Altura',
          },
          {
              id: '8',
              label: 'Afogamento',
              value: 'Afogamento',
          },
          {
              id: '9',
              label: 'Agressão',
              value: 'Agressão',
          },
          {
              id: '10',
              label: 'Atropelamento',
              value: 'Atropelamento',
          },
          {
              id: '11',
              label: 'Choque Elétrico',
              value: 'Choque Elétrico',
          },
          {
              id: '12',
              label: 'Desabamento',
              value: 'Desabamento',
          },
          {
              id: '13',
              label: 'Doméstico',
              value: 'Doméstico',
          },
          {
              id: '14',
              label: 'Esportivo',
              value: 'Esportivo',
          },
          {
              id: '15',
              label: 'Intoxicação',
              value: 'Intoxicação',
          },
          {
               id: '16',
               label: 'Queda de Bicicleta',
               value: 'Queda de Bicicleta',
           },
           {
               id: '17',
               label: 'Queda de Moto',
               value: 'Queda de Moto',
           },
           {
               id: '18',
               label: 'Queda de Nível 2M',
               value: 'Queda de Nível 2M',
           },
           {
               id: '19',
               label: 'Trabalho',
               value: 'Trabalho',
           },
           {
               id: '20',
               label: 'Queda de Nível < 2M',
               value: 'Queda de Nível < 2M',
           },
           {
               id: '21',
               label: 'Transferência',
               value: 'Transferência',
           },
           {
               id: '22',
               label: 'Esportivo',
               value: 'Esportivo',
           },
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
                    
               <View style={styles.Butaons}>
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
