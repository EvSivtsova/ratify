import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../styles'
import { ButtonStyles } from '../components/WelcomePage/MainButtonsStyle'
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
    <View>
    <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonText} >Upcoming Events:</Text>
      </View>
      <ScrollView>
        {loading ? (
          <View style={ButtonStyles.button}>
          <Text style={styles.normalText}>loading...</Text>
          </View>
          ):
          <></>}
      {renderEvent()}
      </ScrollView>
      <Button   color="#869471" title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button  color="#869471" title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  )
}
