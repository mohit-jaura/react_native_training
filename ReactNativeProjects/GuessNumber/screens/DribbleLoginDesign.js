import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '../components/PrimaryButton';

const InputField = props => {
  return (
    <TextInput
      style={styles.inputField}
      placeholder={props.placeholder}></TextInput>
  );
};

const DribbleLoginDesign = () => {
  return (
    <LinearGradient
      colors={['#0081C9', '#5BC0F8', '#ECF9FF']}
      style={styles.mainView}>
      <View style={styles.container}>
        <Text style={styles.heading}>Register Yourself</Text>
        <InputField placeholder="Name" />
        <InputField placeholder="Email" />
        <InputField placeholder="Mobile Number" />
        <InputField placeholder="Password" />
        <View style={styles.buttonsView}>
          <PrimaryButton color={'#4B56D2'}> Register</PrimaryButton>
          <Text style={styles.subHeading}>Already have an Account?</Text>
          <PrimaryButton color={'#4B56D2'}>Log In</PrimaryButton>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DribbleLoginDesign;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 35,
  },
  subHeading: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
  },
  inputField: {
    width: '100%',
    fontSize: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
  },
  buttonsView: {
    width: '80%',
    marginVertical: 15,
  },
});
