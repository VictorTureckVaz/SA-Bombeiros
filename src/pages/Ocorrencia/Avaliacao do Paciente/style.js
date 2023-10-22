import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      TextInput: {
        fontSize: 20,
        height: 56,
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
      },

      ToggleButtonContainer: {
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          borderColor: "#555555",
          width: "100%",
          height: 800,
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          height: "100%",
      },

      Body: {
        gap: 27,
        height: "100%",
      },

      CheckBox: {
        width: 25,
        height: 25,
        borderColor: "#555555",
        borderWidth: 2,
        borderRadius: 2,
      },

      OptionContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
      },

      Container: {
        gap: 23,
        padding: 27,
        height: "100%",
      },

      ButtonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#313131",
        width: 222,
      },
      
      ButtonContainer: {
        flex: 1,
        alignItems: "flex-end",
      },
      
      Icon: {
        width: 32,
        height: 32,
      },

      Button: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      },

      ResultContainer: {
        fontSize: 20,
        height: 56,
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
      },

      Text: {
        fontSize: 20,
      },

  });

  export default styles;