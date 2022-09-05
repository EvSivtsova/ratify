import { Text, View, Button } from "react-native";
import { styles } from "../styles";

export function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Welcome")}
      />
      <Button
        title="My profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button title="Animal" onPress={() => navigation.navigate("Animal")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
