import { useState } from 'react';
import { Alert, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { WelcomeBanner } from '../components/WelcomePage/WelcomeBanner/WelcomeBanner';
import { LoginStyle } from '../components/LogInPage/LoginStyle';
import { styles } from '../styles';

export function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  //  const AuthContext = React.createContext();
  //  const { signIn } = React.useContext(AuthContext);
  
  const signIn  = (email, password) => {
    setLoading(true);
    if (!email || !password) {
      alert('Please enter your email and password')
      setLoading(false);
      return;
    }
    console.log(JSON.stringify({"email": email, "password": password}))
    
    fetch("http://localhost:8000/users/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"email": email, "password": password})
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
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={LoginStyle.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* <Button title="Sign in" onPress={() => signIn({ email, password })} /> */}
      <TouchableOpacity
        style={LoginStyle.LogInButton}
        title="Log In"
        onPress={() => signIn(email, password)}
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