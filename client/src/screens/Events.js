import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../styles'
import {Event} from '../../assets/components/eventComponent'

export function Events ({ navigation }) {

  const [loading, setLoading]= useState([])

  const [data, setData] = useState([])
  React.useEffect(() => {
    fetch('http://localhost:8080/events').then((response) => response.json())
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
    <ScrollView>
    <View style={styles.container}>
      <Text>Upcoming Events:</Text>
      {/* {data && (<Text style={{ flex: 1, flexDirection: 'row' }}>{data.map((event)=> {
        <Text>{event}</Text>
      })}</Text>)} */}
      {/* {data && (<Text style={{ flex: 1, flexDirection: 'row' }}>{data[6].event}</Text>)} */}

      <ScrollView>
        {loading ? (
          <Text>loading...</Text>
      ):
      <></>}
      {renderEvent()}
      </ScrollView>

      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
  )
}
