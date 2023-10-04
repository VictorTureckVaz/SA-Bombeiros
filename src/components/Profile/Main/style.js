import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
     ProfileContainer: {
        height: 230,
        width: 'auto',
        backgroundColor: '#BC331E'
      },

      Container: {
        flex: 1,
        justifyContent: 'center',
        gap: 41,
      },

      TextContainer: {
          width: 394,
          borderColor: "#555555",
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
      },

      Text: {
        fontSize: 20,
        fontWeight: 'bold',
      },

      InfoContainer: {
          flex: 1,
          alignItems: 'center',
          gap: 20,
          padding: 2,
      }

  });

  export default styles;