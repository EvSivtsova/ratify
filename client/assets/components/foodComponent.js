import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { styles } from '../../src/styles';

export  function Food({data}){
  return (
    <SafeAreaView>
    <View style={styles.eventContainer}>
      <Text>{data.foodName}</Text>
      <Text>{data.foodContent}</Text>
    </View>
    <Text></Text>
    </SafeAreaView>
  );
}
