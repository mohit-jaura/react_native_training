/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

function App(): JSX.Element {

  const NavigationStack = createNativeStackNavigator();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <NavigationStack.Navigator initialRouteName='HomeScreen'>
        <NavigationStack.Screen name='HomeScreen' component={HomeScreen} options={{title:'To Do'}} />
      </NavigationStack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
