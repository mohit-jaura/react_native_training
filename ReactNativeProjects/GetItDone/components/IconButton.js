import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function IconButton({iconeName, iconColor, iconSize, onPressHandler}) {
  return (
    <Pressable
      onPress={onPressHandler}
      style={({pressed}) => pressed && style.pressed}>
      <Icon name={iconeName} size={iconSize} color={iconColor} />
    </Pressable>
  );
}

export default IconButton;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
