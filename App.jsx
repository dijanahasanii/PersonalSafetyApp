import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { enableScreens } from "react-native-screens";

enableScreens();

export default function App() {
  return (
    <LinearGradient colors={["#121212", "#1a1a1a"]} style={{ flex: 1 }}>
      {/* Your app content */}
    </LinearGradient>
  );
}
