import React from 'react'
import {View, Text} from 'react-native'

export  function Event({data}){
  return (
    <View>
      <View style={{
        // backgroundColor: '#a9a9a9',
        width: 320,
        backgroundColor: '#869471',
        borderColor: '#869471',
        borderWidth: 3,
        // justifyContent: 'center',
        borderRadius: 5
      }}>
        <Text>{data.event}</Text>
      </View>
    <Text></Text>
    </View>
  );
}
