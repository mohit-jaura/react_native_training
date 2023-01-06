import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#dddddd'}}
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.deleteGoalHandler.bind(this, props.goalsData.item.id)}>
        <Text style={styles.goalText}>{props.goalsData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#7DE5ED',
  },

  goalText: {
    color: 'white',
    padding: 8,
  },

  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#5DA7DB',
  },
});

export default GoalItem;
