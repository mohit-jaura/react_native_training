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
import MealOverviewScreen from './screens/MealOverviewScreen';

const NavigationStack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator initialRouteName='CategoriesScreen' screenOptions={{headerBackTitleVisible: false}}>
        <NavigationStack.Screen name='MealsCategory' component={CategoriesScreen}/>
        <NavigationStack.Screen name='MealOverview' component={MealOverviewScreen} options={{title:'Meal Overview'}}/>
      </NavigationStack.Navigator>
    </NavigationContainer>

  );
}


export default App;
