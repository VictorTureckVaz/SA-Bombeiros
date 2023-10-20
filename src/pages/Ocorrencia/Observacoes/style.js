import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      TextInput: {
        fontSize: 20,
        height: 292,
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        textAlign: "",
      },

      Body: {
          gap: 27,
          height: "100%",
      },

      Text: {
        color: "gray",
        fontSize: 20,
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

  });

  export default styles;