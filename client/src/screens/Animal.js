import { Text, View, Button } from 'react-native';
import { styles } from '../styles'

export function Animal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>My profile</Text>
      <Button title="Go to Food Safety" onPress={() => navigation.navigate('FoodSafety')} />
      <Button title="Go to Vets" onPress={() => navigation.navigate('Vets')} />
      <Button title="View events" onPress={() => navigation.navigate('Events')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}