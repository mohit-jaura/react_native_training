import {StyleSheet, TextInput, View} from 'react-native';

function InputField({identifier, placeholder, textChangeHandler}) {
  return (
    <View style={styles.mainView}>
      <TextInput
        placeholder={placeholder}
        id={identifier}
        onChangeText={textChangeHandler}></TextInput>
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 8,
  },
});
