import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TitleLogin from './src/components/Title';
import MainLogin from './src/components/Main';

export default function App() {
  // Tela de Login
  // return (
  //   <View style={styles.Container}>
  //     <TitleLogin/>
  //     <MainLogin/>
  //   </View>
  // );
  return (
    <View style={styles.Container}>
      <TitleHome/>
      <MainHome/>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 50,
    gap: 44,
  },
});
