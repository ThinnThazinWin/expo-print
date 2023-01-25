import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';
import * as Print from 'expo-print';
import { useState } from 'react';


export default function App() {

const [getdata, setdata] = useState();
const[getpara, setpara]= useState();

  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-weight: normal;">
      ${getdata}
    </h1>
   <p>${getpara}</p>
  </body>
</html>
`;

const print = async () => {
  // On iOS/android prints the given html. On web prints the HTML from the current page.
  await Print.printAsync({
    html,
    //printerUrl: selectedPrinter?.url, // iOS only
  });
};

  return (
    <View style={styles.container}>
      <Image source = {require('./logo.png')} style={styles.image}/>
      <Text>title</Text>
      <TextInput style={styles.textinput1} onChangeText={setdata}/>
      <Text>description</Text>
      <TextInput style={styles.textinput2}onChangeText={setpara} multiline/>
      <Button title='print' onPress={print}/>
      <StatusBar style="auto" />
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
  textinput1:{
    width:'100%',
    height:10
  },
  textinput2:{
    width:'100%',
    height:40
  },
  image:{
    width: 200,
    height: 200,
    margin: 10
  }
});
