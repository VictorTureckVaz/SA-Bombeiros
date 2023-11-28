import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      TextInput: {
        fontSize: 20,
        height: "fit-content",
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
          
          width: "100%",
          height: 800,
          
          height: "100%",
          gap: 10,
          flexGrow: 1,
      },

      ToggleButton: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 42,
          width: 166,
          height: 146,
          minWidth: "45%",
          borderRadius: 10,
      },

      ToggleButtonIcon: {
          height: 69,
          width: 69,
      },

      ToggleButtonText: {
          fontSize: 17,
          width: 130,
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

      Body: {
        gap: 44,
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

      BorderContainer: {
        height: 372,
        borderColor: "#555555",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        gap: 18,
      },

      TittleText: {
        fontSize: 20,
      },

  });

  export default styles;