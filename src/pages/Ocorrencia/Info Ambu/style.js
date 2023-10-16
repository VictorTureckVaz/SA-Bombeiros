import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      TextInput: {
        fontSize: 20,
        height: 56,
        borderColor: "#555555",
        width: "100%",
        borderWidth: 2,
        padding: 10,
        borderRadius: 12.5,
      },

      Container: {
        gap: 23,
        padding: 27,
        marginTop: 21, 
        height: "100%",
      },

      ButtonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#313131",
        width: 222,
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

      SmallText: {
        fontSize: 15,
        alignItems: "flex-end",
        fontWeight: "bold",
      },

      SecondSection: {
        gap: 12,
      },

      ButtonContainer: {
        flex: 1,
        alignItems: "flex-end",
      },

  });

  export default styles;