import React, {useEffect, useState} from 'react'
import { Text, View, Button, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { styles } from '../styles'
import {Food} from '../components/scraperPages/foodComponent';
import { ButtonStyles } from '../components/WelcomePage/MainButtonsStyle';
import { WelcomeBannerStyle } from '../components/WelcomePage/WelcomeBanner/WelcomeBannerStyle';
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

    const search = () => {
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
    <Image style={WelcomeBannerStyle.image} source={require('../../assets/rat.png')}/>
    <View style={styles.container}>
      <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonTextLarge}>Rat Food Checker:</Text>
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
      {(pet != 'Rats') ? <Button color="#869471" title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button color="#869471" title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button color="#869471" title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
      <Button   color="#869471" title="Go to Home" onPress={() => navigation.navigate('Animal')} />
      <Button  color="#869471" title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  );
  break;
  case 'Guinea pigs':
    return (
      <SafeAreaView style={styles.SafeArea}>
      <ScrollView>
      <Image style={WelcomeBannerStyle.image} source={require('../../assets/guineaPig.png')}/>
      <View style={styles.container}>
        <View style={ButtonStyles.button}>
        <Text style={ButtonStyles.buttonTextLarge}>Guinea Pig Food Checker:</Text>
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
          onPress={() => guineaSearch()}
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
        {(pet != 'Rats') ? <Button color="#869471" title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
        {(pet != 'Guinea pigs') ? <Button color="#869471" title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
        {(pet != 'Tigers') ? <Button color="#869471" title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
        <Button   color="#869471" title="Go to Home" onPress={() => navigation.navigate('Animal')} />
        <Button  color="#869471" title="Go back" onPress={() => navigation.goBack()} />
      </View>
      </ScrollView>
            </SafeAreaView>
    );
    break;
  case 'Tigers':
  return (
    <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
    <Image style={WelcomeBannerStyle.image} source={require('../../assets/tiger.png')}/>
    <View style={styles.container}>
      <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonTextLarge}>Tiger Food Checker:</Text>
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
       onPress={() => guineaSearch()}
     ><Text style={ButtonStyles.buttonText}>Search</Text>
       </TouchableOpacity>
     <SafeAreaView>
    <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonTextLarge}>Tigers can eat any meat</Text>
    </View>
    <Text></Text>
    </SafeAreaView>
      {(pet != 'Rats') ? <Button color="#869471" title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button color="#869471" title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button color="#869471" title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
      <Button   color="#869471" title="Go to Home" onPress={() => navigation.navigate('Animal')} />
      <Button  color="#869471" title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  );
  break;
        }
}
