import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
      },
      backgroundimg: {
        flex: 1,
        width: '100%',
        height: '65%',
        position: 'absolute',
        left: 0,
      },
      contentContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        elevation: 1

        
        
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 7,
        padding: 4,
        width: 200,
        backgroundColor: 'gray',
        opacity: 0.6,
        color: 'blue'
      },
      text:{
        textAlign: 'center',
        color: 'blue'
      },
      textlabel:{
        color:'blue'
      },
      button:{
        backgroundColor:'gray',
        opacity:0.3,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        
      },
      textButton:{
        textAlign: 'center',
        color: 'black'
      },
      viewLobby:{
        backgroundColor:  'blue',
        flex: 1,
        width: '100%',
        height: '15%',
        position: 'absolute',
        left: 0,
        flexDirection:'row',
        top: 0

      },
      textLobby:{
        color: 'white',
        marginTop: 50,
        fontSize: 20,
        marginLeft: 10

      },
      icon:{
        marginTop: 40,
        marginLeft: 290,
        textAlign: 'right',
        fontSize: 60,
      },
      viewCobranca:{ 
        elevation: 7,
        backgroundColor:  'white',
        borderColor: 'gray', 
        flex: 1,
        width: '98%',
        height: '26%',
        position: 'absolute',
        left: 5,
        padding: 3,
        overflow: 'hidden',
        top: 110,
        
       

      },
      textPagamento:{
        backgroundColor: 'red',
        marginRight: 260,
        borderRadius: 5, 
        padding: 6,
      },
      textFatura:{
        color: 'blue',
        marginLeft: 15
      },
      textValor:{
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20
    },
    textVencimento:{
        color: 'red',
        marginLeft: 20,
        fontSize: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
      },
      imagem: {
        width: 40, // Ajuste conforme necessário
        height: 15, // Ajuste conforme necessário
        marginRight: 10,
        alignItems:'center'
        
        

      },
      button2: {
        elevation: 7,
        alignItems: 'center', // Cor de fundo do botão
        padding: 8,
        borderRadius: 15,
        margin: 10,
        backgroundColor: 'blue'
      },
      viewButton:{
        flexDirection:'row'
      },
      viewIndica:{
        elevation: 8,
        top: 110,
        backgroundColor:'blue',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        padding: 35

      },
      button3: {
        
        alignItems: 'center', // Cor de fundo do botão
        padding: 10,
        borderRadius: 15,
        margin: 10,
        backgroundColor: 'white',
        marginLeft: 130,
        marginRight: 130
      },
      textPromo:{
        color: 'blue',
        textAlign: 'center'
      },
      textPromo2:{
        textAlign: 'center',
        color: 'white',
        marginLeft: 50,
        marginRight: 50

      },
      textPromoTitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25

      },
      viewMais: {
        
        flexDirection: 'row',
        justifyContent: 'flex-end', // Ajuste para 'flex-end' para alinhar no final
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'blue',
        marginLeft: 0,
        marginRight: 0,
        
        

      },
      buttonFinal: {
        
        alignItems: 'center', 
        padding: 20,
        margin: 7,
        backgroundColor: 'blue'
      },
      

      
    });