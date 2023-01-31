import React, {useState} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartGame">
        <Stack.Screen name="StartGame" component={homeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
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
