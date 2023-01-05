import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = newGoal => {
    setGoals(previousGoals => [
      {text: newGoal, id: Math.random().toString()},
      ...previousGoals,
    ]);

    console.log(goals);
  };

  const deleteGoalHandler = id => {
    setGoals(previousGoals => {
      return previousGoals.filter(goal => goal.id !== id);
    });
  };

  const hideModalHandler = hide => {
    setShowModal(hide);
  };
  return (
    <View style={styles.appContainer}>
      <View>
        <Button
          title="Add New Goal"
          onPress={() => {
            setShowModal(true);
          }}
          color="#009EFF"
        />
      </View>
      <GoalInput
        showModal={showModal}
        addGoalHandler={addGoalHandler}
        hideModalHandler={hideModalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={goalsData => {
            return (
              <GoalItem
                goalsData={goalsData}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 3,
    marginTop: 24,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
});

export default App;
