import React, {useState} from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../styles'

export function Events({ navigation }) {
  const [data, setData] = useState("")
  React.useEffect(()=> {
    fetch('http://localhost:4000/events').then((response)=>
    setData(response))
  },[])
  return (

    <View style={styles.container}>
      <Text>Events{data.forEach(i => console.log(i))}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}