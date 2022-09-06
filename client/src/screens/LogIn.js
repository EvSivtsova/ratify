import { Text, View, Button } from "react-native";
import { styles } from "../styles";

export function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Log in</Text>
      <Button
        title="Go to Home"
        color="#869471"
        onPress={() => navigation.navigate("Welcome")}
      />
      <Button
        title="My profile"
        color="#869471"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button title="Animal" color="#869471" onPress={() => navigation.navigate("Animal")} />
      <Button title="Go back"  color="#869471" onPress={() => navigation.goBack()} />
    </View>
  );
}
