import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function RadioButton({
     options,
     selectedOption,
     setSelectedOption,
 }) {

 
     return (     
          <View style={{gap: 5, width: "100%", height: "fit-content"}}> 
               {options.map((option, i) => (
               <TouchableOpacity key={`${i} ${option.optionName}`} style={styles.OptionContainer} onPress={ () => setSelectedOption(option.optionValue)}>
                    <View 
                    style={[
                         styles.CheckBox, 
                         {backgroundColor: selectedOption == option.optionValue 
                         ? "#16A34A" 
                         : "transparent",
                         borderColor: selectedOption == option.optionValue 
                         ? "#16A34A" 
                         : "#A3A3A3",
                         alignItems: "center",
                         justifyContent: "center",
                         }]}>
                              <Image
                              style={[styles.Icon, {
                                   display: selectedOption == option.optionValue 
                                   ? "flex" 
                                   : "none",
                              }]}
                              source={require('../../../assets/check.png')}
                              />
                    </View>
                    <Text style={styles.Text}>{option.optionName}</Text>
               </TouchableOpacity>
            ))}
               

          </View>
     );
 }