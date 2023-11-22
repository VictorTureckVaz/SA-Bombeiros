import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
     OcStep: {
          backgroundColor: '#313131',
          width: "100%",
          height: 54,
          borderRadius: 12.5,
          justifyContent: 'center',
          padding: 10,
     },

     Body: {
          gap: 27,
          height: "100%",
     },
     
     OcStepText: {
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 20,
     },

     StepContainer: {
          flex: 1,
          gap: 10,
          alignItems: 'center',
     },

     Container: {
          gap: 23,
          padding: 27,
     },

     Popup: {
          borderRadius: 10,
          width: 310,
          height: "fit-content",
          backgroundColor: "white",
          paddingBottom: 5,
          gap: 2,
     },

     PopupContainer: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
     },

     ModalButton: {
          width: 140,
          height: 57,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
     },


  });

  export default styles;