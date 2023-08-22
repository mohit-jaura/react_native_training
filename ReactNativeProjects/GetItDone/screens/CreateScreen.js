import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import InputField from '../components/InputField';
import IconButton from '../components/IconButton';
import {useState} from 'react';

function CreateScreen({saveButtonHandler, cancelButtonHandler}) {
  const [isCompleted, setIsCompleted] = useState(false);
  const iconName = isCompleted === false ? 'circle-thin' : 'check-circle-o';
  const iconColor = isCompleted === false ? 'black' : 'green';
  const [descriptionLength, setDescriptionLength] = useState(0);
  function completedButtonHandler() {
    setIsCompleted(!isCompleted);
  }
  function descriptionChangeHandler(textString) {
    setDescriptionLength(textString.length);
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.containerView}>
        <View style={styles.inputFields}>
          <InputField
            textInputConfig={{
              placeholder: 'Name',
              maxLength: 40,
              onChangeText: undefined,
            }}
          />
        </View>
        <View style={styles.inputFields}>
          <InputField
            textInputConfig={{
              placeholder: 'Description',
              multiline: true,
              maxLength: 200,
              onChangeText: descriptionChangeHandler,
            }}
          />
        </View>
        <View
          style={[
            styles.inputFields,
            {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text style={styles.text}>Completed</Text>
          <View style={{marginLeft: 5}}>
            <IconButton
              iconeName={iconName}
              iconSize={25}
              iconColor={iconColor}
              onPressHandler={completedButtonHandler}
            />
          </View>
        </View>
        <View
          style={[
            styles.inputFields,
            {
              flexDirection: 'row',
              paddingHorizontal: 10,
              justifyContent: 'center',
              marginTop: descriptionLength <= 100 ? 80 : 50,
            },
          ]}>
          <View style={styles.buttonView}>
            <Button title="Save" onPress={saveButtonHandler}></Button>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Cancel"
              onPress={cancelButtonHandler}
              color={'red'}></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CreateScreen;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    flex: 1,
  },
  containerView: {
    flex: 1,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },

  inputFields: {
    marginTop: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  buttonView: {
    width: '50%',
    paddingHorizontal: 10,
  },
});
