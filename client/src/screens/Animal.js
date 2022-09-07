import React, { useState } from 'react';
import { Text, View, Button, ListItem, SafeAreaView, ScrollView } from "react-native";
import { styles } from "../styles";
import {AnimalDetails} from "../animalDetails"

export function Animal({ navigation }) {

  const [pet, setPet] = useState('');
  const [animals, setAnimals] = useState([]);
  const chosenAnimal = 'Rats';
  
  const localIP = process.env.SERVER_ADDRESS || '10.64.0.232'

const renderDetails = () => {
  return animals.map((animal, index)=> {
    return <AnimalDetails key={index} data={animal}/>
  })
}

React.useEffect(() => {
  fetch(`http://localhost:8000/animals/find?chosen=${chosenAnimal}`).then((response) => response.json())
    .then((data) => {
      setAnimals(data)
    })
    .catch((error) => console.log(error))
}, [])


  return (
    <ScrollView>
    <View style={styles.container}>
    <SafeAreaView>

      {renderDetails()}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
    </View>
    </ScrollView>
  );
}
