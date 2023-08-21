import {FlatList, Modal, View} from 'react-native';
import {ToDoList, ToDoModel} from '../model/ToDoModel';
import ListTile from '../components/ListTile';
import {useEffect, useLayoutEffect, useState} from 'react';

import IconButton from '../components/IconButton';
import CreateScreen from './CreateScreen';
import {createTodo, fetchTodo} from '../apiManager/TodoApiManager';
function HomeScreen({navigation}) {
  const [visibleModal, setVisibleModal] = useState(false);
  function renderItem(itemData) {
    return <ListTile todo={itemData.item} />;
  }
  function addNewButtonHandler() {
    setVisibleModal(true);
  }

  function saveTodoHandler() {
    const todo = new ToDoModel(
      '2',
      'Todo2',
      '21-08-2023',
      'second todo create on firebase with axio api calling',
      false,
    );
    createTodo(todo);
    setVisibleModal(!visibleModal);
  }

  function cancelTodoHandler() {
    setVisibleModal(!visibleModal);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            iconeName={'plus-square-o'}
            iconSize={25}
            iconColor={'black'}
            onPressHandler={addNewButtonHandler}
          />
        );
      },
    });
  }, [navigation]);

  useEffect(() => {
    fetchTodo();
  });
  return (
    <View>
      <FlatList
        data={ToDoList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => {
          setVisibleModal(!visibleModal);
        }}>
        <View style={{height: '40%', marginHorizontal: 20, marginTop: 230}}>
          <CreateScreen
            saveButtonHandler={saveTodoHandler}
            cancelButtonHandler={cancelTodoHandler}
          />
        </View>
      </Modal>
    </View>
  );
}

export default HomeScreen;
