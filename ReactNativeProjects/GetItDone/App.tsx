/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

function App(): JSX.Element {

  const NavigationStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <NavigationStack.Navigator initialRouteName='HomeScreen'>
        <NavigationStack.Screen name='HomeScreen' component={HomeScreen} options={{title:'To Do'}} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
