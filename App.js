import React from 'react'
import FirstPage from './screens/FirstPage'
import Login from './screens/Login'
import Register from './screens/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>}
    </NavigationContainer>
  )
}