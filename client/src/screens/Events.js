import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../styles'

export function Events ({ navigation }) {
  const [data, setData] = useState('')
  React.useEffect(() => {
    fetch('http://localhost:8080/events').then((response) => response.json())
      .then((data) => {
        setData(JSON.stringify(data))
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>Upcoming Events:</Text>
      {data && (<Text style={{ flex: 1, flexDirection: 'row' }}>{data}</Text>)}
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </ScrollView>
  )
}
