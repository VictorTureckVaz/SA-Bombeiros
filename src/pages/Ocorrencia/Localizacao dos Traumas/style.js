import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      Checkbox: {
        height: 56,
        borderColor: "#555555",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        width: "100%",
      },

      counterContainer: {

        flexDirection: "row", 
        height: "fit-content", 
        borderColor: "#555555", 
        borderWidth: 2, 
        padding: 10, 
        borderRadius: 10, 
        width: "50%",
        gap: 15, 
        alignItems: "center",
        justifyContent: "space-around"
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
      
      Body: {
        gap: 44,
        height: "100%",
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


      TextInput: {
        fontSize: 20,
        height: 56,
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
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

        Cell: {
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
          // width: "22%",
          width: "23.5%",
        },

        TitleCell: {
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
          // width: "22%",
          width: "28%",
        },

        HeaderCell: {
          justifyContent: "center",
          alignItems: "center",
          width: "23.8%",
        },

        Table: {
          backgroundColor: "#313131", 
          gap: 2,
          width: "100%",
          padding: 2,
        },

        Enviar: {
          backgroundColor: '#4AAE39',
          width: "100%",
          height: 54,
          borderRadius: 12.5,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        },
  
        OcStepText: {
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 20,
        },

  });

  export default styles;