import React from 'react';
import { Alert, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { WelcomeBanner } from '../components/WelcomePage/WelcomeBanner/WelcomeBanner';
import { LoginStyle } from '../components/LogInPage/LoginStyle';
import { styles } from '../styles';

export function LogIn({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

//  const AuthContext = React.createContext();
//  const { signIn } = React.useContext(AuthContext);

  const signIn  = (username, password) => {
    console.log(JSON.stringify({"username": username, "password": password}))
    // refactor the server ip / name
    fetch("http://192.168.1.11:8000/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"username": username, "password": password})
    })
    .then((response) => response)
    .then((data) => {console.log(data); Alert.alert(`Success ${data}`)})
    .catch((error) => {Alert.alert(`Error ${error}`)});
  }
  
  return (
    <View style={LoginStyle.container}>
      <WelcomeBanner/>
      <TextInput
        style={LoginStyle.inputStyle}
        placeholder="Email Address"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={LoginStyle.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* <Button title="Sign in" onPress={() => signIn({ username, password })} /> */}
      <TouchableOpacity
        style={LoginStyle.LogInButton}
        title="Log In"
        onPress={() => signIn(username, password)}
      >
        <Text style={LoginStyle.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={LoginStyle.styleText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}