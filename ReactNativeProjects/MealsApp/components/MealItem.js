import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

function MealItem({title, imageUrl, duration, complexity, affordability}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        // onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{uri: imageUrl}} style={styles.mealImage} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{duration} Min</Text>
          <Text style={styles.description}>{complexity.toUpperCase()}</Text>
          <Text style={styles.description}>{affordability.toUpperCase()}</Text>
        </View>
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

  description: {
    fontWeight: '500',
    fontSize: 13,
    padding: 2,
    color: 'black',
    marginBottom: 1,
    marginHorizontal: 4,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
});
