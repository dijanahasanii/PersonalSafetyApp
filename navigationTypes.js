import { StackNavigationProp } from "@react-navigation/stack";

// Define the type for your navigation stack
export type RootStackParamList = {
  Home: undefined;
  SOS: undefined;
  Contacts: undefined;
  Status: undefined;
  LocationSharing: undefined;
};

// Define the navigation prop type for the HomeScreen
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;