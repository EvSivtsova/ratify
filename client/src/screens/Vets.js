import { List } from "react-native-paper";
import { Button } from "react-native";
import React, { useState } from "react";

export function Vets({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <List.Accordion
        title="List of Vets"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item title="Local Vets" />
        <Button title="Location" onPress={() => navigation.navigate("Map1")} />
      </List.Accordion>

      <List.Accordion
        title="List of Pet Shops"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item title="Local Pet Stores" />
        <Button title="Location" onPress={() => navigation.navigate("Map2")} />
      </List.Accordion>
    </List.Section>
  );
}
