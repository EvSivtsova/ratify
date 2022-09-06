import React from 'react'
import {View, Text} from 'react-native'
import { styles } from '../../src/styles';

export  function Event({data}){
  return (
    <View>
      <View style={styles.eventContainer}>
        <Text style={{fontSize: 16}}>{data.event}</Text>
      </View>
    <Text></Text>
    </View>
  );
}
