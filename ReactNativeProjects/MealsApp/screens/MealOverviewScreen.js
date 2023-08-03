const {View, StyleSheet, Text} = require('react-native');

function MealOverviewScreen({route}) {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>{categoryId}</Text>
    </View>
  );
}

export default MealOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
