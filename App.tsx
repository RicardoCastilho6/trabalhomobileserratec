import { StatusBar } from 'expo-status-bar';
import { Image, Text, View , TextInput, Button, ImageBackground, TouchableOpacity} from 'react-native';

import { styles } from "./style";

export default function lobby() {
  
    return (
  
      <>
        <ImageBackground
          source={require('./img/unnamed.png')}
          style={styles.backgroundimg}
          imageStyle={{ position: 'absolute', left: 0 }}
        />
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.textlabel}>CPF/CNPJ</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Insira seu CPF ou CNPJ'
              placeholderTextColor={'blue'}
            />
            <Text style={styles.textlabel}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              placeholder='Insira sua senha'
              placeholderTextColor={'blue'}
              
            />
            <TouchableOpacity
              style={styles.button}>
              <Text style={styles.textButton}>ENTRAR</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Confirmar Compra</Text>
            <Text style={styles.text}>Esqueci minha senha</Text>
          </View>
        </View>
      </>
    );
  };