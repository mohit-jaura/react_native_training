/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteMealsScreen from './screens/FavouriteMealsScreen';
import FavouritesContextProvider from './store/context/favourites-context';

const NavigationStack = createNativeStackNavigator();
const DrawerNavigator = createDrawerNavigator();

function DrawerNavigation() {
  return <DrawerNavigator.Navigator>
    <DrawerNavigator.Screen name='MealsCategory' component={CategoriesScreen} options={{title:'All Categories', drawerIcon: ({color, size}) => {
      return <Icon name='home' color={color} size={size} />
    }}} />
    <DrawerNavigator.Screen name='FavouritesScreen' component={FavouriteMealsScreen} options={{title:'Favourite Meals', drawerIcon: ({color, size}) => {
      return <Icon name='heart' color={color} size={size} />
    }}} />
  </DrawerNavigator.Navigator>
}
function App(): JSX.Element {
  return (
    <FavouritesContextProvider childern= { <NavigationContainer>
      <NavigationStack.Navigator initialRouteName='CategoriesScreen' screenOptions={{headerBackTitleVisible: false, animation:'fade', headerTitleStyle:{fontSize: 16}}}>
        <NavigationStack.Screen name='Drawer' component={DrawerNavigation} options={{title:'All Categories', headerShown: false}}/>
        <NavigationStack.Screen name='MealsOverviewScreen' component={MealsOverviewScreen}/>
        <NavigationStack.Screen name='MealDetailScreen' component={MealDetailScreen}/>
      </NavigationStack.Navigator>
    </NavigationContainer>}/>
  );
}

export default App;