import { Text, View, Button } from 'react-native';
import { styles } from '../styles'

export function Events({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>My profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}