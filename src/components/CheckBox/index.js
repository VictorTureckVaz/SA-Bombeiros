import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function CheckBox({
     options,
     selectedOption,
     setSelectedOption,
 }) {

 
     return (     
          <View style={{gap: 5, width: "100%"}}> 
          {options.map((option, i) => (
               <TouchableOpacity key={`${i} ${option.optionName}`} style={styles.OptionContainer} onPress={ () => setSelectedOption(option.optionValue)}>
                    <View 
                    style={[
                         styles.CheckBox, 
                         {backgroundColor: selectedOption == option.optionValue 
                         ? "green" 
                         : "white"
                         }]}>
                    </View>
                    <Text style={styles.Text}>{option.optionName}</Text>
               </TouchableOpacity>
            ))}

                    <TouchableOpacity style={[styles.CheckBox, { backgroundColor: psico ? 'green' : 'transparent', }]} onPress={ () => setPsico((psico + 1)%2) }>
                        <Text style={[styles.Text, { color: psico ? 'white' : 'gray', }]}>Psiquiátrico</Text>
                    </TouchableOpacity>
               

          </View>
     );
 }