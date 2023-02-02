import React from 'react';
import {View, Text, Button} from 'react-native';

const GameScreen = props => {
  console.log('TAB PROPS ===>', JSON.stringify(props));
  return (
    <View>
      <Button
        title="jhgjhg"
        onPress={() => {
          props.navigation.navigate('StartGame', {value: 'hghjgjhgj'});
        }}
      />
      <Text>GameScreen</Text>
    </View>
  );
};

export default GameScreen;
