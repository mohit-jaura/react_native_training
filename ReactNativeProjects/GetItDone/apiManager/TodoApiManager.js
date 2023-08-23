import axios from 'axios';
const baseUrl =
  'https://react-native-dummy-e0c43-default-rtdb.asia-southeast1.firebasedatabase.app/';

export const fetchTodo = async () => {
  const response = await axios.get(`${baseUrl}todo.json`);
  const dataArray = [];
  for (key in response.data) {
    dataArray.push(key);
  }
  console.log(response.data);
  return response.data;
};

export const createTodo = async todo => {
  const response = await axios.post(`${baseUrl}todo.json`, todo);
  return response.data;
};
