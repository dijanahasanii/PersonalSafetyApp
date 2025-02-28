import React from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import EmergencyContactsScreen from "./app/(tabs)/contacts"; // Ensure the correct path


enableScreens();

// Define the navigation type
type RootStackParamList = {
  EmergencyContacts: undefined;
  ContactDetails: { contact: { id: string; name: string; phone: string; email: string; address: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <LinearGradient colors={["#121212", "#1a1a1a"]} style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="EmergencyContacts" component={EmergencyContactsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}
