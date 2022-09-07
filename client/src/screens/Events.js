import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../styles'
import {Event} from '../components/scraperPages/eventComponent'
export function Events ({ navigation }) {

  const [loading, setLoading]= useState([])
  const [data, setData] = useState([])
  
  React.useEffect(() => {
    fetch('http://localhost:8000/events').then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])
  
  const renderEvent= () => {
    return data.map((event, index)=> {
      return <Event key={index} data={event}/>
    })
  }

  return (
    <SafeAreaView style={styles.SafeArea}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.largeText} >Upcoming Events:</Text>
      <ScrollView>
        {loading ? (
          <Text style={styles.normalText}>loading...</Text>
          ):
          <></>}
      {renderEvent()}
      </ScrollView>
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  )
}
