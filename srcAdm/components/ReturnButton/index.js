import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function ReturnButton() {

     const navigation = useNavigation();

     return (     
          <View style={styles.ButtonContainer}>
               <TouchableOpacity style={styles.Button} onPress={ () => navigation.navigate('ocorrencia') }>
                    <Image
                    style={styles.Icon}
                    source={require('../../../assets/BackArrowArrow.png')}
                    />
                    <Text style={styles.ButtonText}>VOLTAR AOS INDICADORES DE ETAPA</Text>
               </TouchableOpacity>
          </View>
     );
 }