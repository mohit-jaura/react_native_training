import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function IconButton({iconName, iconColor, onPressHandler}) {
  return (
    <Pressable
      onPress={onPressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <Icon name={iconName} size={24} color={iconColor} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
