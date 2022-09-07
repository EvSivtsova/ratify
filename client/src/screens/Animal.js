import React, { useState } from 'react';
import { Text, View, Button, ListItem } from "react-native";
import { styles } from "../styles";

export function Animal({ navigation }) {

  const [pet, setPet] = useState();
  const [animals, setAnimals] = useState([]);
  let animalToDisplay;

  console.log('before')
  
  const localIP = process.env.SERVER_ADDRESS || '10.64.0.232'

  React.useEffect(() => {
    console.log('in')
    fetch(`http://${localIP}:8000/animals/find`).then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAnimals(data)
      })
      .then(() => {
        animalToDisplay = animals.find(animal => animal.animal === pet)
        console.log(animalToDisplay)
      })
      .catch((error) => console.log(error))
  }, [])

  const relatedAnimals = animals.map(animal => animal.order === animalToDisplay.order)

  return (
    <View style={styles.container}>
      <Text>{animalToDisplay}</Text>
      <Text>{animalToDisplay.description}</Text>
      <Text>How to take care of {animalToDisplay}:</Text>
      <Text>{animalToDisplay.careInfo}</Text>
      <Text>Non toxic plants:</Text>
      <Text>{animalToDisplay.nonToxicPlants}</Text>
      <Text>Related animals:</Text>
      
      {relatedAnimals.map((animal, i) => {
        <ListItem button  
          key={i} 
          title={animal}
          onPress={() => setPet({animal})}/>
      })}
      <Text>{relatedAnimals}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
