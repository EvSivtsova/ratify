import { List } from "react-native-paper";
import { Button, Text } from "react-native";
import React, { useState } from "react";

export function Vets({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <List.Accordion
        title="Vets"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <Text
          style="text-indent: 50px;
  text-align: justify;
  letter-spacing: 3px;"
        >
          Find an exotic pet vet near you that. There are vets that treat a
          large variety of exotics pets including small mammals, birds,
          reptiles, invertebrate, amphibians and fish.
        </Text>

        <Button
          title="Location"
          onPress={() => navigation.navigate("VetsMap")}
        />
      </List.Accordion>

      <List.Accordion
        title="Pet Shops"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <Text
          style="text-indent: 50px;
  text-align: justify;
  letter-spacing: 3px;"
        >
          Find an exotic pet shop near you that. There are shopss that sellitems
          for a large variety of exotics pets including small mammals, birds,
          reptiles, invertebrate, amphibians and fish.
        </Text>

        <Button
          title="Location"
          onPress={() => navigation.navigate("ShopsMap")}
        />
      </List.Accordion>
    </List.Section>
  );
}
