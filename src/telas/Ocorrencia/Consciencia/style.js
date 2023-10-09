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

      ToggleButton: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 42,
          width: 166,
          height: 146,
          backgroundColor: "#D2EBCE",
          borderRadius: 10,
      },

      ToggleButtonIcon: {
          height: 69,
          width: 69,
      },

      ToggleButtonText: {
          color: "#4AAE39",
          fontSize: 17,
      },

      UsingMenu: {
        flex: 1,
        justifyContent: "center",
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
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

      SecondSection: {
        gap: 12,
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

  });

  export default styles;