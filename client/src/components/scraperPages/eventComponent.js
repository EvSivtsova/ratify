import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { styles } from '../../styles';
import { ButtonStyles } from '../WelcomePage/MainButtonsStyle';

export  function Event({data}){
  return (
    <SafeAreaView>
      <View style={ButtonStyles.button}>
        <Text style={ButtonStyles.buttonText}>{data.event}</Text>
      </View>
    <Text></Text>
    </SafeAreaView>
  );
}
