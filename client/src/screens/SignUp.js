import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from '../styles'
import { Formik, Form, Field } from 'formik';
// import { Picker } from '@react-native-community/picker'
 
export function SignUp({ navigation }) {

  async function onSubmit(values) {
    console.log('submitting')
    const newUser = values;
    console.log(newUser);
    const localIP = process.env.SERVER_ADDRESS || '10.64.0.232'

    await fetch(`http://${localIP}:8000/users/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    .then(res => res.json())
    .catch(error => {
      alert(error);
      return;
    })
    .then(response => console.log('Success:', response))
 }
 
 return (
   <View style={styles.container}>
      <Text>Sign Up</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          animal: '',
        }}
        onSubmit= {onSubmit}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Text>Email:</Text>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="myemail@email.com"
            />

          <Text>Password:</Text>
          <TextInput
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Password"
            secureTextEntry={true}
            />

          <Text>First name:</Text>
          <TextInput
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            placeholder="First Name"
            />    

          <Text>Last name:</Text>     
          <TextInput
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            placeholder="Last Name"
          />

        <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
      </Formik>

     <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
     <Button title="My profile" onPress={() => navigation.navigate('Profile')} />
     <Button title="Animal" onPress={() => navigation.navigate('Animal')} />
     <Button title="Go back" onPress={() => navigation.goBack()} />
   </View>
 );
}
