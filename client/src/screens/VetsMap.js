import { WebView } from "react-native-webview";
import { Text } from "react-native";
import map1 from "./maps.html";

export function LoadMap1({ navigation }) {
  return (
    <WebView
      style={{ flex: 1 }}
      originWhitelist={["*"]}
      source={map1}
      style={{ marginTop: 20 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    ></WebView>
  );
}
