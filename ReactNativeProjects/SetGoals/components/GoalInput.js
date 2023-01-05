import React, {useState} from 'react';
import {Button, TextInput, StyleSheet, View, Modal, Image} from 'react-native';

const GoalInput = props => {
  const [goalInput, setGoalInput] = useState(goalInput);

  const goalInputHandler = textInput => {
    setGoalInput(textInput);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(goalInput);
    setGoalInput('');
    props.hideModalHandler(false);
  };

  return (
    <Modal
      visible={props.showModal}
      animationType="slide"
      style={styles.modalContainer}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.imageView}
        />
        <TextInput
          placeholder="Enter Your Goal!"
          value={goalInput}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonView}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#009EFF" />
        </View>

        <View style={styles.buttonView}>
          <Button
            title="Cancel"
            onPress={() => {
              props.hideModalHandler(false);
            }}
            color="#009EFF"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    opacity: 0.5,
    width: '80%',
    height: '80%',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFF6',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },

  buttonView: {
    marginTop: 10,
  },

  imageView: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
