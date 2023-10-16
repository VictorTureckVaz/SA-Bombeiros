import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      WhiteSection: {
        fontSize: 20,
        height: 56,
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 10,
        borderRadius: 5,
      },
      RadioGroup: {
        
      },

      GraySection: {
          fontSize: 20,
          height: 56,
          backgroundColor: "#d9d9d9",
          width: "100%",
          padding: 10,
          borderRadius: 5,
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

      FilterButton: {
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 2,
          borderRadius: 10,
          backgroundColor: "#E74428",
          padding: 20,
      },

      FilterContainer: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
      },
      
      FilterButtonText: {
          fontSize: 27,
          fontWeight: "bold",
          color: "#fff",
      },

      RadioGroup: {
          flex: 1,
          justifyContent: "flex-start",
          textAlign: "flex-start",
      },

  });

  export default styles;