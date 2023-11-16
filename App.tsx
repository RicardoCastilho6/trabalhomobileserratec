import { StatusBar } from 'expo-status-bar';
import { Image, Text, View , TextInput, Button, ImageBackground, TouchableOpacity} from 'react-native';
import { FontAwesome, Entypo, MaterialIcons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

import { styles } from "./style";
import React, { useState } from 'react';

export default function App() {
  
  return (
    <View style={styles.container}>
    <View style ={styles.viewLobby}>
      <Text style={styles.textLobby}>Olá, Ricardo</Text>
      
      <FontAwesome  style={styles.icon} name="user-circle" size={24} color="white" />
    
    </View  >
    
    <View style={styles.viewCobranca}>
      <Text style={styles.textPagamento}><AntDesign name="exclamationcircle" size={19} color="white" />   Aguardando Pagamento</Text>
      <Text style={styles.textFatura}>Sua Fatura atual está no valor de:</Text>
      <Text style={styles.textValor}>R$ 159,99</Text>
      <Text style={styles.textVencimento}>vence hoje 13/Nov</Text>
      
    <View style={styles.viewButton}>
      <TouchableOpacity style={styles.button2} >
      <AntDesign name="barcode" size={24} color="white" />
        <Text style={styles.buttonText}>Pague com </Text>
        <Text style={styles.buttonText}>Boleto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} >
      <AntDesign name="qrcode" size={24} color="white" />
        <Text style={styles.buttonText}>Pague com </Text>
        <Text style={styles.buttonText}>Pix</Text>
      </TouchableOpacity>
    </View>
    </View>
    
    
    <View style={styles.viewIndica}>
      <Text style={styles.textPromoTitle}>Indicou, Ganhou!</Text>
      <Text style={styles.textPromo2}>Ganhe 100% de desconto na próxima fatura, indicando um amigo com seu cupom exclusivo</Text>
      <TouchableOpacity style={styles.button3} >
        <Text style={styles.textPromo}>SAIBA MAIS</Text>   
      </TouchableOpacity>


    </View>
    <View style={styles.viewMais}>
    <TouchableOpacity style={styles.buttonFinal} >
    <Entypo name="home" size={24} color="white" />
        <Text style={styles.buttonText}>HOME</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFinal} >
      <AntDesign name="barschart" size={24} color="white" />
        <Text style={styles.buttonText}>PLANO</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFinal} >
      <MaterialCommunityIcons name="finance" size={24} color="white" />
        <Text style={styles.buttonText}>FINANCEIRO</Text>
       
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFinal} >
      <MaterialIcons name="support-agent" size={24} color="white" />
        <Text style={styles.buttonText}>SUPORTE</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFinal} >
        <Entypo name="menu" size={24} color="white" />
        <Text style={styles.buttonText}>MAIS</Text>
        
      </TouchableOpacity>
    </View>
    </View>
 );
};


