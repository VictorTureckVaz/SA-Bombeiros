import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
     Footer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'flex-end',
         width: '100%',
         padding: 17,
         height: "fit-content",
     },

     FooterSection: {
        gap: 5,
        alignItems: 'center',
        height: "fit-content",
     },

     Icon: {
        width: 32,
        height: 30,
     },

     Profile: {
      width: 38,
      height: 38,
   },

 })

 export default styles;