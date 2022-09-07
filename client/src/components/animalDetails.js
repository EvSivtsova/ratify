import React from 'react'
import {View, Text, ScrollView, SafeAreaView} from 'react-native'
import { ButtonStyles } from './WelcomePage/MainButtonsStyle';

export  function AnimalDetails({data}){
  return (
    <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonText}>{data.animal}</Text>
      <Text></Text>
      <Text style={ButtonStyles.buttonText}>{data.description}</Text>
      <Text></Text>
      <Text style={ButtonStyles.buttonText}>Order</Text>
      <Text style={ButtonStyles.buttonText}>{data.order}</Text>
      <Text></Text>
      <Text style={ButtonStyles.buttonText}>Care information</Text>
      <Text></Text>
      <Text style={ButtonStyles.buttonText}>{data.careInfo}</Text>
      {/* <Text style={{textDecorationLine: 'underline'}}>Non-toxic plants</Text>
      <Text></Text>
      <Text>{data.nonToxicPlants.forEacjh}</Text>
      <Text></Text> */}
    </View>
  );
}