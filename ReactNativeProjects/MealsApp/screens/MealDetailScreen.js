import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useLayoutEffect} from 'react';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import ListView from '../components/ListView';
function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const meal = MEALS.find(meal => meal.id === mealId);
  useLayoutEffect(() => {
    const mealTitle = meal.title;
    navigation.setOptions({title: mealTitle});
  }, [meal, navigation]);

  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <Image source={{uri: meal.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetails
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />
        <Subtitle>Ingredients</Subtitle>
        <ListView list={meal.ingredients} />
        <Subtitle>Steps </Subtitle>
        <ListView list={meal.steps} />
      </ScrollView>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 350,
    margin: 15,
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    margin: 8,
  },
  scrollView: {
    marginBottom: 20,
  },
});
