import {StyleSheet, Text, View} from 'react-native';

function MealDetails({duration, complexity, affordability}) {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>{duration} Min</Text>
      <Text style={styles.description}>{complexity.toUpperCase()}</Text>
      <Text style={styles.description}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  description: {
    fontWeight: '500',
    fontSize: 13,
    padding: 2,
    color: 'black',
    marginBottom: 1,
    marginHorizontal: 4,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
});
