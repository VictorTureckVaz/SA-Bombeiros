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

      retorno: {
        
      },

      Container: {
        flex: 1,
        gap: 23,
        justifyContent: "center",
        padding: 50,
      },

      SmallText: {
        fontSize: 15,
        alignItems: "flex-end",
        fontWeight: "bold",
      },


      ButtonContainer: {
        padding: 7.5,
        backgroundColor: "#E74428",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

      ButtonText: {
          color: "white",
          fontSize: 27,
          fontWeight: "bold",
      },

      BigTextTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#313131',
      },
      
      SmallTextTitle: {
        fontSize: 17,
        color: '#313131',
      },

      ErrorText: {
        color: '#E74428',
        fontSize: 20,
        fontWeight: 'bold',
      },

      ErrorContainer: {
        display: 'none',
        borderColor: '#E74428',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        borderRadius: 10,
      },

  });

  export default styles;