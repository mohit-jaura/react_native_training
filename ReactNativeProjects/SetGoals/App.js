import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Your Goal!" style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingLeft: 5,
    marginRight: 8,
    width: '80%',
  },
});

export default App;
