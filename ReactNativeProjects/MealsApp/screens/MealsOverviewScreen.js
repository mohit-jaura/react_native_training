import {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsList from '../components/MealsList';
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

  return <MealsList meals={displayedMeals} navigation={navigation} />;
}

export default MealsOverviewScreen;
