import React, {useState} from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../styles'

export function Events({ navigation }) {
  const [data, setData] = useState("LOADING")
  React.useEffect(()=> {
    fetch('http://localhost:8080/events').then((response)=>
    setData(JSON.stringify(response)))
  },[])
  return (

    <View style={styles.container}>
      <Text>hello, here is some data:</Text>
        <Text>{data}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}