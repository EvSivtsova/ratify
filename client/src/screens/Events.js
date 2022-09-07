import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView, ScrollView , Image} from 'react-native'
import { styles } from '../styles'
import { ButtonStyles } from '../components/WelcomePage/MainButtonsStyle'
import {Event} from '../components/scraperPages/eventComponent'
import { WelcomeBannerStyle } from '../components/WelcomePage/WelcomeBanner/WelcomeBannerStyle';
export function Events ({ navigation }) {

  const [loading, setLoading]= useState([])
  const [data, setData] = useState([])
  const [pet, setPet]= useState('')
  
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
    <SafeAreaView style={WelcomeBannerStyle.container}>
    <ScrollView>
    <Image style={WelcomeBannerStyle.image} source={require('../../assets/NFRSlogo.png')}/>
    <View>
    <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonTextLarge} >Upcoming Rat Events:</Text>
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
      {(pet != 'Rats') ? <Button color="#869471" title="Rats" onPress={()=>combinedFunction('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button color="#869471" title="Guinea Pigs" onPress={()=>combinedFunction('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button color="#869471" title="Tigers" onPress={()=>combinedFunction('Tigers')}/> : <></>}
      <Button   color="#869471" title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button  color="#869471" title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  )
  break;
  case 'Guinea pigs':
    return (
      <SafeAreaView style={WelcomeBannerStyle.container}>
      <ScrollView>
      <Image style={WelcomeBannerStyle.image} source={require('../../assets/cropped-SCClogo-1.png')}/>
      <View>
      <View style={ButtonStyles.button}>
        <Text style={ButtonStyles.buttonTextLarge} >Upcoming Guinnea Pig Events:</Text>
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
        {(pet != 'Rats') ? <Button color="#869471" title="Rats" onPress={()=>combinedFunction('Rats')}/> : <></>}
        {(pet != 'Guinea pigs') ? <Button color="#869471" title="Guinea Pigs" onPress={()=>combinedFunction('Guinea pigs')}/> : <></> }
        {(pet != 'Tigers') ? <Button color="#869471" title="Tigers" onPress={()=>combinedFunction('Tigers')}/> : <></>}
        <Button   color="#869471" title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
        <Button  color="#869471" title="Go back" onPress={() => navigation.goBack()} />
      </View>
      </ScrollView>
            </SafeAreaView>
    )
    break;
    case '':
    return (
      <SafeAreaView style={WelcomeBannerStyle.container}>
      <ScrollView>
      <View>
      <View style={ButtonStyles.button}>
        <Text style={ButtonStyles.buttonTextLarge} >Upcoming Animal Events:</Text>
        </View>
        {(pet != 'Rats') ? <Button color="#869471" title="Rats" onPress={()=>combinedFunction('Rats')}/> : <></>}
        {(pet != 'Guinea pigs') ? <Button color="#869471" title="Guinea Pigs" onPress={()=>combinedFunction('Guinea pigs')}/> : <></> }
        {(pet != 'Tigers') ? <Button color="#869471" title="Tigers" onPress={()=>combinedFunction('Tigers')}/> : <></>}
        <Button   color="#869471" title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
        <Button  color="#869471" title="Go back" onPress={() => navigation.goBack()} />
      </View>
      </ScrollView>
            </SafeAreaView>
    )
    break;
    case 'Tigers':
  return (
    <SafeAreaView style={WelcomeBannerStyle.container}>
    <ScrollView>
    <Image style={WelcomeBannerStyle.image} source={require('../../assets/roaring-tiger-5044101.jpeg')}/>
    <View>
    <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonTextLarge} >Upcoming Animal Events:</Text>
      </View>
      <View style={ButtonStyles.button}>
        <Text style={ButtonStyles.buttonTextLarge}>No events, too scary!!</Text>
      </View>
      {(pet != 'Rats') ? <Button color="#869471" title="Rats" onPress={()=>setPet('Rats')}/> : <></>}
      {(pet != 'Guinea pigs') ? <Button color="#869471" title="Guinea Pigs" onPress={()=>setPet('Guinea pigs')}/> : <></> }
      {(pet != 'Tigers') ? <Button color="#869471" title="Tigers" onPress={()=>setPet('Tigers')}/> : <></>}
      <Button color="#869471" title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button color="#869471" title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
          </SafeAreaView>
  )
  break;
        }
}
