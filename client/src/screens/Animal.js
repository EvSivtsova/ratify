import { Text, View, Button } from "react-native";
import { styles } from "../styles";

export function Animal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>My profile</Text>
      <Button
        title="Go to Food Safety"
        color="#869471"
        onPress={() => navigation.navigate("FoodSafety")}
      />
      <Button title="Go to Vets"  color="#869471"onPress={() => navigation.navigate("Vets")} />
      <Button
        title="View events"
        color="#869471"
        onPress={() => navigation.navigate("Events")}
      />
      <Button
        title="Go to Home"
        color="#869471"
        onPress={() => navigation.navigate("Welcome")}
      />
      <Button title="Go back" color="#869471" onPress={() => navigation.goBack()} />
    </View>
  );
}
