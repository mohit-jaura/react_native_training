import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textField} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 14,
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  textField: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderRadius: 10,
  },
});
