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

      Text: {
        color: "gray",
        fontSize: 20,
      },

      Body: {
        gap: 44,
        height: "100%",
      },
      
      UsingMenuTitle: {
        flexDirection: "row",
      },

      UsingMenu: {
        height: 56,
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        gap: 10,
    },

      UsingMenuIconContainer: {
        flex: 1,
        alignItems: "flex-end",
      },

      UsingMenuIcon: {
        width: 32,
        height: 32,
        transform: [{ rotate: "180deg" }]
      },

      Container: {
        gap: 23,
        padding: 27,
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