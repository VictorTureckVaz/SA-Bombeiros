import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      Checkbox: {
        height: 56,
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
      },

      UsingMenu: {

          flexDirection: "row",
          height: 56,
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
        height: "100%",
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

      UsingMenuIconContainer: {
          flex: 1,
          alignItems: "flex-end",
      },

      UsingMenuIcon: {
          width: 32,
          height: 32,
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

      CheckBox: {
        width: 25,
        height: 25,
        borderColor: "#A3A3A3",
        borderWidth: 2,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
      },

      Text: {
        fontSize: 20,
      },

      UsingMenuIconContainer: {
        flex: 1,
        alignItems: "flex-end",
        width: 32,
      },

      UsingMenuIcon: {
          width: 32,
          height: 32,
          transform: [{ rotate: "180deg" }]
      },

      UsingMenuTitle: {
        flexDirection: "row",
      },

      UsingMenu: {
          height: "fit-content",
          borderColor: "#555555",
          width: "100%",
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          gap: 10,
      },


  });

  export default styles;