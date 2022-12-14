import React, { useState } from 'react';
import { Text, View, Button, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import {AnimalDetails} from "../components/animalDetails"
import { ButtonStyles } from '../components/WelcomePage/MainButtonsStyle';
import { WelcomeBannerStyle } from '../components/WelcomePage/WelcomeBanner/WelcomeBannerStyle';

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
    {(pet == 'Rats') ? <Image style={WelcomeBannerStyle.image} source={require('../../assets/rat.png')}/>: <></>}
    {(pet == 'Guinea pigs') ? <Image style={WelcomeBannerStyle.image} source={require('../../assets/guineaPig.png')}/>: <></>}
    {(pet == 'Tigers') ? <Image style={WelcomeBannerStyle.image} source={require('../../assets/tiger.png')}/>: <></>}
      {renderDetails()}
      {(pet != 'Rats') ? <TouchableOpacity style={ButtonStyles.button} onPress={()=>setPet('Rats')}><Text style={ButtonStyles.buttonText}>Rats</Text></TouchableOpacity> : <></>}
      {(pet != 'Guinea pigs') ? <TouchableOpacity style={ButtonStyles.button} onPress={()=>setPet('Guinea pigs')}><Text style={ButtonStyles.buttonText}>Guinea Pigs</Text></TouchableOpacity> : <></> }
      {(pet != 'Tigers') ? <TouchableOpacity style={ButtonStyles.button} onPress={()=>setPet('Tigers')}><Text style={ButtonStyles.buttonText}>Tigers</Text></TouchableOpacity> : <></>}
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
        title="Logout"
        color="#869471"
        onPress={() => navigation.navigate("Welcome")}
      />
    </SafeAreaView>
    </View>
    </ScrollView>
  );
}
