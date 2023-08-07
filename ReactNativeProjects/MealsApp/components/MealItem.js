import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import MealDetails from './MealDetails';

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPressHandler,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressHandler}>
        <View style={styles.innerContainer}>
          <Image source={{uri: imageUrl}} style={styles.mealImage} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },

  mealImage: {
    width: '100%',
    height: 250,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
    color: 'black',
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
