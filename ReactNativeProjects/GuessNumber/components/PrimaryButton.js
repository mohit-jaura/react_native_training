import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const PrimaryButton = ({children, onPress, color}) => {
  return (
    <View style={styles.outerContainr}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : [styles.innerContainer, {backgroundColor: color}]
        }
        onPress={onPress}
        android_ripple={{color: '#640233'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainr: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    borderRadius: 28,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed: {
    backgroundColor: '#640233',
    opacity: 0.75,
  },
});
