import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
const StartGameScreen = ({onConfirmNumber}) => {
  const [enteredNumber, setEnteredNunber] = useState('');
  function numberInputHandler(enteredText) {
    setEnteredNunber(enteredNumber);
  }

  function confirmInputHandler() {
    // eslint-disable-next-line radix
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      // show alert
      Alert.alert(
        'Invalid Number!',
        'Number has to a number between 1 and 99.',
        [{text: 'Okay', style: 'cancel', onPress: resetHandler}],
      );
      return;
    }
    onConfirmNumber(choosenNumber);
  }
  function resetHandler() {
    setEnteredNunber('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textField}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 14,
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  textField: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 1,
    borderRadius: 10,
    color: '#ddb52f',
    paddingVertical: 3,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
