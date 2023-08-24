import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import IconButton from './IconButton';
import {useState} from 'react';

function ListTile({todo, markIsCompleteHandler, deleteTodoHandler}) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const iconName = isCompleted === false ? 'circle-thin' : 'check-circle-o';
  const iconColor = isCompleted === false ? 'black' : 'green';
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={styles.contentContainer}>
          <View style={styles.detailView}>
            <Text style={styles.titleLabel}>{todo.name}</Text>
            <Text style={styles.descriptionLabel}>{todo.description}</Text>
          </View>
          <View style={styles.buttonView}>
            <IconButton
              iconeName={iconName}
              iconSize={25}
              iconColor={iconColor}
              onPressHandler={() => {
                setIsCompleted(!isCompleted);
                markIsCompleteHandler({
                  ...todo,
                  isCompleted: !isCompleted,
                });
              }}
            />
          </View>
          <View style={styles.buttonView}>
            <IconButton
              iconeName={'trash-o'}
              iconSize={25}
              iconColor={'red'}
              onPressHandler={() => {
                deleteTodoHandler(todo.id);
              }}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ListTile;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 8,
    elevation: 6,
    borderRadius: 12,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },

  contentContainer: {
    flexDirection: 'row',
  },

  detailView: {
    width: '70%',
    marginLeft: 20,
    marginVertical: 10,
  },
  buttonView: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  titleLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  descriptionLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
