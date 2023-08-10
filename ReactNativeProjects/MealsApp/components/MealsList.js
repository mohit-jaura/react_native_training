import {FlatList, StyleSheet, View} from 'react-native';

import MealItem from '../components/MealItem';

function MealsList({meals, navigation}) {
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
        data={meals}
        keyExtractor={meal => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
