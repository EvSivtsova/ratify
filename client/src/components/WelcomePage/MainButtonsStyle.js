import { StyleSheet } from 'react-native';

export const ButtonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F4FBF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 9,
    marginTop: 30,
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 3,
    backgroundColor: '#89A588',
  },
  buttonText: {
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontSize: 18,
  },
})