import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container: {
      gap: 23,
      padding: 27,
      height: "100%",
    },

    Body: {
      gap: 44,
      height: "100%",
    },

    TextInput: {
        fontSize: 20,
        height: 56,
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
      },

    Text: {
      color: "gray",
      fontSize: 20,
    },

    CheckBox: {
      width: 25,
      height: 25,
      borderColor: "#A3A3A3",
      borderWidth: 2,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    },

});

export default styles;