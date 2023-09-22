import React from 'react'
import {Text, StyleSheet, View} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Toast from 'react-native-toast-message';

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
                <Stack.Screen name='productdetails' component={ProductDetails}></Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
        
        <Toast position='top' topOffset={40}  />
    </NavigationContainer>
    

   
    
  )
}

export default Main