import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView, ScrollView , Image} from 'react-native'
import { styles } from '../styles'
import { ButtonStyles } from '../components/WelcomePage/MainButtonsStyle'
import {Event} from '../components/scraperPages/eventComponent'
import { WelcomeBannerStyle } from '../components/WelcomePage/WelcomeBanner/WelcomeBannerStyle';
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
    <SafeAreaView style={WelcomeBannerStyle.container}>
    <ScrollView>
    <Image style={WelcomeBannerStyle.image} source={require('../../assets/NFRSlogo.png')}/>
    <View>
    <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonTextLarge} >Upcoming Events:</Text>
      </View>
      <ScrollView>
        {loading ? (
          <View style={ButtonStyles.button}>
          <Text style={ButtonStyles.buttonText}>loading...</Text>
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
