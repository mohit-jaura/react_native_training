import {StyleSheet, Text, View} from 'react-native';

function ListView({list}) {
  return (
    <View style={styles.listContainer}>
      {list.map(item => (
        <View style={styles.listTile}>
          <View style={styles.indicatorView} />
          <Text style={styles.title} key={item}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default ListView;

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 15,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    margin: 3,
  },
  listTile: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginHorizontal: 5,
  },
  indicatorView: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'black',
    marginRight: 5,
    marginTop: 10,
  },
});
