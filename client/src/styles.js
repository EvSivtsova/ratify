import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F4FBF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
      height: 40,
      margin: 6,
      width: 200,
      borderWidth: 1,
      padding: 10,
      borderRadius:7
  },
  eventContainer: {
      width: 320,
      backgroundColor: '#869471',
      borderColor: '#869471',
      borderWidth: 3,
      // justifyContent: 'center',
      borderRadius: 5
  },
  SafeArea: {
    flex: 1,
    backgroundColor: '#F4FBF4',
  },
  normalText:{
    fontSize: 16, fontFamily: 'Helvetica', fontStyle: 'normal'
  },
  largeText:{
    fontSize: 20, fontFamily: 'Helvetica-Bold ', fontStyle: 'normal'
  },
  navigationButton:{
    
  }
});