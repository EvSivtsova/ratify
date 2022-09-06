import { WebView } from "react-native-webview";
import { Text } from "react-native";
import map1 from "./maps.html";
const names = [];
export function LoadMap1({ navigation }) {
  fetch(
    "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=coffee&userLocation=47.602038,-122.333964&key=Aqldnwj5FAF0Q1iTK2e8ua4aTj92NXWXN8LlkB30XMVeZ82zvknfcDR41QQxmIw5"
  )
    .then((x) => x.json())
    .then((y) => {
      const lon = JSON.stringify(
        y.resourceSets[0].resources[0].point.coordinates[0],
        null,
        2
      );
      const lat = JSON.stringify(
        y.resourceSets[0].resources[0].point.coordinates[1],
        null,
        2
      );
      const name = JSON.stringify(y.resourceSets[0].resources[0].name, null, 2);
      names.push(name, lon, lat);
      console.log(name, lon, lat);
      console.log(names);
    });

  return (
    <WebView
      style={{ flex: 1 }}
      originWhitelist={["*"]}
      source={map1}
      style={{ marginTop: 20 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    >
      <Text>Vets: {names[0]}</Text>
    </WebView>
  );
}
