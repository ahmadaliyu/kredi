import React from "react";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import Login from "@/screens/auth/Login";

const Stack = createStackNavigator();

type AuthStackParamList = {
  Login: undefined;
};

export type AuthStackNavigationProp = StackNavigationProp<AuthStackParamList>;

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
