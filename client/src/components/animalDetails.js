import React from 'react'
import {View, Text, ScrollView, SafeAreaView} from 'react-native'
import { ButtonStyles } from './WelcomePage/MainButtonsStyle';

export  function AnimalDetails({data}){
  return (
    <View>
      <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonTextLarge}>{data.animal}</Text>
      </View>
    <View style={ButtonStyles.button}>
      <Text></Text>
      <Text style={ButtonStyles.buttonText}>{data.description}</Text>
      <Text></Text>
      <Text style={ButtonStyles.buttonTextLarge}>Order</Text>
      <Text style={ButtonStyles.buttonText}>{data.order}</Text>
      <Text></Text>
      <Text style={ButtonStyles.buttonTextLarge}>Care information</Text>
      <Text></Text>
      <Text style={ButtonStyles.buttonText}>{data.careInfo}</Text>
    </View>
    </View>
  );
}