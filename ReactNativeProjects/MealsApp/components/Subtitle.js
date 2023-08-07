import {StyleSheet, Text, View} from 'react-native';
function Subtitle({children}) {
  return (
    <View style={styles.subtitleView}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    margin: 5,
    textAlign: 'center',
  },
  subtitleView: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginHorizontal: 15,
  },
});
