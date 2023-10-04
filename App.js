import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TitleLogin from './src/components/Login/Title';
import MainLogin from './src/components/Login/Main';
import Header from './src/components/Header';
import MainHome from './src/components/Home/Main';
import Footer from './src/components/Footer';
import MainProfile from './src/components/Profile/Main';
import MainOcorrencia from './src/telas/Ocorrencia/Principal';
import LoadingDots from './src/components/Loading'
import MainInfoPac from './src/telas/Ocorrencia/Info Pac';

export default function App() {
  // Tela de Login
  // return (
  //   <View style={styles.ContainerLogin}>
  //     <TitleLogin/>
  //     <MainLogin/>
  //   </View>
  // );
  // return (
  //   <View style={styles.Header}>
  //     <Header/>
  //     <MainHome/>
  //     <Footer/>
  //   </View>
  // );
  // return (
  //   <View style={styles.Container}>
  //     <Dot/>
  //   </View>
  // );
  // return (
  //   <View style={styles.Container}>
  //     <Header/>
  //     <MainProfile/>
  //     <Footer/>
  //   </View>
  // );
  // return (
  //   <View style={styles.LoadingContainer}>
  //   <LoadingDots/>
  //   </View>
  // );
  // return (
  //   <View style={styles.Container}>
  //     <Header/>
  //     <MainOcorrencia/>
  //     <Footer/>
  //   </View>
  // );
  return (
    <View style={styles.Container}>
      <Header/>
      <MainInfoPac/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerLogin: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 50,
    gap: 44,
  },
  Container: {
    flex: 1,
    justifyContent: 'top',
  },
  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 90,
  },
});
