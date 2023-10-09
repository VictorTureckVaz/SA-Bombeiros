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
          gap: 10,
          flexGrow: 1,
      },

      GreenToggleButton: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 42,
          width: 166,
          height: 146,
          minWidth: "45%",
          backgroundColor: "#D2EBCE",
          borderRadius: 10,
      },

      YellowToggleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 42,
        width: 166,
        height: 146,
        minWidth: "45%",
        backgroundColor: "#F9EDCB",
        borderRadius: 10,
    },

      OrangeToggleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 42,
        width: 166,
        height: 146,
        minWidth: "45%",
        backgroundColor: "#FBE6CD",
        borderRadius: 10,
    },

      RedToggleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 42,
        width: 166,
        height: 146,
        minWidth: "45%",
        backgroundColor: "#F9D0C9",
        borderRadius: 10,
    },

      ToggleButtonIcon: {
          height: 69,
          width: 69,
      },

      GreenToggleButtonText: {
          color: "#4AAE39",
          flex: 1,
          fontSize: 17,
          textAlign: "center",
      },

      YellowToggleButtonText: {
          color: "#C59203",
          flex: 1,
          fontSize: 17,
          textAlign: "center",
      },

      OrangeToggleButtonText: {
          color: "#D97600",
          flex: 1,
          fontSize: 17,
          textAlign: "center",
      },

      RedToggleButtonText: {
          color: "#E74428",
          flex: 1,
          fontSize: 17,
          textAlign: "center",
      },

      UsingMenu: {
        flex: 1,
        justifyContent: "center",
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
      },

      UsingMenuIcon: {
        width: 36,
        height: 36,
      },

      UsingMenuIconContainer: {
        flex: 1,
        alignItems: "flex-end",
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

      Text: {
        fontSize: 20,
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

  });

  export default styles;