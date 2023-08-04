/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const NavigationStack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator initialRouteName='CategoriesScreen' screenOptions={{headerBackTitleVisible: false, animation:'fade'}}>
        <NavigationStack.Screen name='MealsCategory' component={CategoriesScreen} options={{title:'All Categories'}}/>
        <NavigationStack.Screen name='MealsOverviewScreen' component={MealsOverviewScreen}/>
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}

export default App;