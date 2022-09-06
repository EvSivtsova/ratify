import { StyleSheet } from 'react-native';

export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FBF4',
    justifyContent: 'center',
  },
  styleText: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.25,
    fontFamily: 'notoserif'
  },
  LogInButton: { 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 9,
    marginTop: 10,
    paddingVertical: 10,
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
  image: {
    // aspectRatio: 1.5,
    marginHorizontal: 9,
    marginTop: 30,
    paddingVertical: 30,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    height: 200, 
    resizeMode: 'contain'
  },
  inputStyle: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 9,
    marginTop: 4,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 4,
  }
})