import {View} from 'react-native';
import {useLayoutEffect} from 'react';
import {MEALS} from '../data/dummy-data';
function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    const mealTitle = MEALS.find(meal => meal.id === mealId).title;
    navigation.setOptions({title: mealTitle});
  }, [mealId, navigation]);

  return <View></View>;
}

export default MealDetailScreen;
