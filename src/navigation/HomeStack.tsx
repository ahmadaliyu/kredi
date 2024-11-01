import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Platform } from "react-native";
import HomeScreen from "@/screens/main/Home";
import SelectBank from "@/screens/main/SelectBank";
import { RootStackParamList } from "@/interfaces/types";
import EnterAmount from "@/screens/main/EnterAmount";
import EnterPin from "@/screens/main/EnterPin";
import SuccessScreen from "@/screens/main/SuccessScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SelectBank" component={SelectBank} />
      <Stack.Screen name="EnterAmount" component={EnterAmount} />
      <Stack.Screen name="EnterPin" component={EnterPin} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
}
