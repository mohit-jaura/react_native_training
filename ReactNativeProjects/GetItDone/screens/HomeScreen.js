import {FlatList, Modal, Text, View} from 'react-native';
import ListTile from '../components/ListTile';
import React, {useEffect, useState} from 'react';

import IconButton from '../components/IconButton';
import CreateScreen from './CreateScreen';
import {
  createTodo,
  fetchTodo,
  markTodoIsCompleted,
  deleteTodo,
} from '../apiManager/TodoApiManager';
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
  useEffect(() => {
    getDataFromApi();
  }, [todoData, visibleModal]);
  const {refetch: getDataFromApi} = useQuery(['fetchToDo'], fetchTodo, {
    onSuccess: response => {
      console.log('enetred in fetch todo');
      setTodoData(response);
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
      console.log('enetred in create todo');
      queryClient.invalidateQueries(['fetchToDo']);
    },
    onError: error => {
      console.log(JSON.stringify(error));
    },
  });

  const markTodoIsCompletedMutation = useMutation({
    mutationFn: todo => {
      markTodoIsCompleted(todo);
    },
    onSuccess: response => {
      console.log('enetred in mark todo');
      queryClient.invalidateQueries(['fetchToDo']);
    },
    onError: error => {
      console.log(JSON.stringify(error));
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: todoId => {
      deleteTodo(todoId);
    },
    onSuccess: response => {
      console.log('enetred in delete todo');
      queryClient.invalidateQueries(['fetchToDo']);
    },
    onError: error => {
      console.log(JSON.stringify(error));
    },
  });
  const saveTodoHandler = newTodo => {
    todoMutation.mutate(newTodo);
    setVisibleModal(false);
  };

  const addNewButtonHandler = () => {
    setVisibleModal(true);
  };

  const markTodoIsCompletedHandler = todo => {
    markTodoIsCompletedMutation.mutate(todo);
  };

  const deleteTodoHandler = todoId => {
    deleteTodoMutation.mutate(todoId);
  };
  function cancelTodoHandler() {
    setVisibleModal(false);
  }

  function renderItem(itemData) {
    return (
      <ListTile
        todo={itemData.item}
        markIsCompleteHandler={markTodoIsCompletedHandler}
        deleteTodoHandler={deleteTodoHandler}
      />
    );
  }
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
