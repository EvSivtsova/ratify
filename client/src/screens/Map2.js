import { WebView } from "react-native-webview";
import map2 from "./maps2.html";

export function LoadMap2({ navigation }) {
  return (
    <WebView
      style={{ flex: 1 }}
      originWhitelist={["*"]}
      source={map2}
      style={{ marginTop: 20 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}
