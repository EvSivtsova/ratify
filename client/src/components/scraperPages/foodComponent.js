import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { styles } from '../../styles';
import { ButtonStyles } from '../WelcomePage/MainButtonsStyle';

export  function Food({data}){
  return (
    <SafeAreaView>
    <View style={ButtonStyles.button}>
      <Text style={ButtonStyles.buttonText}>{data.foodName}</Text>
      <Text style={ButtonStyles.buttonText}>{data.foodContent}</Text>
    </View>
    <Text></Text>
    </SafeAreaView>
  );
}
