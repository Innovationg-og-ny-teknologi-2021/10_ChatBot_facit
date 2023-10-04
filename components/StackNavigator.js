import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import ChatScreen from "./ChatScreen";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack=createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="home" component={HomeScreen} 
        options={{headerShown:false}} />
        <Stack.Screen name="chat" component={ChatScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}