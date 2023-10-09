import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TitleLogin from './src/components/Login/Title';
import MainLogin from './src/components/Login/Main';
import Header from './src/pages/Header';
import MainHome from './src/components/Home/Main';
import Footer from './src/pages/Footer';
import MainProfile from './src/components/Profile/Main';
import MainOcorrencia from './src/pages/Ocorrencia/Principal';
import LoadingDots from './src/pages/Loading'
import MainInfoPac from './src/pages/Ocorrencia/Info Pac';
import MainInfoAmb from './src/pages/Ocorrencia/Info Ambu';
import MainTipoOc from './src/pages/Ocorrencia/Tipo';
import MainTransporte from './src/pages/Ocorrencia/Transporte';
import MainConsciencia from './src/pages/Ocorrencia/Consciencia';

export default function App() {
  // Tela de Login
  return (
    <View style={styles.ContainerLogin}>
      <TitleLogin/>
      <MainLogin/>
    </View>
  );
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
  // return (
  //   <View style={styles.Container}>
  //     <Header/>
  //     <MainInfoPac/>
  //     <Footer/>
  //   </View>
  // );
  // return (
  //   <View style={styles.Container}>
  //     <Header/>
  //     <MainInfoAmb/>
  //     <Footer/>
  //   </View>
  // );
  // return (
  //   <View style={styles.Container}>
  //     <Header/>
  //     <MainTipoOc/>
  //     <Footer/>
  //   </View>
  // );
  // return (
  //   <View style={styles.Container}>
  //       <Header/>
  //       <MainTransporte/>
  //       <Footer/>
  //   </View>
  // );
  // return (
  //   <View style={styles.Container}>
  //       <Header/>
  //       <MainConsciencia/>
  //       <Footer/>
  //   </View>
  // );
  return (
    <View style={styles.Container}>
        <Header/>
        <MainConsciencia/>
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
    justifyContent: 'center',
    gap: 44,
  },

  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 90,
  },

  Header: {
    flex: 1,
    gap: 21,
  },
});
