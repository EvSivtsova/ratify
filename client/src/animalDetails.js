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
      <Text></Text>
      <Text style={{textDecorationLine: 'underline'}}>Animal Description</Text>
      <Text>{data.description}</Text>
      <Text></Text>
      <Text style={{textDecorationLine: 'underline'}}>Order</Text>
      <Text>{data.order}</Text>
      <Text></Text>
      <Text style={{textDecorationLine: 'underline'}}>Care information</Text>
      <Text>{data.careInfo}</Text>
      {/* <Text style={{textDecorationLine: 'underline'}}>Non-toxic plants</Text>
      <Text></Text>
      <Text>{data.nonToxicPlants.forEacjh}</Text>
      <Text></Text> */}
    </View>
  );
}