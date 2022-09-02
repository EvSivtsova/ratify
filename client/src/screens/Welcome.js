import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { styles } from '../styles'

export function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen Screen</Text>
      <Button
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="LogIn"
        onPress={() => navigation.navigate('LogIn')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
