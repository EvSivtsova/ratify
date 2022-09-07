import React, {useEffect, useState} from 'react'
import { Text, View, Button, ScrollView, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import { styles } from '../styles'
import {Food} from '../components/scraperPages/foodComponent';
import { ButtonStyles } from '../components/WelcomePage/MainButtonsStyle';
export function FoodSafety({ navigation }) {


  const [loading, setLoading]= useState(false)
  const [data, setData] = useState([])
   const [text, onChangeText] = useState("");





  const renderFood = () => {
    return data.map((foodName, index)=> {
      return <Food key={index} data={foodName}/>
    })
  }

    const search = () => {
      setLoading(true)
      fetch(`http://localhost:8000/foodSafety?text=${text}`).then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }
  
  return (
    <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
    <View style={styles.container}>
      <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonTextLarge}>Food:</Text>
      </View>
      <TextInput
        style={styles.textBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="eg 'Apple'"
        
        />
         <TouchableOpacity 
        style={ButtonStyles.button}
        title="Search"
        onPress={() => search()}
      ><Text style={ButtonStyles.buttonText}>Search</Text>
        </TouchableOpacity>
      <ScrollView>
        {loading ? (
          <View style={ButtonStyles.button}>
          <Text style={ButtonStyles.buttonText}>loading...</Text>
          </View>
          ):
          <></>}
      {renderFood()}
      </ScrollView>
      <Button   color="#869471" title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button  color="#869471" title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  );
}
