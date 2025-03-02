import React from "react";
import { View } from "react-native";
import MapComponent from "./MapComponent"; // Import the MapComponent

export default function MapScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapComponent />
    </View>
  );
}
