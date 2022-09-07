import { StyleSheet } from 'react-native';

export const ButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FBF4',
    justifyContent: 'center',
  },
  button: { 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 9,
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 5,
    elevation: 3,
    backgroundColor: '#89A588'
  },
  buttonText: {
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontSize: 18,
  },
})
