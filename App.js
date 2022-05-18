import React, {useState} from 'react'
import { StyleSheet, Text, View,Image, TextInput, Switch } from 'react-native';
//npm i react-native-picker-select
import RNPickerSelect from 'react-native-picker-select'
import { TouchableOpacity } from 'react-native-web';

import Titulo from './components/Titulo.js'

export default function App() {

  const [valorPrestamo, setValorPrestamo] = useState('')
  const [tipoPrestamo, setTipoPrestamo] = useState('')
  const [numeroCuotas,setNumeroCuotas] = useState('')
  const [cuotaManejo,setcuotaManejo] = useState(false)
  const [valorCuota,setValorCuota] = useState(0)
  const [valorDeuda,setValorDeuda] = useState(0)

  const itemsPrestamo = [
    {label:'Vivienda', value:'vivienda'},
    {label:'Educación', value:'educacion'},
    {label:'Vehiculo', value:'vehiculo'},
  ]

  const itemsnumeroCuotas =[
    {label:'12', value:'12'},
    {label:'24', value:'24'},
    {label:'36', value:'36'},
  ]

//funciones
  const calcular = () =>{
    let  interes
    switch(tipoPrestamo){
      case 'vivienda':
        interes=1/100
      break;
    case' educacion':
       interes=0.5/100
      break;
    case 'vehiculo':
        interes=1.5/100
      break;
    }
    let cmanejo=0
    if (cuotaManejo){
      cmanejo=10000
    }
    //calcular deuda 

    let montoDeuda =(parseFloat(valorPrestamo))*interes*parseFloat(numeroCuotas)+parseFloat(valorPrestamo)
   
    setValorDeuda(new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 3 }).format(montoDeuda));
    setValorCuota(new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 3 }).format(montoDeuda/parseFloat(numeroCuotas)+cmanejo))

  } 


  return (
    <View style={styles.container}>
      
      <View>
        <Titulo/>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
      </View>


      <View>
        <Image
          style={styles.Image}
          source={require('./images/credito2.jpg')}
        />
      </View>


    <Text style={styles.fontSize}>Valor del prestamo</Text>
    <TextInput
    style={styles.textInput}
    placeholder='Ingrese valor del prestamo'
    onChangeText={(valorPrestamo)=>setValorPrestamo(valorPrestamo)}
    value={valorPrestamo}
    />
  <View style={styles.picker}>
    <Text style={styles.fontSize}>Tipo de prestamo</Text>
      <RNPickerSelect
        
        placeholder={{
          label:'Seleccione tipo de prestamo',
          value:''}}
        onValueChange={(tipoPrestamo)=>setTipoPrestamo(tipoPrestamo)}
        items={itemsPrestamo}
        value={tipoPrestamo}
      />
    </View>
    
    <View style={styles.picker}>
    
    <Text style={styles.fontSize}>Número de cuotas</Text>
      <RNPickerSelect
        placeholder={{
          label:'Seleccione numero de cuotas',
          value:''}}
        onValueChange={(numeroCuotas)=>setNumeroCuotas(numeroCuotas)}
        items={itemsnumeroCuotas}
        value={numeroCuotas}
      />
    </View>
    
    <Text style={styles.fontSize}>Cuota de manejo</Text>
     
     <Switch
      onValueChange={(cuotaManejo)=>setcuotaManejo(cuotaManejo)}
      value={cuotaManejo}
    />
    
      
      <Text style={styles.fontSize}>Valor  cuota</Text>
      <TextInput
      style={styles.textInput}
      value={valorCuota}/>
      
      
      
      <Text style={styles.fontSize}>Deuda total</Text>
      <TextInput
      style={styles.textInput}
      value={valorDeuda}/>
     
     

        <TouchableOpacity
         style={styles.TouchableOpacity}
         onPress={calcular}
        >
          <Text style={styles.fontSize}>Calcular</Text>
        </TouchableOpacity>
      
      
      
    </View>
    
    
   
      
   



  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'colunm', /*Por defecto*/
    flex: 1,
    backgroundColor: '#86a8e7',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
    },
    fontSize:{
      fontSize: 19,
      // fontWeight: 'bold',
      color: 'white',
      marginBottom:3
    },
  textInput:{
    backgroundColor: '#d6d6d6',
    color: '#010101',
    height: 40,
    padding: 5,
    marginBottom: 15,
    width: 400,
    borderRadius: 4,
    
  },
  TouchableOpacity:{
    height:40, 
    width:400, 
    backgroundColor:'#00c9b7',
    alignItems:'center',
    justifyContent:'center'
  },
  Image:{
    height:250,
    width:400,
    resizeMode:'stretch', 
    borderRadius:20,
    marginBottom:10
  },
  picker:{
    height:60, 
    width:400, 
    alignItems:'center',
    justifyContent:'center'
  }
  
});
