import React, { useState } from 'react';
import { Text, View, Button, ListItem, SafeAreaView, ScrollView } from "react-native";
import { styles } from "../styles";
import {AnimalDetails} from "../components/animalDetails"

export function Animal({ navigation }) {

  const [pet, setPet] = useState('Rats');
  const [animals, setAnimals] = useState([]);
  
  const localIP = process.env.SERVER_ADDRESS || '10.64.0.232'

const renderDetails = () => {
  return animals.map((animal, index)=> {
    return <AnimalDetails key={index} data={animal}/>
  })
}

React.useEffect(() => {
  fetch(`http://localhost:8000/animals/find?chosen=${pet}`).then((response) => response.json())
    .then((data) => {
      setAnimals(data)
    })
    .catch((error) => console.log(error))
}, [pet])

  return (
    <ScrollView>
    <View style={styles.container}>
    <SafeAreaView>
      {renderDetails()}
      {(pet != 'Rats') ? <Button title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
      <Text>My profile</Text>
      <Button
        title="Go to Food Safety"
        color="#869471"
        onPress={() => navigation.navigate("FoodSafety")}
      />
      <Button title="Go to Vets"  color="#869471"onPress={() => navigation.navigate("Vets")} />
      <Button
        title="View events"
        color="#869471"
        onPress={() => navigation.navigate("Events")}
        />
      <Button
        title="Go to Home"
        color="#869471"
        onPress={() => navigation.navigate("Welcome")}
      />
      <Button title="Go back" color="#869471" onPress={() => navigation.goBack()} />
    </SafeAreaView>
    </View>
    </ScrollView>
  );
}
