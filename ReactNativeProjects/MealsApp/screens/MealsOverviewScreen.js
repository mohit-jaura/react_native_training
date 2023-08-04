const {View, StyleSheet, Text, FlatList} = require('react-native');
import {useLayoutEffect} from 'react';

import MealItem from '../components/MealItem';
import {CATEGORIES, MEALS} from '../data/dummy-data';
function MealsOverviewScreen({route, navigation}) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoryId,
    ).title;
    navigation.setOptions({title: categoryTitle});
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    function onMealTappedHandler() {
      navigation.navigate('MealDetailScreen', {
        mealId: itemData.item.id,
      });
    }
    const item = itemData.item;
    const meal = {
      imageUrl: item.imageUrl,
      title: item.title,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      onPressHandler: onMealTappedHandler,
    };
    return <MealItem {...meal} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={meal => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
