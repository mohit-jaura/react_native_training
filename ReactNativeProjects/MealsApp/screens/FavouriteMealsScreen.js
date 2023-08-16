import {useContext} from 'react';
import {Text, View} from 'react-native';
import MealsList from '../components/MealsList';
import {FavouritesContext} from '../store/context/favourites-context';
import {MEALS} from '../data/dummy-data';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
function FavouriteMealsScreen({navigation}) {
  const favouriteMealsIds = useSelector(state => state.favouriteMeals.ids);
  const favouriteMeals = MEALS.filter(meal =>
    favouriteMealsIds.includes(meal.id),
  );

  function EmptyDataMessage() {
    return (
      <View style={styles.containerView}>
        <Text style={styles.emptyMessage}>
          No meals added to favourites yet!
        </Text>
      </View>
    );
  }
  {
    if (favouriteMeals.length > 0) {
      return (
        <MealsList meals={favouriteMeals} navigation={navigation}></MealsList>
      );
    } else {
      return <EmptyDataMessage />;
    }
  }
}
export default FavouriteMealsScreen;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyMessage: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
});
