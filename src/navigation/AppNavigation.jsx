import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { AppNavigation as NewScr } from "react-native-sdk-leads";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Promo" options={{ headerShown: false }}  component={NewScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
