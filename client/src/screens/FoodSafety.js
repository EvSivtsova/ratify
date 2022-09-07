import React, {useEffect, useState} from 'react'
import { Text, View, Button, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { styles } from '../styles'
import {Food} from '../../assets/components/foodComponent';
export function FoodSafety({ navigation }) {


  const [loading, setLoading]= useState(false)
  const [data, setData] = useState([])
  const [text, onChangeText] = useState("");
  const [pet, setPet] = useState("Rats")





  const renderFood = () => {
    return data.map((foodName, index)=> {
      return <Food key={index} data={foodName}/>
    })
  }

    const Search = () => {
      setLoading(true)
      fetch(`http://localhost:8000/RatfoodSafety?text=${text}`).then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }


  const guineaSearch = () => {
    setLoading(true)
    fetch(`http://localhost:8000/GuineafoodSafety?text=${text}`).then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }


    
  switch (pet){
    case 'Rats':
  return (
    <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
    <View style={styles.container}>
      <Text>Rat Food Checker:</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="eg 'Apple'"
        />
        <Button
        title='Search'
        onPress={Search}>Search</Button>
      <ScrollView>
        {loading ? (
          <Text>loading...</Text>
          ):
          <></>}
      {renderFood()}
      </ScrollView>
      {(pet != 'Rats') ? <Button title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  );
  break;
  case 'Guinea pigs':
  return (
    <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
    <View style={styles.container}>
      <Text>Guinea Pig Food Checker:</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="eg 'Apple'"
        />
        <Button
        title='Search'
        onPress={guineaSearch}>Search</Button>
      <ScrollView>
        {loading ? (
          <Text>loading...</Text>
          ):
          <></>}
      {renderFood()}
      </ScrollView>
      {(pet != 'Rats') ? <Button title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  );
  break;
  case 'Tigers':
  return (
    <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
    <View style={styles.container}>
      <Text>Tiger Food Checker:</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="eg 'Apple'"
        />
        <Button
        title='Search'
        >Search</Button>
     <SafeAreaView>
    <View style={styles.eventContainer}>
      <Text>Tigers can eat any meat</Text>
    </View>
    <Text></Text>
    </SafeAreaView>
      {(pet != 'Rats') ? <Button title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  );
  break;
        }
}
