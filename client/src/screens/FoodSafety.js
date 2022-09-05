import React, {useState} from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../styles'

export function FoodSafety({ navigation }) {
  const [data, setData] = useState("LOADING")
  React.useEffect(()=> {
    fetch('http://localhost:8080/foodSafety').then((response)=>response.json())
    .then((data)=> {
      setData(JSON.stringify(data))
    })
  },[])
  return (

    <View style={styles.container}>
      <Text>Food data:</Text>
        <Text>{data}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
