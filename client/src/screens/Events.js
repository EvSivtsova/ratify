import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../styles'
import {Event} from '../../assets/components/eventComponent'
export function Events ({ navigation }) {

  const [loading, setLoading]= useState([])
  const [data, setData] = useState([])
  const [pet, setPet]= useState('Rats')
  
  React.useEffect(() => {
    fetch('http://localhost:8000/events').then((response) => response.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
    .catch((error) => console.log(error))
  }, [])

  const Events = () => {
    setLoading(true)
    fetch('http://localhost:8000/events').then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }

     const guineaEvents = () => {
      setLoading(true)
      fetch('http://localhost:8000/guineaevents').then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }


    const combinedFunction = (value) => {
      console.log(value);
      setPet(value);
      (value == 'Rats')? Events() : guineaEvents();
    }

  const renderEvent= () => {
    return data.map((event, index)=> {
      return <Event key={index} data={event}/>
    })
  }

  switch (pet){
    case 'Rats':
  return (
    <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.largeText} >Upcoming  Rat Events:</Text>
      <ScrollView>
        {loading ? (
          <Text style={styles.normalText}>loading...</Text>
          ):
          <></>}
      {renderEvent()}
      </ScrollView>
      {(pet != 'Rats') ? <Button title="Rats" onPress={()=>combinedFunction('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button title="Guinea Pigs" onPress={()=>combinedFunction('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button title="Tigers" onPress={()=>combinedFunction('Tigers')}/> : <></>}
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  )
  break;
  case 'Guinea pigs':
    return (
      <SafeAreaView style={styles.SafeArea}>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.largeText} >Upcoming Guinea Pig Events:</Text>
        <ScrollView>
          {loading ? (
            <Text style={styles.normalText}>loading...</Text>
            ):
            <></>}
        {renderEvent()}
        </ScrollView>
        {(pet != 'Rats') ? <Button title="Rats" onPress={()=>combinedFunction('Rats')}/> : <></>}
        {(pet != 'Guinea pigs') ? <Button title="Guinea Pigs" onPress={()=>combinedFunction('Guinea pigs')}/> : <></> }
        {(pet != 'Tigers') ? <Button title="Tigers" onPress={()=>combinedFunction('Tigers')}/> : <></>}
        <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      </ScrollView>
            </SafeAreaView>
    )
    break;
    case '':
    return (
      <SafeAreaView style={styles.SafeArea}>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.largeText} >Events:</Text>
        {(pet != 'Rats') ? <Button title="Rats" onPress={()=>combinedFunction('Rats')}/> : <></>}
        {(pet != 'Guinea pigs') ? <Button title="Guinea Pigs" onPress={()=>combinedFunction('Guinea pigs')}/> : <></> }
        {(pet != 'Tigers') ? <Button title="Tigers" onPress={()=>combinedFunction('Tigers')}/> : <></>}
        <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      </ScrollView>
            </SafeAreaView>
    )
    break;
    case 'Tigers':
  return (
    <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.largeText} >Upcoming  Tiger Events:</Text>
      <Text  >No events, too scary!!</Text>
      {(pet != 'Rats') ? <Button title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  )
  break;
        }
}
