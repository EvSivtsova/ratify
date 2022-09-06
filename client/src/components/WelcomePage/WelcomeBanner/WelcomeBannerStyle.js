import { StyleSheet } from 'react-native';

export const WelcomeBannerStyle = StyleSheet.create({
  container: {
    // flex: '1',
    // backgroundColor: '#F4FBF4',
    // marginHorizontal: 9,
    // marginTop: 30,
    // paddingVertical: 30,
    // paddingHorizontal: 50,
    // borderRadius: 5,
    // marginBottom: 10,
    // elevation: 3,
    // fontSize: 16,
    backgroundColor: '#F4FBF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 35,
    letterSpacing: 0.25,
    color: '#89A588',
    fontFamily: 'notoserif'
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
  }
})