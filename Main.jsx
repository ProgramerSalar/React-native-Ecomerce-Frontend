import React from 'react'
import {Text, StyleSheet, View} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';


const Stack = createNativeStackNavigator()


function Main() {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
            headerShown:false   // header is not show 
        }}
        >
            <Stack.Group>
                <Stack.Screen name='home' component={Home}></Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
    

   
    
  )
}

export default Main