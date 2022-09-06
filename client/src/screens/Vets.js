import React, { useState } from "react";
//import WebView
import { WebView } from "react-native-webview";
import map from "./map.html";
export function Vets({ navigation }) {
  return (
    <WebView
      style={{ flex: 1 }}
      originWhitelist={["*"]}
      source={map}
      style={{ marginTop: 20 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}
