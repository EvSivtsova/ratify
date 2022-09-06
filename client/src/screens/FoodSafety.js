import React, {useState} from 'react'
import { Text, View, Button, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { styles } from '../styles'
import {Food} from '../../assets/components/foodComponent';
export function FoodSafety({ navigation }) {


  const [loading, setLoading]= useState([])
  const [data, setData] = useState([])
   const [text, onChangeText] = useState("");

  
  React.useEffect(() => {
    fetch('http://localhost:8080/foodSafety').then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  const renderFood = () => {
    return data.map((foodName, index)=> {
      return <Food key={index} data={foodName}/>
    })
  }
  
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
      <Text>Food:</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="eg 'Apple'"
        
        />
      <ScrollView>
        {loading ? (
          <Text>loading...</Text>
          ):
          <></>}
      {renderFood()}
      </ScrollView>
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  );
}
