import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


      Text: {
        color: "gray",
        fontSize: 20,
        width: "95%",
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
          width: 32,
      },

      UsingMenuIcon: {
          width: 32,
          height: 32,
          transform: [{ rotate: "180deg" }]
      },

  });

  export default styles;