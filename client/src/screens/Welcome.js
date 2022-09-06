import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { WelcomeBanner } from '../components/WelcomePage/WelcomeBanner/WelcomeBanner';
import { ButtonStyles } from '../components/WelcomePage/MainButtonsStyle';
import { styles } from '../styles';

export function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
       <WelcomeBanner/>
      <View style={ButtonStyles.container}>
      <TouchableOpacity 
        style={ButtonStyles.button}
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={ButtonStyles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={ButtonStyles.button}
        title="Log In"
        onPress={() => navigation.navigate('LogIn')}
      >
        {<Text style={ButtonStyles.buttonText}>Sign Up</Text>}
      </TouchableOpacity>
      <StatusBar style="auto" />
        
      </View>
    </View>
  );
}
