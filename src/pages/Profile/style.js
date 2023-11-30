import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  Container: {
    gap: 23,
  },

  Body: {
    gap: 76,
    height: "100%",
  },

  InfoContainer: {
    gap: 10,
  },

  ProfileContainer: {
    height: 230,
    width: 'auto',
    backgroundColor: '#BC331E',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Logout: {
    width: 365,
    height: 56,
    backgroundColor: '#E74428',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  TextContainer: {
      width: 365,
      height: 56,
      borderColor: "#555555",
      borderWidth: 2,
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center'
  },

  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontcolor: "#313131",
  },

  InfoContainer: {
      flex: 1,
      alignItems: 'center',
      gap: 20,
      padding: 27,
  },

  });

  export default styles;