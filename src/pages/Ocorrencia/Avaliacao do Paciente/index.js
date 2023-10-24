import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Header';
import Footer from '../../Footer';
import RadioButton from '../../../components/RadioButton';



export default function MainAvaliacao(){

    const navigation = useNavigation();


    const [aberturaOcular, setAberturaOcular] = useState(0); //seta abertura ocular como 0
    const [respostaVerbal, setRespostaVerbal] = useState(0); //seta resposta verbal como 0
    const [respostaMotora, setRespostaMotora] = useState(0); //seta resposta motora como 0
    
    const consciencia = aberturaOcular + respostaVerbal + respostaMotora //somatória de consciencia
    
    return(
        <View style={styles.Body}>
            <Header/>
            <View style={styles.Container}>
                <View style={styles.ResultContainer}>
                    <Text>Total (GCS): {consciencia}</Text>
                </View>
                <View style={styles.Result}>

                </View>
                {/* <View style={{gap: 5, width: "100%"}}>
                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setAberturaOcular(4)}>
                        <View style={[styles.CheckBox, {backgroundColor: aberturaOcular == 4 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Espontânea</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setAberturaOcular(3)}>
                        <View style={[styles.CheckBox, {backgroundColor: aberturaOcular == 3 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Comando Verbal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setAberturaOcular(2)}>
                        <View style={[styles.CheckBox, {backgroundColor: aberturaOcular == 2 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Estímulo Doloroso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setAberturaOcular(1)}>
                        <View style={[styles.CheckBox, {backgroundColor: aberturaOcular == 1 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Nenhuma</Text>
                    </TouchableOpacity>
                </View>

                <View style={{gap: 5, width: "100%"}}> 
                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaVerbal(5)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaVerbal == 5 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Orientado</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaVerbal(4)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaVerbal == 4 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Confuso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaVerbal(3)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaVerbal == 3 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Palavras Inapropriadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaVerbal(2)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaVerbal == 2 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Palavras Incompreensíveis</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaVerbal(1)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaVerbal == 1 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Nenhuma</Text>
                    </TouchableOpacity>
                </View>

                <View style={{gap: 5, width: "100%"}}> 
                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaMotora(6)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaMotora == 6 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Obedece Comandos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaMotora(5)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaMotora == 5 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Localiza Dor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaMotora(4)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaMotora == 4 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Movimento de Retirada</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaMotora(3)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaMotora == 3 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Flexão Anormal</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaMotora(2)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaMotora == 2 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Extensão Anormal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OptionContainer} onPress={ () => setRespostaMotora(1)}>
                        <View style={[styles.CheckBox, {backgroundColor: respostaMotora == 1 ? "black" : "white"}]}></View>
                        <Text style={styles.Text}>Nenhuma</Text>
                    </TouchableOpacity>
                    
                    
                    
                </View> */}
                <RadioButton
                options={[
                    {
                        optionName: "Espontânea",
                        optionValue: 4
                    },
                    {
                        optionName: "Comando Verbal",
                        optionValue: 3
                    },
                    {
                        optionName: "Estímulo Doloroso",
                        optionValue: 2
                    },
                    {
                        optionName: "Nenhum",
                        optionValue: 1
                    },
                    
                ]}
                selectedOption={aberturaOcular}
                setSelectedOption={setAberturaOcular}
                />

                <RadioButton
                options={[
                    {
                        optionName: "Espontânea",
                        optionValue: 4
                    },
                    {
                        optionName: "Comando Verbal",
                        optionValue: 3
                    },
                    {
                        optionName: "Estímulo Doloroso",
                        optionValue: 2
                    },
                    {
                        optionName: "Nenhum",
                        optionValue: 1
                    },
                    
                ]}
                selectedOption={respostaVerbal}
                setSelectedOption={setRespostaVerbal}
                />

                <RadioButton
                options={[
                    {
                        optionName: "Espontânea",
                        optionValue: 4
                    },
                    {
                        optionName: "Comando Verbal",
                        optionValue: 3
                    },
                    {
                        optionName: "Estímulo Doloroso",
                        optionValue: 2
                    },
                    {
                        optionName: "Nenhum",
                        optionValue: 1
                    },
                    
                ]}
                selectedOption={respostaMotora}
                setSelectedOption={setRespostaMotora}
                />





                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.Button} onPress={ () => navigation.navigate('ocorrencia') }>
                        <Image
                        style={styles.Icon}
                        source={require('../../../../assets/previous.png')}
                        />
                        <Text style={styles.ButtonText}>VOLTAR AOS INDICADORES DE ETAPA</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
                

            
            
            
            

        </View>
    )
}
