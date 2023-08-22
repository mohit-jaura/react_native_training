import {StyleSheet, TextInput, View} from 'react-native';

function InputField({textInputConfig}) {
  return (
    <View style={styles.mainView}>
      <TextInput {...textInputConfig} />
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
