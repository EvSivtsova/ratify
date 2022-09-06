import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { styles } from '../styles'

export function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
      <Text style={styles.largeText}>Home Screen Screen</Text>
      <Button
        title="SignUp"
        color="#869471"
        onPress={() => navigation.navigate('SignUp')}
        />
      <Button
        title="LogIn"
        color="#869471"
        onPress={() => navigation.navigate('LogIn')}
        />
      <StatusBar style="auto" />
        </SafeAreaView>
    </View>
  );
}
