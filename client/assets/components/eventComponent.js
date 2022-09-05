import React from 'react'
import {View, Text} from 'react-native'

export  function Event({data}){
  return (
    <View>
      <Text>{data.event}</Text>
    </View>
  );
}
