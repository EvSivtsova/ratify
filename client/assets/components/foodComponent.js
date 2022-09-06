import React from 'react'
import {View, Text} from 'react-native'

export  function Food({data}){
  return (
    <View style={{
      // backgroundColor: '#a9a9a9',
      width: 320,
      borderColor: '#dcdcdc',
      borderWidth: 3,
      justifyContent: 'center',
      borderRadius: 5
    }}>
      <Text>{data.foodName}</Text>
      <Text>{data.foodContent}</Text>
    </View>
  );
}