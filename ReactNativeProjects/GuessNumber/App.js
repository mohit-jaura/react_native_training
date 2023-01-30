import React, {useState} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/guessNumberBackground.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}>
        {screen}
      </ImageBackground>
    </LinearGradient>
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
