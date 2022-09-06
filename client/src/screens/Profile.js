import { Text, View, Button } from "react-native";
import { styles } from "../styles";

export function Profile({ navigation }) {
  // change name function ( on press generate form)
  // save name(on press read from form + save to db)
  //if buttonchange pressed :
  //  return ( html form generated)
  // elsif button save pressed :
  //  save name();
  return (
    <View style={styles.container}>
      <Text>My profile</Text>
      <Button
        title="Go to Home"
        color="#869471"
        onPress={() => navigation.navigate("Welcome")}
      />
      <Button title="Go back" color="#869471" onPress={() => navigation.goBack()} />
    </View>
  );
}
