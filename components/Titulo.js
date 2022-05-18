import { StyleSheet, Text, View } from "react-native";

 function Titulo(){

    return(
        <View style={myStyles.mycontainer}>
            <Text style={myStyles.fontSize}>Simulador de crédito</Text>
        </View>
    )
}

const myStyles = StyleSheet.create({
    mycontainer: {
        // flex:1,
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        height:50,
        color:'white',
        backgroundColor:'#5c86d4',
        
    },
    fontSize:{
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
    },
    textInput:{
    backgroundColor: '#d6d6d6',
    color: '#010101',
    height: 40,
    padding: 5,
    marginBottom: 5,
    width: 400,
    borderRadius: 4
  }
})

export default Titulo;