import axios from 'axios';
const baseUrl =
  'https://react-native-dummy-e0c43-default-rtdb.asia-southeast1.firebasedatabase.app/';

export const fetchTodo = async () => {
  const response = await axios.get(`${baseUrl}todo.json`);
  const dataArray = [];
  for (key in response.data) {
    const todo = response.data[key];
    todo.id = key;
    dataArray.push(todo);
  }
  return dataArray;
};

export const createTodo = async todo => {
  const response = await axios.post(`${baseUrl}todo.json`, todo);
  return response.data;
};
export const markTodoIsCompleted = async todo => {
  const response = await axios.put(`${baseUrl}todo/${todo.id}.json`, todo);
  return response.data;
};

export const deleteTodo = async todoId => {
  console.log(todoId);
  const response = await axios.delete(`${baseUrl}todo/${todoId}.json`);
  console.log(response);
  return response.data;
};
