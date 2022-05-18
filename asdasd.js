import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,Switch } from 'react-native';
import React,{useState} from 'react';
//npm i react-native-picker-select
import RNPickerSelect from 'react-native-picker-select';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [vlrprestamo, setVlrprestamo] = useState('');
  const [tipoPrestamo, setTipoprestamo] = useState('');
  const [nrocuotas, setNrocuotas] = useState(0);
  const [cuotamanejo, setCuotamanejo] = useState(false);
  const [vlrcuota, setVlrcuota] = useState(0);
  const [totaldeuda, setTotaldeuda] = useState(0);
  const itemsprestamo = [
    {label:'Vivienda', value:'viv'},
    {label:'Educación', value:'edu'},
    {label:'Vehiculo', value:'veh'},
  ];
  const itemsnrocuotas =[
    {label:'12', value:'12'},
    {label:'24', value:'24'},
    {label:'36', value:'36'},
  ]

  let calcular = ()=>{
      let minteres;
      switch(tipoPrestamo){
        case 'viv':
          minteres = 1/100;
          break;
        case 'edu':
            minteres = 0.5/100;
            break;
        case 'veh':
            minteres = 1.5/100;
            break;
      }
      let cmanejo=0;
      if (cuotamanejo){
        cmanejo = 10000;
      }
      //calcular totaldeuda
      let mtdeuda = (parseFloat(vlrprestamo)*minteres*parseFloat(nrocuotas)+parseFloat(vlrprestamo))
      setTotaldeuda(mtdeuda);
      setVlrcuota(mtdeuda/parseFloat(nrocuotas)+cmanejo)

  }
  return (
    <View style={styles.container}>
      <Image source={require('./images/scredito.jpg')}
        style={{width:150,height:150,resizeMode:'stretch',borderRadius:10}}
      />
      <Text>Valor Préstamo</Text>
      <TextInput
        placeholder='Ingrese valor prestamo'
        style={{width:200,height:30,textAlign:'center',padding:5}}
        onChangeText={(vlrprestamo) => setVlrprestamo(vlrprestamo)}
        value={vlrprestamo}
      />
      <View>
        <Text>Tipo de Préstamo</Text>
        <RNPickerSelect
          placeholder={{
            label:'Seleccione tipo de Prestamo',
            value:''
          }}
          onValueChange={(Tipoprestamo) => setTipoprestamo(Tipoprestamo)}
          items={itemsprestamo}
          value={Tipoprestamo}
        />
      </View>
      <View>
        <Text>Número de Cuotas</Text>
        <RNPickerSelect
          placeholder={{
            label:'Seleccione número de cuotas',
            value:''
          }}
          onValueChange={(nrocuotas) => setNrocuotas(nrocuotas)}
          items={itemsnrocuotas}
          value={nrocuotas}
        />
      </View>
      <View>
        <Text>Cuota de Manejo</Text>
        <Switch
          onValueChange={(cuotamanejo)=>setCuotamanejo(cuotamanejo)}
          value={cuotamanejo}
        />
      </View>
      <View>
        <Text>Valor Cuota</Text>
        <TextInput
          style={{textAlign:'center'}}
          value={vlrcuota}
        />
      </View>
      <View>
        <Text>Total Deuda</Text>
        <TextInput
          style={{textAlign:'center'}}
          value={totaldeuda}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{backgroundColor:'green',borderRadius:10,width:200,height:40, textAlign:'center',paddingTop:10}}
          onPress={calcular}
          
        >
          <Text style={{color:'white'}}>Calcular</Text>
        </TouchableOpacity>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});