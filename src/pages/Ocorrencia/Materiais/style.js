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

      Text: {
        color: "gray",
        fontSize: 20,
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

      UsingMenuIconContainer: {
          flex: 1,
          alignItems: "flex-end",
      },

      UsingMenuIcon: {
          width: 32,
          height: 32,
          transform: [{ rotate: "180deg" }]
      },

      Body: {
        gap: 44,
        height: "100%",
      },

      TextInput: {
        fontSize: 16,
        height: 31,
        borderColor: "#555555",
        width: 125,
        borderWidth: 2,
        paddingLeft: 10,
        borderRadius: 10,
      },

      TempHGTContainer: {
        flexDirection: "row",
        width: "100%",
        gap: 10,
      },

      MiniTextInput: {
          fontSize: 16,
          height: 31,
          borderColor: "#555555",
          width: 42,
          borderWidth: 2,
          textAlign: "center",
          borderRadius: 10,
      },

      BorderContainer: {
          fontSize: 20,
          height: 56,
          borderColor: "#555555",
          width: "100%",
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        },

        ReducedBorderContainer: {
          fontSize: 20,
          height: 56,
          borderColor: "#555555",
          width: 224,
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        },

        MiniBorderContainer: {
          fontSize: 20,
          height: 56,
          borderColor: "#555555",
          width: 124,
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        },
  });

  export default styles;