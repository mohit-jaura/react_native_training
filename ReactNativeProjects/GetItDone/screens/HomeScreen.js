import {FlatList, Modal, View} from 'react-native';
import ListTile from '../components/ListTile';
import React, {useEffect, useState} from 'react';

import IconButton from '../components/IconButton';
import CreateScreen from './CreateScreen';
import {createTodo, fetchTodo} from '../apiManager/TodoApiManager';
import {useQuery, QueryClient, useMutation} from '@tanstack/react-query';

const HomeScreen = ({navigation}) => {
  const queryClient = new QueryClient();
  const [visibleModal, setVisibleModal] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const newTodo = {
    id: null,
    name: '',
    description: '',
    date: null,
    isCompleted: false,
  };
  const saveTodoHandler = newTodo => {
    console.log('on home screen todo got====>', typeof newTodo);
    console.log('on home screen todo got====>', newTodo);
    todoMutation.mutate(newTodo);
    setVisibleModal(false);
  };
  function renderItem(itemData) {
    return <ListTile todo={itemData.item} />;
  }
  const addNewButtonHandler = () => {
    console.log('entered in add button===> ', visibleModal);
    setVisibleModal(true);
  };

  const {refetch: getDataFromApi} = useQuery(['fetchToDo'], fetchTodo, {
    onSuccess: response => {
      setTodoData(response);
      console.log(dataArray);
      console.log('type of response', typeof response);
    },
    onError: error => {
      console.log('error aagya ===>', JSON.stringify(error));
    },
    enabled: false,
  });

  const todoMutation = useMutation({
    mutationFn: todo => {
      createTodo(todo);
    },
    onSuccess: response => {
      queryClient.invalidateQueries(['fetchToDo']);
    },
    onError: error => {
      console.log(JSON.stringify(error));
    },
  });
  function cancelTodoHandler() {
    setVisibleModal(false);
  }
  useEffect(() => {
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
  useEffect(() => {}, [visibleModal]);
  useEffect(() => {
    getDataFromApi();
  }, [todoData]);

  return (
    <View>
      <FlatList
        data={todoData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={cancelTodoHandler}>
        <View style={{height: '50%', marginHorizontal: 20, marginTop: 230}}>
          <CreateScreen
            todo={newTodo}
            saveButtonHandler={saveTodoHandler}
            cancelButtonHandler={cancelTodoHandler}
          />
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
