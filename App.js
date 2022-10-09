import React from 'react'
import FirstPage from './screens/FirstPage'
import Login from './screens/Login'
import Register from './screens/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import ModifyCar from './screens/ModifyCar';
import AddCar from './screens/AddCar';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ModifyCar" component={ModifyCar} />
      <Stack.Screen name="AddCar" component={AddCar} />
    </Stack.Navigator>}
    </NavigationContainer>
  )
}