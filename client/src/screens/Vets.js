import { List } from "react-native-paper";
import { TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { LoginStyle } from "../components/LogInPage/LoginStyle";

export function Vets({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <Text style={LoginStyle.header}>Pet Services</Text>
      <List.Accordion
        style={LoginStyle.buttonText}
        title="Vets"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <Text style={LoginStyle.LogInButton}>
          Find an exotic pet vet near you that. There are vets that treat a
          large variety of exotics pets including small mammals, birds,
          reptiles, invertebrate, amphibians and fish.
        </Text>

        <TouchableOpacity
          style={LoginStyle.LogInButton}
          title="Location"
          onPress={() => navigation.navigate("VetsMap")}
        >
          <Text style={LoginStyle.buttonText}>Location</Text>
        </TouchableOpacity>
      </List.Accordion>

      <List.Accordion
        style={LoginStyle.buttonText}
        title="Pet Shops"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <Text style={LoginStyle.LogInButton}>
          Find an exotic pet shop near you that. There are shopss that sellitems
          for a large variety of exotics pets including small mammals, birds,
          reptiles, invertebrate, amphibians and fish.
        </Text>

        <TouchableOpacity
          style={LoginStyle.LogInButton}
          title="Location"
          onPress={() => navigation.navigate("ShopsMap")}
        >
          <Text style={LoginStyle.buttonText}>Location</Text>
        </TouchableOpacity>
      </List.Accordion>
    </List.Section>
  );
}
