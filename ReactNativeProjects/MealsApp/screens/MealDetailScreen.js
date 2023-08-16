import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useContext, useLayoutEffect} from 'react';
import {MEALS, FavouriteMeals} from '../data/dummy-data';
import {useDispatch, useSelector} from 'react-redux';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import ListView from '../components/ListView';
import IconButton from '../components/IconButton';
import {addFavourite, removeFavourite} from '../store/redux/favourites';
function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const meal = MEALS.find(meal => meal.id === mealId);
  const favouriteMealsIds = useSelector(state => state.favouriteMeals.ids);
  const isFavourite = favouriteMealsIds.includes(mealId);

  const dispatch = useDispatch();
  function headerRightButtonHandler() {
    if (isFavourite) {
      dispatch(removeFavourite({id: mealId}));
    } else {
      dispatch(addFavourite({id: mealId}));
    }
  }
  useLayoutEffect(() => {
    const mealTitle = meal.title;
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        const iconName = isFavourite ? 'heart' : 'heart-o';
        const iconColor = isFavourite ? 'red' : 'black';
        return (
          <IconButton
            iconName={iconName}
            iconColor={iconColor}
            onPressHandler={headerRightButtonHandler}
          />
        );
      },
    });
  }, [meal, headerRightButtonHandler, navigation]);

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
