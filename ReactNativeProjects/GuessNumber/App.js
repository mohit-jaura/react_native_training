import React, {useState} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
const App = () => {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function homeScreen({navigation}) {
    return (
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/guessNumberBackground.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backGroundImage}>
          <StartGameScreen
            navigation={navigation}
            onConfirmNumber={pickedNumberHandler}
          />
        </ImageBackground>
      </LinearGradient>
    );
  }

  //Screen to Screen navigation
  // const Stack = createNativeStackNavigator();
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="StartGame">
  //       <Stack.Screen name="StartGame" component={homeScreen} />
  //       <Stack.Screen name="GameScreen" component={GameScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  // Bottom tab bar navigation
  // const BottomTab = createBottomTabNavigator();
  // return (
  //   <NavigationContainer>
  //     <BottomTab.Navigator
  //       initialRouteName="Start Game"
  //       screenOptions={({route}) => ({
  //         headerStyle: {backgroundColor: '#42f44b'},
  //         headerTintColor: '#fff',
  //         headerTitleStyle: {fontWeight: 'bold'},
  //         tabBarActiveTintColor: 'tomato',
  //         tabBarInactiveTintColor: 'gray',
  //       })}>
  //       <BottomTab.Screen
  //         name="StartGame"
  //         component={StartGameScreen}
  //         options={{tabBarLabel: 'Start Game'}}
  //       />
  //       <BottomTab.Screen
  //         name="GameScreen"
  //         component={GameScreen}
  //         options={{tabBarLabel: 'Game Screen'}}
  //       />
  //     </BottomTab.Navigator>
  //   </NavigationContainer>
  // );
  // Top tab bar navigation
  // const TopTab = createMaterialTopTabNavigator();
  // return (
  //   <NavigationContainer>
  //     <TopTab.Navigator
  //       initialRouteName="Start Game"
  //       screenOptions={({route}) => ({
  //         headerStyle: {backgroundColor: '#42f44b'},
  //         headerTintColor: '#fff',
  //         headerTitleStyle: {fontWeight: 'bold'},
  //         tabBarActiveTintColor: 'tomato',
  //         tabBarInactiveTintColor: 'gray',
  //       })}>
  //       <TopTab.Screen
  //         name="StartGame"
  //         component={StartGameScreen}
  //         options={{tabBarLabel: 'Start Game'}}
  //       />
  //       <TopTab.Screen
  //         name="GameScreen"
  //         component={GameScreen}
  //         options={{tabBarLabel: 'Game Screen'}}
  //       />
  //     </TopTab.Navigator>
  //   </NavigationContainer>
  // );

  // Drawer navigation
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="StartGame">
        <Drawer.Screen name="StartGame" component={StartGameScreen} />
        <Drawer.Screen name="GameScreen" component={GameScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backGroundImage: {
    opacity: 0.15,
  },
});
