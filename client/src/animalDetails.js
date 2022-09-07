import React from 'react'
import {View, Text, ScrollView, SafeAreaView} from 'react-native'

export  function AnimalDetails({data}){
  return (
    <View style={{
      
      // backgroundColor: '#a9a9a9',
      width: 320,
      backgroundColor: '#869471',
      borderColor: '#869471',
      borderWidth: 3,
      // justifyContent: 'center',
      borderRadius: 5
    }}>
      <Text style={{fontSize: 20}}>{data.animal}</Text>
      <Text>{data.description}</Text>
      <Text>{data.order}</Text>
      <Text>{data.careInfo}</Text>
      <Text>{data.nonToxicPlants}</Text>
      <Text></Text>
    </View>
  );
}