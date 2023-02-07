import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryButton from '../components/PrimaryButton';

const InputField = props => {
  const email = props.value;
  let iconColor = 'red';

  React.useLayoutEffect(() => {
    console.log('EMAIL_VALUE  =>', email ?? 'NO_VALUE');
  }, [props.value]);

  if (email) {
    if (email.includes('@gmail.com')) {
      iconColor = 'green';
    }
  }

  const VerifiedIcon = () => {
    return (
      <Icon
        name="check-circle-outline"
        size={20}
        color={iconColor}
        style={styles.iconView}
      />
    );
  };

  return (
    <View style={styles.inputFieldContainer}>
      <TextInput
        style={styles.inputField}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={newValue => props.onChangeTextHandler(newValue)}
      />
      {props.showIcon ? <VerifiedIcon /> : null}
    </View>
  );
};

const DribbleLoginDesign = () => {
  const [email, setEmail] = useState('');

  const emailInputHandler = changedEmail => {
    setEmail(changedEmail);
  };
  return (
    <LinearGradient
      colors={['#0081C9', '#5BC0F8', '#ECF9FF']}
      style={styles.mainView}>
      <View style={styles.container}>
        <Text style={styles.heading}>Register Yourself</Text>
        <InputField placeholder="Name" />
        <InputField
          placeholder="Email"
          value={email}
          showIcon={true}
          onChangeTextHandler={emailInputHandler}
        />
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
  inputFieldContainer: {
    flexDirection: 'row',
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
    paddingBottom: 5,
  },
  inputField: {
    width: '80%',
    fontSize: 15,
  },
  buttonsView: {
    width: '80%',
    marginVertical: 15,
  },

  iconView: {
    width: '20%',
    marginLeft: 25,
    alignSelf: 'center',
  },
});
