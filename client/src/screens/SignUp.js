import { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView, } from 'react-native';
import { styles } from '../styles'
import { Formik, Form, Field } from 'formik';
import { WelcomeBanner } from '../components/WelcomePage/WelcomeBanner/WelcomeBanner';
import { LoginStyle } from '../components/LogInPage/LoginStyle';
// require('dotenv').config({ path: './config.env' });
// import {process.env.API} from '../config';
// import { API } from '../../assets/components/config.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export function SignUp({ navigation }) {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values) {
    setLoading(true);
    if (!values.email || !values.password || !values.firstName || !values.lastName) {
      alert('Please enter email, password and your first and last names.')
      setLoading(false);
      return;
    }
    try {
      console.log('submitting')
      const newUser = values;
      console.log(newUser);
    
      await fetch(`http://localhost:8000/users/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
          setLoading(false);
        } else { 
          AsyncStorage.setItem('@auth', JSON.stringify(data));
          setLoading(false);
          navigation.navigate('Animal');
        }
      })
    } catch(error) {
      alert('Oups!! Something went wrong. Try again')
      console.log(error);
      setLoading(false);
    }
  }
 
  return (
   <View style={LoginStyle.container}>
    <ScrollView>
    <WelcomeBanner/>
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          animal: '',
        }}
        onSubmit={onSubmit}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            style={LoginStyle.inputStyle}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="myemail@ratify.com"
            />

          <TextInput
            style={LoginStyle.inputStyle}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Password123$"
            secureTextEntry={true}
            />

          <TextInput
            style={LoginStyle.inputStyle}
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            placeholder="Your first name"
            />    

          <TextInput
            style={LoginStyle.inputStyle}
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            placeholder="Your last name"
          />

          <Text>Choose your fave:</Text>     
          <TextInput
            style={LoginStyle.inputStyle}
            value={values.animal}
            onChangeText={handleChange('animal')}
            onBlur={handleBlur('animal')}
            placeholder="Rats, Guinea pigs or Tigers"
          />

          <TouchableOpacity
            style={LoginStyle.LogInButton}
            title="Sign Up"
            onPress={handleSubmit}
            loading={loading}
          >
          <Text style={LoginStyle.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      )}
      </Formik>
      <Button title="Log in" color="#869471" onPress={() => navigation.navigate('LogIn')} />
      </ScrollView>
    </View>
  );
}
